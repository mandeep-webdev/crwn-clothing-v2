import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
const SignIn = () => {
  const logGoogleUser = async () => {
    const user = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      SignIn here....
      <button onClick={logGoogleUser}>signIn with Google popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
