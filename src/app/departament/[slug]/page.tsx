import JobsList from '@/components/JobsList'
import getAllDeps from '@/utils/getAllDeps'

type Params = {
  params: {
    slug: string
  }
}

export default function DepartamentPage({ params }: Params) {
  const { slug } = params

  return <JobsList slug={slug} />
}

export async function generateStaticParams() {
  const deps = await getAllDeps()

  return deps.data.map((dep: any) => ({
    slug: dep.attributes.slug,
  }))
}
