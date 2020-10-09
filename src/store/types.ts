import { ChangeEvent } from "react"
import FormStore from "./formStore"

export type Validator = (value: string) => string

export type TRootStore = {
    form: FormStore
}

export interface IFormStore {
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