import React from 'react'
import AllData from '../hooks/Alldata'
function Countryandweather() {
    const { data, mywhether, wheathercheck, handleinput, setCountry, country } = AllData();
    return (
        <div>
            {Object.keys(data).length === 0 ? "please enter country name" :
                <>
                    <img src={data.flags.png} alt="country" />
                    <h3>population:{data.population}</h3>
                    <h3>capital:{data.capital[0]}</h3>
                    <h3>latlang:{data.latlng[0]},{data.latlng[1]}</h3>
                    <button onClick={() => wheathercheck(`${data.capital[0]}`)}>weather</button>

                </>
            }
            <br />
            {Object.keys(mywhether).length === 0 ? "please hit the weather button" :
                <>
                    <h3>temparature:{mywhether.current.temperature}</h3>
                    <h3>wind speed:{mywhether.current.wind_speed}</h3>
                    <h3>precip:{mywhether.current.precip}</h3>
                    <img src={mywhether.current.weather_icons[0]} alt="wheathericon" />
                </>
            }
            <form onSubmit={handleinput}>
                <input type="text" value={country} placeholder="country name" name="con" onChange={(e) => { setCountry(e.target.value) }} />
                <input type="submit" />
            </form>


            <br /><br /> 
        </div>
    )
}

export default Countryandweather
