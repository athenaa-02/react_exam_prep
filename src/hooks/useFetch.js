import { useState, useEffect } from "react";

//3.2

function useFetch(url) {
const [data, setData] = useState()

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const data = await response.json()

        setData(data)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, []);


  return data
}


export default useFetch;
