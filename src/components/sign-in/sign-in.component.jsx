import React from 'react';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import {signInWithGoogle} from './../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }        
    }

    handleSubmit = event => {
        // #### STOP THE DEFAULT LOADING - SUBMIT BEHAVIOUR
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                {/* Native form element */}
                {/* <form onSubmit={() => this.handleSubmit()}> */}

                <form onSubmit={this.handleSubmit}>
                    {/* <input 
                    name="email" 
                    value={this.state.email} 
                    onChange={(newText) => this.handleChange(newText)}
                    required />
                    <label>Email</label> */}

                    <FormInput 
                        name="email" 
                        value={this.state.email} 
                        handleChange={(newText) => this.handleChange(newText)}
                        required
                        label="Email"
                    />

                    <FormInput
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required
                        label="Password"
                    />

                    {/* <input 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    onChange={this.handleChange}
                    required />
                    <label>Password</label> */}

                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;