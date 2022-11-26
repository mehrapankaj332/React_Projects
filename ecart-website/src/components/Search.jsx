import React, { useState } from 'react'
import './Search.css'
const Search = () => {


const [keyword,setKeyword]=useState("");

const searchHandler=(e)=>{
e.preventDefault();
}

  return (
   <form onSubmit={searchHandler}>
    <div className='search-things'>
        <input type="text" 
        placeholder='Search anything'
        onChange={(e)=>setKeyword(e.target.value)}
        />
        <div className='search-div'>
            <button className="search-btn">
                <i className='fa fa-search'></i>
            </button>
        </div>
    </div>
   </form>
  )
}

export default Search;