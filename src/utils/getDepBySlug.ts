export async function getDepBySlug(slug: string) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/departaments/${slug}`)
  if (!data.ok) throw new Error("Failed to fetch data")

  return data.json()
}