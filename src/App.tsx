import './globals.css'
import './styles/app.css'
import { Routes, Route} from 'react-router-dom'
import { Chatbot, Home } from './_root/pages'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'

const App = () => {

  return (
    <main className='App'>

      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          <Route index path='/chatbot' element={<Chatbot />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App