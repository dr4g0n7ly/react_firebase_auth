import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { Context } from "../contexts/AuthContext"

const RootLayout = () => {
  const {user} = useContext(Context)

  return (
    <>
    {!user ? (
      <Navigate to="/sign-in" />
    ) : (
      <>
        <section className="flex flex-1 justify-center items-center flex-col py-10">
          <Outlet />
        </section>
      </>
    )}
  </>
  )
}

export default RootLayout