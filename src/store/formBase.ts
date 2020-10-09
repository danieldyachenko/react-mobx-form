import { computed, makeObservable } from 'mobx';
import FormControl from './formControl';
import LoginStore from './loginStore';
import { IFormBase, IFormData } from './types';

export default class FormBase implements IFormBase {
    constructor() {
        makeObservable(this);
    }

    @computed
    get disabled(): boolean {
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
    get formData(): IFormData {
        const data: IFormData = {} as IFormData;
        for (const [key, formControl] of Object.entries(this)) {
            data[key] = formControl.value;
        }
        return data;
    }
}
