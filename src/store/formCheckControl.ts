import { observable, action, makeObservable } from 'mobx';

export default class FormCheckControl {
    constructor(initialChecked?: boolean) {
        this.checked = initialChecked ? initialChecked : false
        makeObservable(this);
    }

    @observable
    checked: boolean;

    @observable
    error: string | null = null;

    @action.bound
    onChange() {
        this.checked = !this.checked;
    }
}
