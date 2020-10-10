import { makeObservable, observable } from 'mobx';
import FormBase from './formBase';
import FormCheckControl from './formCheckControl';
import FormTextControl from './formTextControl';

export default class LoginStore extends FormBase {
    constructor() {
        super();
        makeObservable(this);
    }

    @observable
    login = new FormTextControl((value: string) => {
        let errorMessage: null | string;
        if (value.length > 5) errorMessage = 'Длинный логин';
        else if (!value.length) errorMessage = 'Введите логин';
        return errorMessage;
    });

    @observable
    password = new FormTextControl((value: string) => {
        let errorMessage: null | string;
        if (value.length > 5) errorMessage = 'Длинный пароль';
        else if (!value.length) errorMessage = 'Введите пароль';
        return errorMessage;
    });

    @observable
    rememberMe = new FormCheckControl(false)
}


