import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "../styles/destination.css";



function Main() {
  return (
    <main  className="main" >
      <Header />
      <Outlet/>    
    </main>
  );
}

export default Main;
