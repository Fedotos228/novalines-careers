import Jobs from '@/components/Jobs'
import Breadcrumb from '@/components/ui/Breadcrumb'
import getAllDeps from '@/utils/getAllDeps'

type Params = {
  params: {
    slug: string
  }
}

export default function DepartamentPage({ params }: Params) {
  const { slug } = params

  return (
    <div className='container mx-auto mt-7 mb-12'>
      <Breadcrumb />
      <Jobs slug={slug} />
    </div>
  )
}

export async function generateStaticParams() {
  const deps = await getAllDeps()

  return deps.data.map((dep: any) => ({
    slug: dep.attributes.slug,
  }))
}
