'use client';

import { options } from '@/api/api.helper';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { FolderOpen, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import Button from '../ui/Button';
import { Card, CardBody } from '../ui/Card';
import { Input } from '../ui/Input';
import { ICVFormData } from './form.types';

type Props = {
    title: string;
};

const MAX_FILE_SIZE = 1024 * 1024 * 10;
const ACCEPTED_FILES_TYPES = ['application/pdf'];

const CVSchema = z.object({
    firstName: z.string().min(2, { message: 'First name is too short' }),
    lastName: z.string().min(3, { message: 'Last name is too short' }),
    email: z.string().email({ message: ' Invalid email' }),
    phone: z.string().min(9, { message: 'Insert your phone number' }),
    position: z.string().min(2, { message: 'Insert position' }),
    file: z
        .any()
        .refine((files) => files?.length == 1, 'File is required.')
        .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 10MB.`)
        .refine(
            (files) => ACCEPTED_FILES_TYPES.includes(files?.[0]?.type),
            '.pdf file are accepted.',
        ),
});

export default function CVForm({ title }: Props) {
    const { mutate, error, isSuccess, isPending } = useMutation({
        mutationKey: ['cv'],
        mutationFn: async (formData: FormData) =>
            axios.post(
                `${process.env.NEXT_PUBLIC_HRM_URL}/recruitment/candidates`,
                formData,
                options,
            ),
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const [fileName, setFileName] = useState<string | undefined>(undefined);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICVFormData>({
        resolver: zodResolver(CVSchema),
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setFileName(file?.name);
    };

    const onSubmit: SubmitHandler<ICVFormData> = (data) => {
        const formData = new FormData();

        formData.append('full_name', `${data.firstName} ${data.lastName}`);
        formData.append('email', data.email);
        formData.append('position', data.position);
        formData.append('phone_numbers[]', data.phone);
        formData.append('telegram_username', data.telegram);

        if (data.file && data.file.length > 0) {
            formData.append('resume', data.file[0]);
        }

        mutate(formData);
    };

    return (
        <Card className="rounded-xl hover:border-border">
            <CardBody className="py-8 md:py-8">
                <form
                    className="grid grid-cols-1 xs:grid-cols-2 gap-x-4 gap-y-8"
                    onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type="text"
                        id="firstName"
                        label="First Name"
                        required
                        error={errors.firstName}
                        {...register('firstName', { required: true })}
                    />
                    <Input
                        type="text"
                        id="lastName"
                        label="Last Name"
                        required
                        error={errors.lastName}
                        {...register('lastName', { required: true })}
                    />
                    <Input
                        type="email"
                        id="email"
                        label="Email"
                        required
                        error={errors.email}
                        {...register('email', { required: true })}
                    />
                    <Input
                        type="tel"
                        id="tel"
                        label="Phone number"
                        required
                        error={errors.phone}
                        {...register('phone', { required: true })}
                    />
                    <Input
                        type="text"
                        label="Job position"
                        className="!pointer-events-none caret-white focus-visible:border-border opacity-70 bg-gray-100"
                        id="position"
                        required
                        value={title}
                        error={errors.position}
                        {...register('position', { required: true })}
                    />
                    <Input type="text" id="telegram" label="Telegram" />
                    <div className="relative col-span-2 border py-4 transition-colors  mb-2 duration-300 hover:border-blaze-500 rounded-xl ">
                        <div className="flex flex-col items-center justify-center h-full mb-4">
                            <FolderOpen className="mx-auto mb-1" />
                            <h6 className="text-center mb-2">
                                Upload your CV or drag & drop there
                            </h6>
                            <p className="text-center text-sm text-[#707070]">
                                {fileName ? fileName : 'PDF file size no more than 10MB'}
                            </p>
                        </div>
                        <Input
                            type="file"
                            id="file"
                            accept=".pdf"
                            className="h-full mt-0 appearance-none border-0 opacity-0 cursor-pointer absolute inset-0 w-full"
                            {...register('file', { required: true })}
                            error={errors.file}
                            onChange={onChange}
                        />
                    </div>
                    <Button type="submit" className="xs:col-span-2" variant="primary">
                        {isPending ? (
                            <>
                                <Loader2 size={20} className="animate-spin" /> Sending
                            </>
                        ) : (
                            'Send CV'
                        )}
                    </Button>
                    {error && <p className="text-red-500 text-sm">This resume already exists</p>}
                    {isSuccess && (
                        <p className="text-green-500 text-sm">Your CV has been sent successfully</p>
                    )}
                </form>
            </CardBody>
        </Card>
    );
}
