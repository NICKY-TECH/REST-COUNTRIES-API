import { useDispatch, useSelector } from "react-redux";
import "../styles/destination.css";
import { FaRegMoon } from "react-icons/fa";
import { darkMode } from "../features/darkmode";
import { FaMoon } from "react-icons/fa";
function Header() {
  const darkValue = useSelector((state) => state.dark.value);
  const disptach = useDispatch()
  function darkModeCharger(){
    localStorage.setItem("theme",`${darkValue}`);
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('html').classList.add('dark');
  } else {
      document.querySelector('html').classList.remove('dark');
  }
  console.log("js file")
  console.log(localStorage.getItem("theme"))
  }
  {console.log(darkValue)}
 
  return (
    <header>
      <h1>Where in the world?</h1>
      <div className="dark-mode hover:cursor-pointer "  onClick={()=>{
disptach(darkMode(darkValue==="light"?"dark":"light"));
darkModeCharger();
}}>
{ darkValue ==="dark"?
  <FaMoon />:
<FaRegMoon/>

}

        <p> Dark Mode</p>
      </div>
    </header>
  );
}

export default Header
