// Shared by the application form and its Server Action.
export const RESUME_MAX_BYTES = 4 * 1024 * 1024

export const RESUME_TYPES: Record<string, string> = {
  'application/pdf': '.pdf',
  'application/msword': '.doc',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
}

export const RESUME_ACCEPT = Object.values(RESUME_TYPES).join(',')

export function resumeError(file: File): string | null {
  if (!(file.type in RESUME_TYPES)) return 'Resume must be a PDF, DOC or DOCX file.'
  if (file.size > RESUME_MAX_BYTES) return 'Resume must be 4MB or smaller.'
  return null
}
