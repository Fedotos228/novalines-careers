'use client'

import { instance } from '@/api/api.intercepter'
import { useQuery } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import qs from 'qs'
import { useState } from 'react'
import Loader from '../elements/Loader'
import Button from '../ui/Button'
import DepartamentCard from './DepartamentCard'

const query = qs.stringify({
    fields: ['title', 'slug'],
    populate: {
        jobs: {
            fields: ['title', 'slug', 'description'],
        },
    },
})

export default function DepartamentList() {
    const [loading, setLoading] = useState<boolean>(false)
    const { data, isFetched } = useQuery({
        queryKey: ['departaments'],
        queryFn: async () =>
            instance.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/departaments?${query}`),
        select: (data) => data.data.data.map((item: any) => item.attributes),
    })

    if (!isFetched) return <Loader loading={!isFetched} />

    const loadMore = () => {
        setLoading(true)
        console.log('Load more')

        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }

    return (
        <>
            <div className="grid xs:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
                {data.map((departament: any) => (
                    <DepartamentCard
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
    )
}
