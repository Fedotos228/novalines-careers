'use server'

import { resumeError } from '@/constants/resume'
import { getJobs } from '@/lib/content'
import nodemailer from 'nodemailer'

export type ApplyState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Strip line breaks so user input can never add extra mail headers.
const field = (formData: FormData, name: string) =>
  String(formData.get(name) ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, 200)

export async function submitApplication(_prev: ApplyState, formData: FormData): Promise<ApplyState> {
  // Honeypot: real people never see or fill this field.
  if (field(formData, 'website')) return { status: 'success', message: '' }

  const firstName = field(formData, 'first_name')
  const lastName = field(formData, 'last_name')
  const email = field(formData, 'email')
  const phone = field(formData, 'phone')
  const source = field(formData, 'source')
  const position = field(formData, 'position')
  const page = field(formData, 'page')

  if (!firstName || !lastName || !phone || !source || !formData.get('consent')) {
    return { status: 'error', message: 'Please fill in all fields.' }
  }
  if (!EMAIL_RE.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }
  if (!getJobs().some((job) => job.title === position)) {
    return { status: 'error', message: 'Please choose a position from the list.' }
  }

  const resume = formData.get('resume')
  if (!(resume instanceof File) || resume.size === 0) {
    return { status: 'error', message: 'Please attach your resume.' }
  }
  const resumeProblem = resumeError(resume)
  if (resumeProblem) return { status: 'error', message: resumeProblem }

  const { SMTP_USER, SMTP_PASSWORD, APPLICATIONS_TO } = process.env
  if (!SMTP_USER || !SMTP_PASSWORD || !APPLICATIONS_TO) {
    console.error('Application email is not configured: set SMTP_USER, SMTP_PASSWORD and APPLICATIONS_TO')
    return { status: 'error', message: 'Something went wrong. Please try again later.' }
  }

  const fullName = `${firstName} ${lastName}`
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  })

  try {
    await transporter.sendMail({
      from: { name: 'Nova Lines Careers Website', address: SMTP_USER },
      to: APPLICATIONS_TO,
      replyTo: { name: fullName, address: email },
      subject: `Application: ${position} - ${fullName}`,
      text: [
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Where did you hear about us: ${source}`,
        `Position: ${position}`,
        `Applied from: ${page}`,
      ].join('\n'),
      attachments: [
        { filename: resume.name, content: Buffer.from(await resume.arrayBuffer()), contentType: resume.type },
      ],
    })
  } catch (error) {
    console.error('Failed to send application email', error)
    return { status: 'error', message: 'Something went wrong. Please try again later.' }
  }

  return { status: 'success', message: 'Thank you! Your application has been sent — we’ll be in touch shortly.' }
}
