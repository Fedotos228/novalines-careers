import Button from '../ui/Button'
import { Input } from '../ui/Input'

type Props = {
  title: string
}

export default function CVForm({ title }: Props) {
  return (
    <form className='grid grid-cols-2 gap-x-4 gap-y-8 mt-8 border border-border px-6 py-8 rounded-xl'>
      <Input
        type="text"
        id="first-name"
        label="First Name"
        required={true}
      />
      <Input
        type="text"
        id="last-name"
        label="Last Name"
        required={true}
      />
      <Input
        type="email"
        id="email"
        label="Email"
        required={true}
      />
      <Input
        type="tel"
        id="phone"
        label="Phone number"
        required={true}
      />
      <Input
        type="text"
        id="position"
        label="Job position"
        required={true}
        disabled
        defaultValue={title}
      />
      <Input
        type="text"
        id="facebook"
        label="Facebook"
        placeholder="Enter URL"
      />
      <Button type="submit" className='col-span-2' variant='primary'>
        Send CV
      </Button>
    </form>
  )
}