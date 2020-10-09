import { computed, makeObservable, observable } from 'mobx';
import FormControl from './formControl';
import { IFormData } from './types';

export default class FormStore {
    constructor() {
        makeObservable(this);
    }

    @observable
    login = new FormControl((value: string) => {
        let errorMessage: null | string;
        if (value.length > 5) errorMessage = 'Длинный логин';
        else if (!value.length) errorMessage = 'Введите логин';
        return errorMessage;
    });

    @observable
    password = new FormControl((value: string) => {
        let errorMessage: null | string;
        if (value.length > 5) errorMessage = 'Длинный пароль';
        else if (!value.length) errorMessage = 'Введите пароль';
        return errorMessage;
    });

    @computed
    get disabled() {
        const values: Array<FormControl> = Object.values(this);
        let emptyFields: number = 0;
        let errors: number = 0;

        values.forEach((item: FormControl) => {
            if (!item.value) emptyFields++;
            if (item.error) errors++;
        });

        if (emptyFields || errors) {
            return true;
        } else return false;
    }

    @computed
    get formData() {
        const data: IFormData = {} as IFormData;
        for (const [key, formControl] of Object.entries(this)) {
            data[key] = formControl.value;
        }
        return data;
    }
}
