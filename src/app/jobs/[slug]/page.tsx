'use client';

import { instance } from '@/api/api.intercepter';
import Loader from '@/components/Loader';
import CVForm from '@/components/forms/CVForm';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { Card, CardBody, CardFooter, CardHeader } from '@/components/ui/Card';
import { useQuery } from '@tanstack/react-query';

interface JobSingleProps {
    params: {
        slug: string;
    };
}

export default function JobSingle({ params }: JobSingleProps) {
    const { slug } = params;

    const { data: job, isFetched } = useQuery({
        queryKey: ['job'],
        queryFn: async () =>
            instance.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/jobs/${slug}?populate=*`),
        select: (data) => data.data.data.attributes,
    });

    if (!isFetched) return <Loader />;

    return (
        <div className="container px-4 mx-auto mb-12 mt-7">
            <Breadcrumb className="mb-6" page={job.title as string} />

            <div className="grid gap-5 grid-cols-1 md:grid-cols-[1fr_260px]  lg:grid-cols-[1fr_310px] xl:grid-cols-[1fr_410px] lg:gap-8 relative">
                <div>
                    <Card className=" mb-8 hover:border-border">
                        <CardHeader>
                            <h1>{job.title}</h1>
                            {job.description && (
                                <div
                                    id="job-description"
                                    dangerouslySetInnerHTML={{ __html: job.description }}></div>
                            )}
                        </CardHeader>

                        <CardBody>
                            <h6 className="font-medium">Responsabilities:</h6>
                            <ul className="list-disc pl-4 flex flex-col gap-2 text-muted-foreground mt-3 mb-6">
                                <li>Search for loads on US truckload websites</li>
                                <li>
                                    Negotiate competitive rates with brokers based on the current
                                    market
                                </li>
                                <li>Perform daily phone calls with brokers and drivers</li>
                                <li>Plan and schedule driver&apos;s routes</li>
                                <li>
                                    Use basic computer systems and programs (e.g., Microsoft Excel,
                                    Google drive, etc) to keep track of your drivers and their loads
                                </li>
                                <li>
                                    Make cost-effective decisions to facilitate the best logistics
                                    and maximize the profit
                                </li>
                                <li>
                                    Build and maintain a high level of trust and support with our
                                    drivers.
                                </li>
                            </ul>

                            <h6 className="font-medium">What we want:</h6>
                            <ul className="list-disc pl-4 flex flex-col gap-2 text-muted-foreground mt-3 mb-6">
                                <li>
                                    Proven experience in dispatching, scheduling, or a related role.
                                </li>
                                <li>
                                    Excellent communication skills in English, both verbal and
                                    written (minimum B2)
                                </li>
                                <li>
                                    Proficiency in using dispatching software and other relevant
                                    tools.
                                </li>
                                <li>
                                    Ability to remain calm under pressure and make quick decisions
                                </li>
                                <li>
                                    Team player with a positive attitude and willingness to learn.
                                </li>
                            </ul>

                            <h6 className="font-medium">What we offer:</h6>
                            <ul className="list-disc pl-4 flex flex-col gap-2 text-muted-foreground mt-3 mb-6">
                                <li>
                                    Competitive compensation package (from 500$ - Sky is the limit)
                                </li>
                                <li>Opportunities for professional growth and development.</li>
                                <li>Engaging and supportive work environment.</li>
                                <li>
                                    Great office space with lots and lots of parking in the center
                                    of Chisinau.
                                </li>
                                <li>Delicious coffee from one of the best coffee shops.</li>
                            </ul>
                        </CardBody>

                        <CardFooter>
                            <p>
                                If you&apos;re ready to join a dynamic team and play a vital role in
                                ensuring the smooth operation of our services, we want to hear from
                                you! To apply, please send your CV down below.
                            </p>
                        </CardFooter>
                    </Card>
                    <CVForm title={job.title} />
                </div>

                <Card className="hover:border-border h-fit sticky top-32">
                    <CardBody>
                        <ul className="flex flex-col gap-6 md:gap-8">
                            <li>
                                <p className="font-medium mb-1">City:</p>
                                <span className="text-muted-foreground">
                                    Chișinău, Republic of Moldova
                                </span>
                            </li>

                            <li>
                                <p className="font-medium mb-1">Education:</p>
                                <span className="text-muted-foreground">Any</span>
                            </li>

                            <li>
                                <p className="font-medium mb-1">Experience:</p>
                                <span className="text-muted-foreground">1 year</span>
                            </li>

                            <li>
                                <p className="font-medium mb-1">Salary:</p>
                                <span className="text-muted-foreground">800 USD +</span>
                            </li>

                            <li>
                                <p className="font-medium mb-1">Schedule:</p>
                                <span className="text-muted-foreground">Full time work</span>
                            </li>

                            <li>
                                <p className="font-medium mb-1">Place of work:</p>
                                <span className="text-muted-foreground">
                                    On the employer&apos;s premises
                                </span>
                            </li>

                            <li>
                                <p className="font-medium mb-1">English level:</p>
                                <span className="text-muted-foreground">English B2+</span>
                            </li>

                            <li>
                                <p className="font-medium mb-1">E-mail:</p>
                                <span className="text-muted-foreground">jobs@novalines.com</span>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}
