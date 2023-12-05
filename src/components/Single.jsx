import { useLoaderData,  useNavigate} from "react-router-dom";
import { WiDirectionLeft } from "react-icons/wi";

function Single (){
  const history =useNavigate()
 const data = useLoaderData();
 let arr = data.flat();
 let borders;
 let native =Object.entries(arr[0].name.nativeName).map(([key, value]) => {
    return { key, value };
  });
  let nativeUsed = native[native.length-1].value.common
  const currency = Object.entries(arr[0].currencies).map(([key, value]) => {
    return { key, value };
  });

  
  if (arr[0].hasOwnProperty('borders')) {
    borders =true
    } else {
    borders=false
    }
 function goBack() {
  history(-1)
 } 

let languages =Object.entries(arr[0].languages).map(([key, value]) => {
    return { key, value };
  }); 

return(
    <article className="single-container"> 
<div className="back">
    <button className="back-btn" onClick={goBack}><WiDirectionLeft />Back</button>
</div>
<div>
<article className="single-container-inner">
    <article className="flag-section">

<img src={arr[0].flags.png}/>
    </article>
  <article className="text-section">
<div className="center-the-text-for-single-page">
<div className="inner-section-single-info">
<article className="section-one-country-details">
<h3>{arr[0].name.common}</h3>

<article className="section-one-and-two">
<div className="first-section-of-country-details">
<p className="single-name">Native Name: <span>

{nativeUsed} 
</span></p>
<p className="single-population"> Population:<span>{arr[0].population}</span></p>
<p className="single-region">Region: <span>{arr[0].region}</span></p>
<p className="single-sub-region">Sub Region:<span>{arr[0].subregion}</span></p>
<p className="single-capital">Capital: <span>{arr[0].capital[0]}</span></p>
</div>
<article className="top-dl">
    <p>Top Level Domain: <span>{arr[0].tld}</span></p>
    <p>Currencies:<span>{currency[0].value.name}</span></p>
    <p className="languages">Languages: &nbsp; <span>
        {languages.slice(0,3).map((item,index)=>{
            if (index !== languages.length-1) {
 return <span>{item.value},&nbsp;</span>
}else{
   return <span>{item.value}</span>
}
        })}
    </span></p>
</article>
</article>
</article>

</div>
<div className="border-countries">
  {
    borders?<span className="border-title">Border Countries:&nbsp; {
  arr[0].borders.slice(0,4).map((item)=>{
   return <span> 
    {item}
    </span>
  })
}</span>:""
  }
</div>


</div>
  </article>
  </article>
</div>
    </article>
)
}

export const singleLoader = async ({params}) =>{
    const {id} =params;
  const res = await fetch(`https://restcountries.com/v3.1/name/${id}?fullText=true`)
    return res.json();
}



export default Single