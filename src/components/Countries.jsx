import "../styles/destination.css";
import { useNavigate } from "react-router-dom";

function Countries(props) {
const navigate = useNavigate()

  
    return <div className="country-cont hover:cursor-pointer" onClick={()=>{
      navigate(`/countries/${props.name}`)
    }}> 
  <div className="flag">
<img src={props.flag} style={{ height:"120px"}}/>
  </div>
<h2>  {props.name}</h2>
<p>Population: <span>{props.population}</span></p>
<p>Region: <span>{props.region}</span></p>
<p>Capital: <span>{props.capital}</span></p>
    </div>
}

export default Countries;
