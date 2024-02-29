import '../styles/navbar.css'
import { Link } from 'react-router-dom'
import { signOut, getAuth } from "firebase/auth"
import { app } from "../firebase"

const auth = getAuth(app)

const Navbar = () => {
  const handleSignOut = async () => {
      try {
        alert('signout clicked')
        await signOut(auth)
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <section className='navbar'>
        <div className='left-navbar'>
            <Link to="/" className='nav-link' id='home-link'> Home </Link>
            <Link to="/chatbot" className='nav-link'> Chatbot </Link>
            <Link to="/" className='nav-link'> Resources </Link>
        </div>

        <div className='center-navbar'>
            <Link to="/" className='logo'>
                <img 
                    src='/assets/logo.svg'
                    alt='logo'
                    width={42}
                    height={42}
                 />
            </Link>
        </div>

        <div className='right-navbar'>
            <Link to="/" className='nav-link'> About Us </Link>
            <button onClick={handleSignOut} className="nav-link sign-button">Sign out</button>

        </div>
    </section>
  )
}

export default Navbar