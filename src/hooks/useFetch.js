import { useEffect, useState } from "react";

const useFetch = (url) => {
const [data,setData] = useState([])
const [pending, isPending]=useState(false)
  useEffect(() => {
    fetch(url).then((dat) => {
      console.log('within custom hook')
  return dat.json()
    }).then((result)=>{
        setData((value)=>[...value,result])
        isPending(true)   
     

    }).catch((err)=>{
    console.log(err.TypeError)
    console.log(err)
    console.dir(err)
 
    })
  }, [url]);
 return {data} 
};

export default useFetch;
