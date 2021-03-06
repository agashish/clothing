import React from 'react';
import {connect} from 'react-redux';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from './../../firebase/firebase.utils';
import {signUpStart} from './../../redux/user/user.action';
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {signUpStart} = this.props;
        const {
            displayName,
            email,
            password,
            confirmPassword,
        } =  this.state;

        if( password !==  confirmPassword ) {
            alert('Password do not match'); return;
        }

        // #### DISPATCH THE FIRST ACTION
        signUpStart({email, password, displayName});
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const {
            displayName,
            email,
            password,
            confirmPassword,
        } = this.state;

        return (
            <div className="sign-up">
                <h1 className="title">I do not have a account</h1>
                <span>Sing up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName"
                        type="text"
                        value={displayName}
                        onChange={this.handleChange}
                        // required
                        label="Display Name"
                    />

                    <FormInput
                        name="email"
                        type="email"
                        value={email}
                        onChange={this.handleChange}
                        // required
                        label="Email"
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                        // required
                        label="Password"
                    />

                    <FormInput
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        // required
                        label="Confirm Password"
                    /> 

                    <CustomButton type="submit">SIGN UP</CustomButton>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (signUpDetails) => dispatch(signUpStart(signUpDetails))
})

export default connect(null, mapDispatchToProps)(SignUp);