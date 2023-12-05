import { useEffect, useState } from "react";

const useFetch = (url) => {
const [data,setData] = useState([])
  useEffect(() => {
    fetch(url).then((dat) => {
  return dat.json()
    }).then((result)=>{
      if ("message" in result && result.message==="Not Found") {
        setData((value)=>[...value.slice(0,value.length-1),["nothing"]])
     
      }else{
        setData((value)=>[...value.slice(0,value.length-1),result])
      }
  
     

    }).catch((err)=>{
    console.log(err.TypeError)
    console.log(err)
 
    })
  },[url]);
 return {data} 
};

export default useFetch;
