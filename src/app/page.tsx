import DepartamentList from '@/components/departament/DepartamentList'

export default function Home() {
  return (
    <div className='container mx-auto my-12'>
      <h2 className='italic'>Departments</h2>
      <DepartamentList />
    </div>
  )
}
