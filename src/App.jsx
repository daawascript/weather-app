import { useEffect, useState } from 'react';
import Current from './components/Current';
import Daily from './components/Daily';
import Hourly from './components/Hourly';
import Header from './components/Header';

function App() {
  const [city, setCity] = useState('');
  const [geoCodes, setGeoCodes] = useState({});
  const [response, setResponse] = useState({});

  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log(API_KEY);

  const getGeoCodes = async (city) => {
    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${5}&appid=${API_KEY}`
    );
    console.log('geo res', res);
    const json = await res.json();
    console.log('geo json', json);

    setGeoCodes({
      name: json[0].name,
      country: json[0].country,
      lat: json[0].lat,
      lon: json[0].lon,
    });
  };
  const fetchData = async (lat, lon) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    console.log('fetch res', res);
    const json = await res.json();
    console.log('fetch json', json);
    setResponse(json);
  };

  useEffect(() => {
    getGeoCodes('Vancouver');
  }, []); //eslint-disable-line

  useEffect(() => {
    if (geoCodes.lat && geoCodes.lon) fetchData(geoCodes.lat, geoCodes.lon);
  }, [geoCodes]); //eslint-disable-line

  const getTime = (time) =>
    new Date(time * 1000).toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
    });
  const getDate = (time) =>
    new Date(time * 1000).toLocaleDateString(undefined, {
      day: '2-digit',
      month: 'long',
    });
  const capitalizeFirstLetter = (str) =>
    `${str[0].toUpperCase()}${str.slice(1)}`;

  const isToday = (currentDayInSeconds, dateInSeconds) =>
    new Date(currentDayInSeconds * 1000).toDateString() ===
    new Date(dateInSeconds * 1000).toDateString();

  return (
    <div className=' min-h-screen  bg-gradient-to-br from-aqua via-white to-orange'>
      <Header getGeoCodes={getGeoCodes} setCity={setCity} city={city} />
      <div className='max-w-screen-xl px-8 py-5 mx-auto my-0 '>
        <div className=' grid lg:grid-cols-4 gap-4 '>
          <Current
            geoCodes={geoCodes}
            response={response}
            getTime={getTime}
            capitalizeFirstLetter={capitalizeFirstLetter}
          />
          <Hourly
            response={response}
            getTime={getTime}
            getDate={getDate}
            capitalizeFirstLetter={capitalizeFirstLetter}
            isToday={isToday}
          />
        </div>
        <div className='my-4'>
          <Daily
            response={response}
            getDate={getDate}
            getTime={getTime}
            capitalizeFirstLetter={capitalizeFirstLetter}
            isToday={isToday}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
