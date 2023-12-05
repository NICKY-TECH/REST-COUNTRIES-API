
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "../styles/destination.css";
import { useSelector } from "react-redux/es/hooks/useSelector";



function Main() {

  const darkValue = useSelector((state) => state.dark.value);
  console.log("main")
  console.log(darkValue)
  return (
    <main  className={darkValue ?"dark h-full":"h-full" } >
      <Header />
      <Outlet/>    
    </main>
  );
}

export default Main;
