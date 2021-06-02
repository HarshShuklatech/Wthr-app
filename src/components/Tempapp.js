import React, { useEffect, useState } from 'react';
import "./css/style.css";


const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");


    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=09ff72f21a832678c5ec3ff480b808f3`;
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            setCity(resJson.main);

        };



        fetchApi();

    }, [search])

    return (
        <>
            <h1 className="Name">Weather App</h1>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        onChange={(event) => { setSearch(event.target.value) }} />
                </div>
                {!city ? (
                    <p>No data Found</p>
                ) : (
                    <div>
                        <div className="info">


                            <h2 className="location">
                                <i className="fas fa-street-view"> </i>{search}

                            </h2>
                            <h1 className="temp">
                                {city.temp}°Cel
                        </h1>
                            <h3 className="tempmin_max">Min : {city.temp}°Cel | Max : {city.temp_max}°Cel
                     </h3>
                        </div>
              

                    </div>
                )}
                 <div className="wave-one"></div>
<div className="wave-two"></div>
<div className="wave-three"></div>

            </div>


        </>

    )
}

export default Tempapp;