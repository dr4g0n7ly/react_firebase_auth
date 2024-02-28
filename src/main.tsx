import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from './contexts/AuthContext'
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <AuthContext>
            <App />
        </AuthContext>
    </BrowserRouter>
)