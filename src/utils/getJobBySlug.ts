import qs from 'qs'

const query = qs.stringify({
  fields: ['title', 'description']
})

export async function getJobBySlug(slug: string) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/jobs/${slug}?${query}`)
  if (!data.ok) throw new Error("Failed to fetch data")

  return data.json()
}