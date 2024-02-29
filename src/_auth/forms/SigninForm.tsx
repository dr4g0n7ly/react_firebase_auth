import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { app } from '../../firebase'
import {signInWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

interface FormState {
  email: string;
  password: string;
}

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const SigninForm = () => {
  const [form, setForm] = useState<FormState>({
    email: "",
    password: ""
  });

  const onUpdateField = (e: ChangeEvent<HTMLInputElement>) => {
    const nextFormState: FormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const signinUser = async () => {
    await signInWithEmailAndPassword(auth, form.email, form.password)
      .then((value) => { 
        alert('Sign in success')
        console.log(value)
      })
      .catch(error => {
        alert(error.message)
        console.log('ERROR: ', error)
      })
  }

  const signinUserGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
    .then((value) => {
      alert('sign in success')
      console.log(value) 
    }).catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        alert("Email is already in use.")
      } else {
        console.log("Error signing up:", error)
        alert("Error signing up:")
      }
    });
  }

  return (
    <section className="w-64">
      <div className="text-center text-lg font-semibold py-3">
        Sign in
      </div>
      <div>
        <div className="py-3 text-sm">
          <p className="px-4">Email ID</p>
          <input 
            className="border-2 border-solid border-black h-9 rounded-sm px-4 w-full" 
            type="text" name="email" 
            value={form.email}
            onChange={onUpdateField}
          />
        </div>
        <div className="py-3 text-sm">
          <p className="px-4">Password</p>
          <input 
            className="border-2 border-solid border-black h-9 rounded-sm px-4 w-full" 
            type="password" name="password" 
            value={form.password}
            onChange={onUpdateField}
          />        
        </div>
        <button 
          className="bg-black text-center text-white font-medium w-full h-12 rounded-sm" 
          onClick={signinUser}
        >
          Sign in
        </button>
      </div>
      <button
        aria-label="Sign in with Google"
        className="flex items-center bg-white border-black border-2 rounded-full p-0.5 pr-4 my-6 w-full justify-center"
        onClick={signinUserGoogle}
      >
        <div className="flex items-center justify-center bg-white w-9 h-9 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
            <title>Sign up with Google</title>
            <desc>Google G Logo</desc>
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              className="fill-google-logo-blue"
            ></path>
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              className="fill-google-logo-green"
            ></path>
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              className="fill-google-logo-yellow"
            ></path>
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              className="fill-google-logo-red"
            ></path>
          </svg>
        </div>
        <span className="text-sm text-google-text-gray tracking-wider">Sign in with Google</span>
      </button>
      <p className="text-sm text-center py-2">
        Don't have an account? 
        <Link to="/sign-up" className="font-semibold"> Sign Up</Link>
      </p>
    </section>
  );
};

export default SigninForm;
