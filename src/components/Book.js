import React ,{Component, useState} from 'react';
import Searchbox from './SearchBox';
import Booklist from './Booklist';
import request from 'superagent';

const Books = (props) => {
    const[books,setbooks] = useState([]);
    const[searchterm,setsearchterm] = useState('');
    
    const searchbooks= (e) =>{
        e.preventDefault();
        request.get("https://www.googleapis.com/books/v1/volumes").query({
            q:searchterm
        }).then((data)=>{
            console.log(data);
            setbooks([...data.body.items]);
        })
    }

   const handlesearchterm = (event) =>{
     console.log(event.target.value);     
    setsearchterm(event.target.value);
    console.log(searchterm);     
    }
    
 
    
    return (
    <div >
        <Searchbox handlesearchterm={handlesearchterm}
        searchbooks={searchbooks}/> 
        <Booklist books={books} />
    </div>
  );
};

export default Books;
