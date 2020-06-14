import React from 'react'
import SignIn from './../../components/sign-in/sign-in.component';
import SignUp from './../../components/sign-up/sign-up.component';

// import './sign-in-and-sign-up.styles.scss';

import {SingInAndSignUp} from './sign-in-sign-up.styles';

const SingInAndSignUpPage = () => (
    <SingInAndSignUp>
        <SignIn />
        <SignUp />
    </SingInAndSignUp>
)

export default SingInAndSignUpPage;