import React from 'react'

const Search = ({setsearchTerm}) => {
  return (
   <div className="search_bar">
    <input type="text" placeholder='search products' onChange={(e) => setsearchTerm(e.target.value)} />
    <button></button>
   </div>
  )
}

export default Search