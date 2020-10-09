import LoginStore from "./loginStore";
import { IRootStore } from "./types";

export default class RootStore implements IRootStore {
    loginForm: LoginStore
    constructor() {
        this.loginForm = new LoginStore()
    }
}
