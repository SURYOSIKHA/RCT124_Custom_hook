import React from 'react';
import useForm from './useForm'; 

function LoginForm() {
    const initialFormState = {
        username: '',
        password: '',
    };

    const { values, handleChange, resetForm } = useForm(initialFormState);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submitted:', values);
        resetForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
