import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { About } from "../components/About/About";
import { Contact } from "../pages/Contact/Contact";

import { Home } from "../pages/Home/Home";
import { Equipos } from "../pages/Equipos/Equipos";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
            {
                index : true,
                element : <Home />
            },
            {
                path : "about/",
                element : <About />
            },
            {
                path : "contact/",
                element : <Contact />
            },
            {
                path : "equipos/",
                element : <Equipos />
            }
            
        ]
    }
])
