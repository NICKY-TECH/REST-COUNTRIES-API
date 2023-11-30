import "../styles/destination.css";

function Countries(props) {
    return <div className="country-cont"> 
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
