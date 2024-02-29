import Spline from '@splinetool/react-spline';

import { getAuth, signOut } from 'firebase/auth';
import { app } from '../../firebase';

const auth = getAuth(app)

const Home = () => {

  const handleSignOut = async () => {
    try {
      alert('signout clicked')
      await signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='flex flex-col px-64 py-24 w-full'>
      <button onClick={handleSignOut} className="p-2 border-2 flex-1 border-black rounded">Sign out</button>
      <div className="Home">
        <h1 className='text-5xl font-bold mt-20 text-center'>Home</h1>
      </div>
    </div>
  )
}

export default Home