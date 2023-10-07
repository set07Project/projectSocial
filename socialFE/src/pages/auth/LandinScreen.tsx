import { BsReverseListColumnsReverse } from "react-icons/bs"
import Device from "../../LandingComponents/Device"
import LandingHero from "../../LandingComponents/LandingHero"
import Unique from "../../LandingComponents/Unique"
// import LandingHeader from "../../LandingComponents/LandingHero"
import FirstHeader from "../../components/static/FirstHeader"
// FullStack2004
const LandinScreen = () => {
  return (
    <div>
       <FirstHeader/>
       <LandingHero/>
     <Unique/>
     <Device/>
     <BsReverseListColumnsReverse/>
    </div>
  )
}

export default LandinScreen