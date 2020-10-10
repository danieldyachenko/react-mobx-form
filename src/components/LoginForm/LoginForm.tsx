import { observer } from 'mobx-react';
import React from 'react';
import { useStore } from '../../store/store';

const Form = observer(() => {
    const { loginForm } = useStore();

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(loginForm.formData)
    };

    return (
        <form onSubmit={onSubmit}>
            <p>
                <label htmlFor='login'>Логин</label>
                <input
                    value={loginForm.login.value}
                    onChange={loginForm.login.onChange}
                    onBlur={loginForm.login.onBlur}
                    type='text'
                    id='login'
                    placeholder='Введите логин'
                    style={{ display: 'block' }}
                />

                {loginForm.login.error ||
                    (loginForm.login.touched && (
                        <span style={{ display: 'block' }}>
                            {loginForm.login.error}
                        </span>
                    ))}
            </p>
            <p>
                <label htmlFor='password'>Пароль</label>
                <input
                    value={loginForm.password.value}
                    onChange={loginForm.password.onChange}
                    onBlur={loginForm.password.onBlur}
                    type='password'
                    id='password'
                    placeholder='Введите пароль'
                    style={{ display: 'block' }}
                />

                {loginForm.password.error ||
                    (loginForm.password.touched && (
                        <span>{loginForm.password.error}</span>
                    ))}
            </p>
            <p>
                <label htmlFor='rememberMe'>Запомнить пароль</label>
                <input
                    checked={loginForm.rememberMe.checked}
                    onChange={loginForm.rememberMe.onChange}
                    type='checkbox'
                    id='rememberMe'
                />
            </p>
            <button disabled={loginForm.disabled}>Отправить</button>
        </form>
    );
});

export default Form;
