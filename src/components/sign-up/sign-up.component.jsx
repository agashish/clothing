import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from './../../firebase/firebase.utils';
import {signUpStart} from './../../redux/user/user.action';
import './sign-up.styles.scss';

const SignUp = (props) => {

    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const {
        displayName,
        email,
        password,
        confirmPassword,
    } = userCredentials;
    
    useEffect(() => {
        const checkCallBack = async () => {
            await console.log(('Inside Async await'))
        }

        checkCallBack();
    }, [password]);

    const handleSubmit = async event => {
        event.preventDefault();
        const {signUpStart} = props;
        const {
            displayName,
            email,
            password,
            confirmPassword,
        } =  userCredentials;

        if( password !==  confirmPassword ) {
            alert('Password do not match'); return;
        }

        // #### DISPATCH THE FIRST ACTION
        signUpStart({email, password, displayName});
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setCredentials({
            ...userCredentials,
            [name]: value
        })
    }

    return (
        <div className="sign-up">
            <h1 className="title">I do not have a account</h1>
            <span>Sing up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    name="displayName"
                    type="text"
                    value={displayName}
                    onChange={handleChange}
                    // required
                    label="Display Name"
                />

                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    // required
                    label="Email"
                />

                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChange}
                    // required
                    label="Password"
                />

                <FormInput
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={handleChange}
                    // required
                    label="Confirm Password"
                /> 

                <CustomButton type="submit">SIGN UP</CustomButton>

            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (signUpDetails) => dispatch(signUpStart(signUpDetails))
})

export default connect(null, mapDispatchToProps)(SignUp);