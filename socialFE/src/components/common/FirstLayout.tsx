// import FirstHeader from "../static/FirstHeader"
import {Outlet} from "react-router-dom"
import Footer from "../static/Footer"

function FirstLayout() {
  return (
    <div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default FirstLayout