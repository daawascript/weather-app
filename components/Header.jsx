import Search from './Search';

export default function Header({
  getGeoCodes,
  setGeoCodes,
  setCity,
  city,
  cities,
  setCities,
  response,
}) {
  return (
    <header className='flex justify-between items-center max-w-screen-xl pt-4 px-8 mx-auto'>
      <Search
        getGeoCodes={getGeoCodes}
        setGeoCodes={setGeoCodes}
        setCity={setCity}
        city={city}
        cities={cities}
        setCities={setCities}
        response={response}
      />
      <h3 className='sm:flex hidden self-start  relative font-normal text-xl uppercase tracking-widest group hover:cursor-pointer '>
        <span className='bg-blue-800 text-slate-50 py-2 pl-4 pr-2 rounded-l-md group group-hover:text-blue-800 group-hover:bg-slate-50  transition-all duration-500'>
          Your
        </span>{' '}
        <span className='text-blue-800 bg-slate-50 py-2 pr-4 pl-2 rounded-r-md group group-hover:text-slate-50 group-hover:bg-blue-800 transition-all duration-500'>
          Weather
        </span>
        <div className='absolute -top-2 -right-2  w-6 h-6 rounded-full bg-gradient-to-tr from-orange-700 group group-hover:-translate-x-52 group-hover:bg-gradient-to-tl transition-all duration-500' />
      </h3>
    </header>
  );
}
