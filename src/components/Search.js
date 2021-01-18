import React,{useState} from 'react'
import {Button,TextField } from '@material-ui/core'


const  Search=(props)=>{
    const [searchValue,setSearchValue]=useState("");
    const handleSearchInputChanges=(e)=>{
        setSearchValue(e.target.value);
    }

    const resetInputField=()=>{
        setSearchValue("");
    }

    const callSearchFunction=(e)=>{
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }




    return (
        <form className="search">
            <TextField  id="standard-basic" label="Your Searched Movie" value={searchValue} onChange={handleSearchInputChanges} type="text" placeholder="Type in movie Here"/>
   
            <Button variant="outlined" onClick={callSearchFunction} type="submit" size="small" > Find </Button>
        </form>
    );
};

export default Search;