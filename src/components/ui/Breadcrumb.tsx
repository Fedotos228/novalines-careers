import Link from 'next/link';

export default function Breadcrumb() {
    return (
        <div className="uppercase flex gap-3">
            <Link
                href={'/'}
                className="transition-colors hover:text-blaze-500 hover:underline underline-offset-4">
                Departments
            </Link>
            {'/'}
            <span className="text-muted-foreground"> Marketing</span>
        </div>
    );
}
