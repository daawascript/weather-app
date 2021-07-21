import React from 'react';

function Search({ getGeoCodes, city, setCity }) {
  const handleSubmit = e => {
    e.preventDefault();
    getGeoCodes(city);
    setCity('');
  };
  return (
    <form
      className='container m-4 flex justify-center items-center'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        name='city'
        value={city}
        onChange={({ target }) => setCity(target.value)}
      />
      <button>Search</button>
    </form>
  );
}

export default Search;
