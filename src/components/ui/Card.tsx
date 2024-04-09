import React from 'react';

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div
            className={`${className ? className : ''}
            rounded-xl border border-gray-200 transition-colors duration-300 hover:border-blaze-500`}>
            {children}
        </div>
    );
}

function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <header className={`${className ? className : ''} px-4 pt-4 md:px-6 md:pt-6`}>
            {children}
        </header>
    );
}

function CardBody({ children, className }: { children: React.ReactNode; className?: string }) {
    return <main className={`${className ? className : ''} p-4 md:p-6`}>{children}</main>;
}

function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <footer className={`${className ? className : ''} pb-4 px-4 md:pb-6 md:px-6`}>
            {children}
        </footer>
    );
}

export { Card, CardBody, CardFooter, CardHeader };
