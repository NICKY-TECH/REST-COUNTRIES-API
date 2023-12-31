import { useDispatch, useSelector } from "react-redux";
import "../styles/destination.css";
import { FaRegMoon } from "react-icons/fa";
import { darkMode } from "../features/darkmode";
import { FaMoon } from "react-icons/fa";
import { useEffect } from "react";
function Header() {
  localStorage.clear()
  const darkValue = useSelector((state) => state.dark.value);
  const disptach = useDispatch()
  // if(localStorage.getItem('theme')===null){
  //       localStorage.setItem("theme",`${darkValue}`);
  // }

  useEffect(()=>{
    localStorage.setItem("theme",`${darkValue}`);
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('html').classList.remove('bg-light-mode-bg-very-light-gray');
      document.querySelector('html').classList.add('dark', 'bg-dark-mode-bg-very-dark-blue');
  } else {
      document.querySelector('html').classList.remove('dark', 'bg-dark-mode-bg-very-dark-blue');
      document.querySelector('html').classList.add('bg-light-mode-bg-very-light-gray');
  }

  })


 
  return (
    <header>
      <h1>Where in the world?</h1>
      {console.log('theme')}
      {console.log(darkValue)}
      <div className="dark-mode hover:cursor-pointer "  onClick={()=>{
disptach(darkMode(darkValue==="light"?"dark":"light"));
}}>
{ darkValue ==="light"?
<FaRegMoon/>:
<FaMoon />

}

        <p> Dark Mode</p>
      </div>
    </header>
  );
}

export default Header
