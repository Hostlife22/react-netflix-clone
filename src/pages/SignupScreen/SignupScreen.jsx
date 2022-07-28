import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import './SignupScreen.css';

function SignupScreen() {
  const dispatch = useDispatch();

  const signIn = async (e) => {
    e.preventDefault();

    dispatch(
      login({
        uid: '123123',
        email: 'example@gmail.com',
      }),
    );
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignupScreen;
