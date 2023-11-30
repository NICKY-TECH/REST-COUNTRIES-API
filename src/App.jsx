
import Main from './pages/Main';
import { useSelector } from "react-redux/es/hooks/useSelector";

function App() {
  const darkValue = useSelector((state) => state.dark.value);
  console.log("main")
  console.log(darkValue)

  return (

    <div className={darkValue && "dark"} >
     <Main/>
    </div>
  )
}

export default App
