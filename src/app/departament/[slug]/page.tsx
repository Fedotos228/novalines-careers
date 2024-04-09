import Jobs from '@/components/Jobs';
import Breadcrumb from '@/components/ui/Breadcrumb';
import getAllDeps from '@/utils/getAllDeps';

type Params = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams() {
    const deps = await getAllDeps();

    return deps.data.map((dep: any) => ({
        slug: dep.attributes.slug,
    }));
}

export default function DepartamentPage({ params }: Params) {
    const { slug } = params;

    return (
        <section className="container mx-auto mt-7 mb-12">
            <Breadcrumb />
            <Jobs slug={slug} />
        </section>
    );
}
