import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Context } from "../contexts/AuthContext";

export default function AuthLayout() {
  const {user} = useContext(Context)

  return (
    <>
      {user ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
        </>
      )}
    </>
  );
}