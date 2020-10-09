import LoginStore from "./loginStore";

export default class RootStore {
    form: LoginStore
    constructor() {
        this.form = new LoginStore()
    }
}
