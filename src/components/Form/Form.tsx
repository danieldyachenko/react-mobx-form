import { observer } from 'mobx-react';
import React from 'react';
import { useStore } from '../../store/store';

const Form = observer(() => {
    const { form } = useStore();

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(form.formData)
    };

    return (
        <form onSubmit={onSubmit}>
            <p>
                <label htmlFor='login'>Логин</label>
                <input
                    value={form.login.value}
                    onChange={form.login.onChange}
                    onBlur={form.login.onBlur}
                    type='text'
                    id='login'
                    placeholder='Введите логин'
                    style={{ display: 'block' }}
                />

                {form.login.error ||
                    (form.login.touched && (
                        <span style={{ display: 'block' }}>
                            {form.login.error}
                        </span>
                    ))}
            </p>
            <p>
                <label htmlFor='password'>Пароль</label>
                <input
                    value={form.password.value}
                    onChange={form.password.onChange}
                    onBlur={form.password.onBlur}
                    type='password'
                    id='password'
                    placeholder='Введите пароль'
                    style={{ display: 'block' }}
                />

                {form.password.error ||
                    (form.password.touched && (
                        <span>{form.password.error}</span>
                    ))}
            </p>
            <button disabled={form.disabled}>Отправить</button>
        </form>
    );
});

export default Form;
