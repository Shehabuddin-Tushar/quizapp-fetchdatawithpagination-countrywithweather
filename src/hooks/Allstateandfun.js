import React,{useState,useEffect} from 'react'



const Allstateandfun = () => {
    
    const [country, setCountry] = useState("");
    const [data, setData] = useState({})
    const [mywhether, setMywhether] = useState({});


    let handleinput = async (e) => {
        e.preventDefault();
        if (country !== "") {
            try {
                let res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
                let result = await res.json();
                console.log(result[0])
                setData(result[0]);
                setCountry("")
                setMywhether({})
            } catch (e) {
                console.log(e.message)
            }
        } else {
            alert("your field is empty")
        }



    }

    let wheathercheck = async (capital) => {
        console.log(capital);
        try {
            let res = await fetch(`http://api.weatherstack.com/current?access_key=53760c21a9bb060801ce6ef41fe63279&query=${capital}`);
            let whether = await res.json();
            console.log(whether)
            setMywhether(whether)
        } catch (e) {
            console.log(e.message)
        }

    }



    return {
            handleinput, wheathercheck, country, setCountry, data, mywhether
          }
}

export default Allstateandfun;