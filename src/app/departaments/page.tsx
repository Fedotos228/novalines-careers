import type { Metadata } from 'next'
import Departaments from './Departaments'

export const metadata: Metadata = {
  title: 'Departments | Cariere Novalines',
  keywords: 'Novalines departments, Novalines teams, Novalines divisions, Novalines units',
}

export default function DepartamentsPage() {
  return <Departaments />
}