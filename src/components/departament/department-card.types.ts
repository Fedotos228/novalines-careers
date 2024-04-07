interface DepartamentCardProps {
    slug: string;
    title: string;
    jobs: {
        data: {
            id: number;
            title: string;
        }[];
    };
}
