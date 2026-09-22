'use client'

import { ApplyState, submitApplication } from '@/app/actions/apply'
import { Loader2 } from 'lucide-react'
import { startTransition, useActionState } from 'react'
import Button from '../ui/Button'

const HR_EMAIL = 'careers@novalines.com'

const initialState: ApplyState = { status: 'idle', message: '' }

const SOURCES = [
    'Facebook',
    'Instagram',
    'LinkedIn',
    'Google search',
    'Job board',
    'Friend or colleague',
    'Other',
]

const labelClass = 'block text-sm font-bold uppercase italic mb-2'
const fieldClass =
    'w-full border border-border rounded-xl p-3 outline-none bg-transparent transition-colors focus:border-blaze-500'

type Props = {
    positions: string[]
    defaultPosition: string
}

export default function ApplyForm({ positions, defaultPosition }: Props) {
    const [state, formAction, pending] = useActionState(submitApplication, initialState)

    // Submitting manually keeps the typed values if the server returns an error
    // (a plain `action={formAction}` would reset the form after every submit).
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        data.set('page', window.location.href)
        startTransition(() => formAction(data))
    }

    if (state.status === 'success') {
        return (
            <p role="status" className="text-center text-lg">
                {state.message || 'Thank you! Your application has been sent.'}
            </p>
        )
    }

    return (
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6" onSubmit={onSubmit}>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

            <fieldset className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <legend className={labelClass}>Name</legend>
                <input name="first_name" placeholder="First name" aria-label="First name" autoComplete="given-name" required className={fieldClass} />
                <input name="last_name" placeholder="Last name" aria-label="Last name" autoComplete="family-name" required className={fieldClass} />
            </fieldset>

            <label className="sm:col-span-2">
                <span className={labelClass}>Email</span>
                <input type="email" name="email" placeholder="Email" autoComplete="email" required className={fieldClass} />
            </label>

            <label className="sm:col-span-2">
                <span className={labelClass}>Phone</span>
                <input type="tel" name="phone" placeholder="Phone" autoComplete="tel" required className={fieldClass} />
            </label>

            <label className="sm:col-span-2">
                <span className={labelClass}>Where did you hear about us?</span>
                <select name="source" required defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                        Where did you hear about us?
                    </option>
                    {SOURCES.map((source) => (
                        <option key={source}>{source}</option>
                    ))}
                </select>
            </label>

            <label className="sm:col-span-2">
                <span className={labelClass}>Which position are you interested in?</span>
                <select name="position" required defaultValue={defaultPosition} className={fieldClass}>
                    {positions.map((position) => (
                        <option key={position}>{position}</option>
                    ))}
                </select>
            </label>

            <label className="sm:col-span-2 flex items-start gap-3 text-xs font-bold uppercase italic text-muted-foreground">
                <input type="checkbox" name="consent" required className="mt-0.5 size-4 shrink-0 accent-blaze-500" />
                I agree to the Terms &amp; Conditions and Privacy Policy, provide my electronic signature, and
                consent to receive automated marketing calls, text messages or emails.
            </label>

            <Button type="submit" variant="primary" className="sm:col-span-2" disabled={pending}>
                {pending ? (
                    <>
                        <Loader2 size={20} className="animate-spin" /> Sending
                    </>
                ) : (
                    'Send application'
                )}
            </Button>

            {state.status === 'error' && (
                <p role="alert" className="sm:col-span-2 text-sm text-red-500">
                    {state.message} You can also write to us at{' '}
                    <a href={`mailto:${HR_EMAIL}`} className="underline">
                        {HR_EMAIL}
                    </a>
                    .
                </p>
            )}
        </form>
    )
}
