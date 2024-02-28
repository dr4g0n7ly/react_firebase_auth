import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { app } from '../../firebase'
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup} from 'firebase/auth'

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

interface FormState {
  name:  string;
  email: string;
  password: string;
}

const SignupForm: React.FC = () => {

  const [form, setForm] = useState<FormState>({
    name: "",
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

  const signupUserEmail = async () => {
    await createUserWithEmailAndPassword(
      auth,
      form.email,
      form.password
    ).then((value) => {
      alert('sign up success')
      console.log(value) 
    }).catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        console.error("Email is already in use.")
      } else {
        console.error("Error signing up:", error)
      }
    });
  }

  const signinUserGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
    .then((value) => {
      alert('sign up success')
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
    <section>
      <div className="text-center font-semibold text-lg py-3">
        Create an Account
      </div>
      <div>
        <div className="py-3">
          <p className="text-sm px-4">Name</p>
          <input 
            className="border-2 border-solid border-black h-9 rounded-sm px-4" 
            type="text" name="name" 
            value={form.name}
            onChange={onUpdateField}
          />
        </div>
        <div className="py-3">
          <p className="text-sm px-4">Email ID</p>
          <input 
            className="border-2 border-solid border-black h-9 rounded-sm px-4" 
            type="text" name="email" 
            value={form.email}
            onChange={onUpdateField}
          />
        </div>
        <div className="py-3">
          <p className="text-sm px-4">Password</p>
          <input 
            className="border-2 border-solid border-black h-9 rounded-sm px-4" 
            type="password" name="password" 
            value={form.password}
            onChange={onUpdateField}
          />        
        </div>
        <button 
          className="bg-black text-center text-white font-medium w-full h-12 rounded-sm" 
          onClick={signupUserEmail}
        >
          Sign up
        </button>
      </div>
      <button
        aria-label="Sign in with Google"
        className="flex items-center bg-white border-black border-2 rounded-full p-0.5 pr-4 my-6 w-full justify-center"
        onClick={signinUserGoogle}
      >
        <div className="flex items-center justify-center bg-white w-9 h-9 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
            <title>Sign in with Google</title>
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
      <p className="text-sm text-center py-3">
        Already have an account? 
        <Link to="/sign-in" className="font-semibold"> Sign In</Link>
      </p>
    </section>
  );
};

export default SignupForm;
