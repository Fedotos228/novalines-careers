import type { Metadata } from 'next'
import Departaments from './Departaments'

export const metadata: Metadata = {
  title: 'Departments | Cariere Novalines',
}

export default function DepartamentsPage() {
  return <Departaments />
}