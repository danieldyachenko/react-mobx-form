import FormStore from "./formStore"

export type Validator = (value: string) => string

export type TRootStore = {
    form: FormStore
}