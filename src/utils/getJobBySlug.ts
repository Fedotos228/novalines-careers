import { notFound } from 'next/navigation'
import qs from 'qs'

const query = qs.stringify({
	fields: ['title', 'description'],
})

export async function getJobBySlug(slug: string) {
	const data = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/jobs/${slug}?${query}`,
	)

	if (!data.ok) notFound()

	return data.json()
}
