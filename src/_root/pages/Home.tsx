import { signOut, getAuth } from "firebase/auth"
import { app } from "../../firebase"

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
    <div>
      <h1 className="text-dark text-3xl">Home</h1>
      <button onClick={handleSignOut} className="m-4 p-1 border-black border-2 rounded">Sign out</button>
    </div>
  )
}

export default Home