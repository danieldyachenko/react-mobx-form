import FormStore from "./formStore";

export default class RootStore {
    form: FormStore
    constructor() {
        this.form = new FormStore()
    }
}
