import React from 'react';
import useForm from './useForm'; // Import custom hook

function SignupForm() {
    // Initial form values
    const initialFormState = {
        email: '',
        username: '',
        password: '',
    };

    // Use the custom useForm hook
    const { values, handleChange, resetForm } = useForm(initialFormState);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Signup Form Submitted:', values);
        resetForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
            </div>
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
            <button type="submit">Signup</button>
        </form>
    );
}

export default SignupForm;
