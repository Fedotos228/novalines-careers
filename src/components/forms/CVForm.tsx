'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { FolderOpen } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Button from '../ui/Button'
import { Card, CardBody } from '../ui/Card'
import { Input } from '../ui/Input'
import { ICVFormData } from './form.types'

type Props = {
    title: string
}

const MAX_FILE_SIZE = 1024 * 1024 * 10
const ACCEPTED_FILES_TYPES = ['pdf']

const CVSchema = z.object({
    firstName: z.string().min(2, { message: 'First name is too short' }),
    lastName: z.string().min(3, { message: 'Last name is too short' }),
    email: z.string().email({ message: ' Valid email' }),
    phone: z.number({
        required_error: "required field",
        invalid_type_error: "Phone is required",
    }).min(9, { message: 'Insert your phone number' }),
    position: z.string().min(2, { message: 'Insert position' }),
    file: z
        .any()
        .refine((files) => files?.length == 1, "File is required.")
        .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 10MB.`)
        .refine(
            (files) => ACCEPTED_FILES_TYPES.includes(files?.[0]?.type),
            ".pdf file are accepted."
        ),
})


export default function CVForm({ title }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm<ICVFormData>({
        resolver: zodResolver(CVSchema),
    })

    const onSubmit = async (data: ICVFormData) => {
        console.log("SUCCESS", data)
    }

    let content = (
        <>
            <FolderOpen className='mx-auto mb-2' />
            <h6 className='text-center mb-1'>Upload your CV or drag & drop there</h6>
            <p className='text-center text-sm text-[#707070]'>PDF file size no more than 10MB</p>
        </>
    )


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        console.log(file)
        if (file) {
            content = (
                <p className='text-center text-sm text-[#707070]'>
                    {file.name} <span className='text-blaze-500'>Remove</span>
                </p>
            )
        }
    }

    return (
        <Card className="rounded-xl hover:border-border">
            <CardBody className="py-8 md:py-8">
                <form className="grid grid-cols-1 xs:grid-cols-2 gap-x-4 gap-y-8" onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type="text"
                        id="firstName"
                        label="First Name"
                        required
                        register={register}
                        error={errors.firstName}
                    />
                    <Input
                        type="text"
                        id="lastName"
                        label="Last Name"
                        required
                        register={register}
                        error={errors.lastName}
                    />
                    <Input
                        type="email"
                        id="email"
                        label="Email"
                        required
                        register={register}
                        error={errors.email}
                    />
                    <Input
                        type="tel"
                        id="email"
                        label="Phone number"
                        required
                        register={register}
                        error={errors.phone}
                    />
                    <Input
                        type="text"
                        id="Job position"
                        name="position"
                        required
                        disabled
                        defaultValue={title}
                        register={register}
                        errors={errors.position}
                    />
                    <Input
                        type="text"
                        id="telegram"
                        label="Telegram"
                    />
                    <div className='relative col-span-2 h-28 border rounded-xl'>
                        <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                            {content}
                        </div>
                        <Input
                            type="file"
                            id="file"
                            className="h-full mt-0 appearance-none border-0 opacity-0"
                            onChange={onChange}
                            register={register}
                        />
                    </div>
                    <Button type="submit" className="xs:col-span-2" variant="primary">
                        {/* <Loader2 size={20} className="animate-spin" /> Sending */}
                        Send CV
                    </Button>
                </form>
            </CardBody>
        </Card>
    )
}
