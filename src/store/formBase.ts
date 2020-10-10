import { computed, makeObservable } from 'mobx';
import FormTextControl from './formTextControl';
import { IFormBase, IFormData } from './types';

export default class FormBase implements IFormBase {
    constructor() {
        makeObservable(this);
    }

    @computed
    get disabled(): boolean {
        const values: Array<FormTextControl> = Object.values(this);
        let emptyFields: number = 0;
        let errors: number = 0;

        values.forEach((item: FormTextControl) => {
            if (item.hasOwnProperty('value') && !item.value) emptyFields++;
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
            data[key] = formControl.hasOwnProperty('value') ? formControl.value : formControl.checked;
        }
        return data;
    }
}
