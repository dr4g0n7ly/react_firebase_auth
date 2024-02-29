import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"

const Chatbot = () => {
  return (
    <section className="h-screen">
        <Navbar />

        <div className="pt-20 flex space-x-2.5 bg-slate-300 max-h-screen min-h-screen p-2.5">
          <Sidebar/>
          {/* <div>
            <p>Side bar</p>
          </div> */}
          {/* {ClientProvider - Notification} */}
          <div className="flex flex-1 flex-col items-center justify-center min-h-full bg-slate-100 rounded">
            <h1 className="text-5xl font-bold">scalable chatbot</h1>
          </div>
        </div>
    </section>
  )
}

export default Chatbot