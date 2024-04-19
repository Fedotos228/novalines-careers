import { getDepBySlug } from '@/utils/getDepBySlug'

type DepartamentSinglePropsType = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: DepartamentSinglePropsType) {
  const { slug } = params

  const depData = await getDepBySlug(slug)
  const dep = depData.data.attributes

  return {
    title: `${dep.title} | Cariere Novalines`,
    description: dep.description,
    keywords: dep.title
  }
}


export default function DepartamentLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  )
}