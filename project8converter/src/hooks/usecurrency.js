import {useState , useEffect} from 'react'

function usecurrency (currency) {
    const [data , setdata] = useState({});

    useEffect( () => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then( (temp) => temp.json())
        .then( (temp) => { setdata(temp.currency)})
    } , [currency])

    return data;
}

export default usecurrency;