
import Body from "../components/Body";
import Header from "../components/Header";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "../styles/destination.css";


function Main() {

  const darkValue = useSelector((state) => state.dark.value);
  return (
    <main className={darkValue &&"dark"}>
      <Header />
      <Body />
    
    </main>
  );
}

export default Main;
