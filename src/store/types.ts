import { ChangeEvent } from "react"
import LoginStore from "./loginStore"

export type Validator = (value: string) => string

export type TRootStore = {
    form: LoginStore
}

export interface ILoginStore {
    login: string
    password: string
}

export interface IFormData {
    login: string
    password: string
    [propName: string]: number | string
}

export interface IFormControl {
    value: string
    error: string
    touched: boolean
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    onBlur: () => void
    validate: () => void
}

export interface IFormBase {
    disabled: boolean
    formData: IFormData
}

export interface IRootStore {
    loginForm: LoginStore
}