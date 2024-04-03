import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='bg-white p-4 flex items-center justify-between'>
      <Image src='/logo.svg' alt='logo' width={130} height={60} />
      <nav className='flex items-center gap-2'>
        <Link href='/' className='text-black font-semibold'>
          Departamente
        </Link>
        <Link href='/jobs' className='text-black'>
          Job Opening
        </Link>
      </nav>
    </header>
  )
}