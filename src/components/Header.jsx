import "../styles/destination.css";
import { FaRegMoon } from "react-icons/fa";

function Header() {
  return (
    <header>
      <h1>Where in the world?</h1>
      <div className="dark-mode">
      <FaRegMoon />
        <p> Dark Mode</p>
      </div>
    </header>
  );
}

export default Header
