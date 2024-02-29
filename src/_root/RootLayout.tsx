import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { Context } from "../contexts/AuthContext"

const RootLayout = () => {
  
  const {user} = useContext(Context)
  console.log(user)

  return (
    <>
    {!user ? (
      <Navigate to="/sign-in" />
    ) : (
      <>
        <section className="w-full">
          <Outlet />
        </section>
      </>
    )}
  </>
  )
}

export default RootLayout