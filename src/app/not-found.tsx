'use client'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'

export default function NotFound() {
	const router = useRouter()

	return (
		<div className='flex flex-col my-32 items-center justify-center text-center'>
			<span className='bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent'>
				404
			</span>
			<h2 className='my-2 font-heading text-2xl font-bold'>
				Oups! Pagina nu a fost găsită.
			</h2>
			<p>
				Ne pare rău, dar pagina pe care încercați să o accesați <br />{' '}
				nu există sau a fost eliminată.
			</p>
			<div className='mt-8 flex justify-center gap-2'>
				<Button onClick={() => router.back()}>Mergi înapoi</Button>
				<Button href='/' variant='ghost'>
					La prima pagină
				</Button>
			</div>
		</div>
	)
}
