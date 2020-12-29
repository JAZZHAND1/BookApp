import React ,{Component, useState} from 'react';
import Searchbox from './SearchBox';
import Booklist from './Booklist';
import request from 'superagent';
import Pagination from './Pagination';

const Books = (props) => {
    const[books,setbooks] = useState([]);
    const[searchterm,setsearchterm] = useState('');
    const[totalitems,settotalitems] = useState();
    const[startindex,setstartindex] =useState(0);
    const[endindex,setendindex] =useState(10);
    const searchbooks= (e) =>{
        e.preventDefault();
        request.get("https://www.googleapis.com/books/v1/volumes").query({
            q:searchterm,
            startIndex:startindex,
            maxResults:endindex
        }).then((data)=>{
            console.log(data.body.totalItems);
            setbooks([...data.body.items]);
            settotalitems(data.body.totalItems);
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
         <Pagination totalPages={10}/>
    </div>
  );
};

export default Books;
