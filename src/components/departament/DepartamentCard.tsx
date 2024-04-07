import Link from 'next/link';

export default function DepartamentCard({ slug, title, jobs }: DepartamentCardProps) {
    return (
        <div className="border border-[#EDEDED] rounded-xl overflow-hidden h-fit">
            <header className="bg-blaze-500 px-6 py-4">
                <h5 className="text-white">{title}</h5>
            </header>

            <main className="p-6">
                <p className="text-sm mb-3 pb-3 border-b text-muted-foreground leading-[180%] line-clamp-3 max-h-[83px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minima
                    odit qui tenetur quos nobis esse natus aperiam omnis pariatur.
                </p>
                <ul>
                    {jobs.data.slice(0, 2).map((job: any) => (
                        <li key={job.attributes.id} className="underline mb-3">
                            <Link
                                className="text-[#202020] transition-colors duration-300 hover:text-blaze-500"
                                href={`/job/${slug}`}>
                                {job.attributes.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>

            {jobs.data.length > 2 && (
                <footer className="flex justify-end">
                    <Link
                        href={`/departament/${slug}`}
                        className="text-muted-foreground hover:text-gray-900 transition-colors duration-300 underline px-6 pb-6">
                        See all jobs
                    </Link>
                </footer>
            )}
        </div>
    );
}
