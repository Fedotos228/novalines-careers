const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN

export default async function getAllDeps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/departaments?fields[0]=title&fields[1]=desc`)

  if (!res.ok) throw new Error("Failed to fetch data")
  return res.json()
}