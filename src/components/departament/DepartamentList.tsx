'use client';

import { instance } from '@/api/api.intercepter';
import { useQuery } from '@tanstack/react-query';
import qs from 'qs';
import DepartamentCard from './DepartamentCard';
import Button from '../ui/Button';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

const query = qs.stringify({
    fields: ['title', 'slug'],
    populate: {
        jobs: {
            fields: ['title', 'slug'],
        },
    },
});

export default function DepartamentList() {
    const [loading, setLoading] = useState<boolean>(false);
    const { data, isFetched } = useQuery({
        queryKey: ['departaments'],
        queryFn: async () =>
            instance.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/departaments?${query}`),
        select: (data) => data.data.data.map((item: any) => item.attributes),
    });

    if (!isFetched) return <div>Loading...</div>;

    const loadMore = () => {
        setLoading(true);
        console.log('Load more');

        setTimeout(() => {
            setLoading(false);
        }, 1500);
    };

    return (
        <>
            <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
                {data.map((departament: any) => (
                    <DepartamentCard
                        key={departament.slug}
                        slug={departament.slug}
                        title={departament.title}
                        jobs={departament.jobs}
                    />
                ))}
            </div>

            {data.length > 12 && (
                <Button className="mt-7 mx-auto !flex" onClick={loadMore} disabled={loading}>
                    {loading && <Loader2 size={18} className="animate-spin" />} Load More
                </Button>
            )}
        </>
    );
}
