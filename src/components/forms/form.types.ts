export interface ICVFormData {
  firstName: string
  lastName: string
  email: string
  phone: number
  position: string
  telegram: string
  file: any
}

export type CVValidFieldNames =
  | "firstName"
  | "lastName"
  | "email"
  | "phone"
  | "position"
  | "telegram"
  | "file"