'use client'


import { instance } from '@/api/api.intercepter'
import { useQuery } from '@tanstack/react-query'
import qs from 'qs'
import DepartamentCard from './DepartamentCard'

const query = qs.stringify({
  fields: ['title', 'slug'],
  populate: {
    jobs: {
      fields: ['title', 'slug'],
    }
  },
})

export default function DepartamentList() {
  const { data, isFetched } = useQuery({
    queryKey: ['departaments'],
    queryFn: async () => instance.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/departaments?${query}`),
    select: data => data.data.data.map((item: any) => item.attributes),
  })

  if (!isFetched) return <div>Loading...</div>

  return (
    <div className='grid grid-cols-4 gap-7 mt-5'>
      {data?.map((departament: any) => (
        <DepartamentCard slug={departament.slug} title={departament.title} jobs={departament.jobs} />
      ))}
    </div>
  )
}