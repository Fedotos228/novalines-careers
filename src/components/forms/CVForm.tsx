import { Loader2 } from 'lucide-react';
import Button from '../ui/Button';
import { Input } from '../ui/Input';
import { Card, CardBody } from '../ui/Card';

type Props = {
    title: string;
};

export default function CVForm({ title }: Props) {
    return (
        <Card className="rounded-xl hover:border-border">
            <CardBody className="py-8 md:py-8">
                <form className="grid grid-cols-1 xs:grid-cols-2 gap-x-4 gap-y-8">
                    <Input type="text" id="first-name" label="First Name" required={true} />
                    <Input type="text" id="last-name" label="Last Name" required={true} />
                    <Input type="email" id="email" label="Email" required={true} />
                    <Input type="tel" id="phone" label="Phone number" required={true} />
                    <Input
                        type="text"
                        id="position"
                        label="Job position"
                        required={true}
                        disabled
                        defaultValue={title}
                    />
                    <Input type="text" id="facebook" label="Facebook" placeholder="Enter URL" />
                    <Button type="submit" className="xs:col-span-2" variant="primary">
                        {/* <Loader2 size={20} className="animate-spin" /> Sending */}
                        Send CV
                    </Button>
                </form>
            </CardBody>
        </Card>
    );
}
