import { useDispatch, useSelector } from "react-redux";
import "../styles/destination.css";
import { FaRegMoon } from "react-icons/fa";
import { darkMode } from "../features/darkmode";
import { FaMoon } from "react-icons/fa";

function Header() {
  const darkValue = useSelector((state) => state.dark.value);
  console.log("header")
  console.log(darkValue)
  const disptach = useDispatch()
  return (
    <header>
      <h1>Where in the world?</h1>
      <div className="dark-mode hover:cursor-pointer "  onClick={()=>{
disptach(darkMode())
}}>
{ darkValue?
  <FaMoon />:
<FaRegMoon/>

}

        <p> Dark Mode</p>
      </div>
    </header>
  );
}

export default Header
