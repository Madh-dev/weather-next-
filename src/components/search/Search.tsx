'use client';

import React, { useState, useEffect } from 'react'
import '../search/search.css'

const Search = () => {

    const [input, setInput] = useState('');

    const handleInput = (e: any) => {
        setInput(e.target.value)
    };
    const handleSubmit = async(e:any)=> {
        e.preventDefault();
        console.log(input)
    };
    useEffect(()=>{
       
    })



    return (
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='enter city name' onChange={handleInput} />
                <input type='submit' value={`Search`} />
            </form>
            <p>{input}</p>
        </div>

    )
}

export default Search