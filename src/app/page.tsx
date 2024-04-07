import DepartamentList from '@/components/departament/DepartamentList';

export default function Home() {
    return (
        <section className="container mx-auto my-12 px-4">
            <h2 className="italic mb-6">Departments</h2>
            <DepartamentList />
        </section>
    );
}
