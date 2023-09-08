import {createBrowserRouter} from "react-router-dom"
import FirstLayout from "../components/common/FirstLayout"
import LandingScreen from "../pages/auth/LandingScreen"
import Error from "../error/Error"


export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <FirstLayout/>,
        children: [
            {
                index: true,
                element: <LandingScreen/>
            }
        ]
    },
    {
        path: "*",
        element: <Error/>
    }
])