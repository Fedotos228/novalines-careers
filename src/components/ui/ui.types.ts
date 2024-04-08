export interface IButtonStyles {
  default: string
  variant: {
    default: string
    primary: string
    outline: string
    secondary: string
    ghost: string
    link: string
  }
  size: {
    default: string
    sm: string
    lg: string
    icon: string
    'icon-sm': string
    'icon-md': string
    custom: string
  }
}

export interface IButtonProps {
  children: React.ReactNode
  variant?: 'link' | 'outline' | 'default' | 'primary' | 'secondary' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-md' | 'custom'
  className?: string
  href?: string
  [key: string]: any
}

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'email' | 'password' | 'number' | 'tel'
  className?: string
  label: string
  id: string
  required: boolean
  [key: string]: any
} 