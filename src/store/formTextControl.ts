import { observable, action, makeObservable } from "mobx";
import { ChangeEvent } from "react";
import { IFormControl, Validator } from "./types";

export default class FormTextControl implements IFormControl {
    constructor(private validator?: Validator, initialValue?: string) {
        this.value = initialValue ? initialValue : "";
        makeObservable(this);
    }

    @observable
    value: string;

    @observable
    error: string | null = null;

    @observable
    touched: boolean = false;

    @action.bound
    onChange(event: ChangeEvent<HTMLInputElement>) {
        this.value = event.target.value;
        this.validate();
    }

    @action.bound
    onBlur() {
        this.validate();
        this.touched = true;
    }

    @action
    validate() {
        if (this.hasOwnProperty("validator")) {
            this.error = this.validator(this.value);
        }
    }
}
