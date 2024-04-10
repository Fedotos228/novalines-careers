import Link from 'next/link'

export default function DepartamentCard({ slug, title, jobs }: DepartamentCardProps) {
    return (
        <div key={slug} className="border border-[#EDEDED] rounded-xl overflow-hidden h-fit">
            <header className="bg-blaze-500 px-6 py-4">
                <Link href={`departament/${slug}`}>
                    <h5 className="text-white">{title}</h5>
                </Link>
            </header>

            <main className="p-6">
                {jobs.data.slice(0, 2).map((job: any) => (
                    <div key={job.attributes.id}
                        className={`${jobs.data.length >= 2 ? 'border-b pb-3 mb-3' : ''} [&:nth-child(2)]:border-b-0 [&:nth-child(2)]:pb-0 [&:nth-child(2)]:mb-0`}
                    >
                        <Link
                            className={`block text-[#202020] transition-colors duration-300 hover:text-blaze-500 mb-2`}
                            href={`/jobs/${job.attributes.slug}`}>
                            <h6 className={``}>
                                {job.attributes.title}
                            </h6>
                        </Link>
                        <p className='text-sm line-clamp-3 text-[#707070] leading-6'>{job.attributes.description}</p>
                    </div>
                ))}
            </main >
        </div >
    )
}
