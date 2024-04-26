import { notFound } from 'next/navigation'

export async function getDepBySlug(slug: string) {
	const data = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/departaments/${slug}`,
	)
	if (!data.ok) {
		notFound()
	}

	return data.json()
}
