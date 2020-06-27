import React, {useState} from 'react';
import {connect} from 'react-redux';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import {googleSignInStart, emailSignInStart} from './../../redux/user/user.action';
// import './sign-in.styles.scss';

import {SignUp} from './sign-in.styles';

const SignIn = (props) => {

    const [userCredentials, setCredentials] = useState({email: '', password: ''});

    const handleSubmit = async event => {

        // #### STOP THE DEFAULT LOADING - SUBMIT BEHAVIOUR
        event.preventDefault();

        const {
            email,
            password
        } = userCredentials;

        const {emailSignInStart} = props;
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]: value});
    }

    const {googleSignInStart} = props;
    const {email, password} = userCredentials;;
    return (        
        <SignUp>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput 
                    name="email" 
                    value={email} 
                    handleChange={(newText) => handleChange(newText)}
                    required
                    label="Email"
                />

                <FormInput
                    name="password" 
                    type="password" 
                    value={password} 
                    handleChange={handleChange}
                    required
                    label="Password"
                />

                <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton> 
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
            </form>
        </SignUp>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})
 
export default connect(null, mapDispatchToProps)(SignIn);