import Link from 'next/link'

export default function Breadcrumb({ page, className }: { page: string; className?: string }) {
    return (
        <div className={`${className ? className : ''} uppercase flex gap-3`}>
            <Link
                href={'/'}
                className="transition-colors hover:text-blaze-500 hover:underline underline-offset-4">
                Departments
            </Link>
            {'/'}
            <span className="text-muted-foreground"> {page}</span>
        </div>
    )
}
