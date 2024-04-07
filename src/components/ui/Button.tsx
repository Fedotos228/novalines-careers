import Link from 'next/link'
import { IButtonProps, IButtonStyles } from './ui.types'

const buttonStyles: IButtonStyles = {
  default:
    'inline-flex items-center gap-4 justify-center text-base whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blaze-500 disabled:pointer-events-none disabled:opacity-50 duration-300 transition',
  variant: {
    default: 'bg-blaze-500 text-white shadow font-normal hover:bg-blaze-500/90',
    primary: 'bg-coral-600 text-white shadow font-normal hover:bg-coral-600/90',
    outline:
      'border border-coral-600 bg-transparent shadow-sm hover:bg-coral-600 text-coral-600 hover:text-white',
    secondary: 'bg-gray-200 text-foreground shadow-sm hover:bg-gray-200/60',
    ghost: 'hover:bg-gray-100 hover:text-foreground',
    link: 'underline-offset-4 text-gray-500 underline font-normal hover:text-blaze-600',
  },
  size: {
    sm: 'h-10 rounded-md px-4 py-2 !text-md',
    default: 'h-12 px-6 rounded-lg py-3',
    lg: 'h-14 rounded-lg px-8 py-4',
    'icon-sm': 'h-[48px] w-[48px]',
    'icon-md': 'h-[60px] w-[60px]',
    icon: 'h-[72px] w-[72px]',
    custom: '',
  },
}

export default function Button({
  children,
  variant = 'default',
  size = 'default',
  className,
  href,
  ...props
}: IButtonProps) {
  return !href ? (
    <button
      className={`${buttonStyles.default} ${buttonStyles.variant[variant]} ${buttonStyles.size[size]} ${className}`}
      {...props}>
      {children}
    </button>
  ) : (
    <Link
      href={href}
      className={`${buttonStyles.default} ${buttonStyles.variant[variant]} ${buttonStyles.size[size]} ${className}`}
      {...props}>
      {children}
    </Link>
  )
}
