import React from 'react';
import {connect} from 'react-redux';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import {signInWithGoogle, auth} from './../../firebase/firebase.utils';
import {googleSignInStart, emailSignInStart} from './../../redux/user/user.action';
// import './sign-in.styles.scss';

import {SignUp} from './sign-in.styles';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }        
    }

    handleSubmit = async event => {
        // #### STOP THE DEFAULT LOADING - SUBMIT BEHAVIOUR
        event.preventDefault();

        const {
            email,
            password
        } = this.state;

        const {emailSignInStart} = this.props;

        emailSignInStart(email, password);
        // try {
        //     const response = await auth.signInWithEmailAndPassword(email, password)
        //     console.log(response);
        //     // this.setState({email: '', password: ''})

        // } catch(errorTransform) {
        //     console.log(errorTransform) 
        // }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        const {googleSignInStart} =  this.props;
        return (
            <SignUp>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                {/* Native form element */}
                {/* <form onSubmit={() => this.handleSubmit()}> */}

                <form onSubmit={this.handleSubmit}>

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

                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton> 
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </SignUp>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})
 
export default connect(null, mapDispatchToProps)(SignIn);