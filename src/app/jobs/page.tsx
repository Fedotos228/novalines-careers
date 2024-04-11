import Button from '@/components/ui/Button'

export default function Jobs() {
  return (
    <div className='container mx-auto flex items-center justify-center flex-col h-[90vh]'>
      <h1 className='text-center italic max-w-full mb-1'>
        There is no job opening available now
      </h1>
      <p className='text-[#707070]'>Don`&apos;`t worry, your candidacy counts! Follow us and maybe a new position will appear soon. </p>
      <Button href='/' variant="default" className='mt-6 uppercase'>
        return to main page
      </Button>
    </div>
  )
}
