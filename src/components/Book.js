import React ,{Component, useState, useEffect} from 'react';
import Searchbox from './SearchBox';
import Booklist from './Booklist';
import request from 'superagent';
import Pagination from './Pagination';

const Books = (props) => {
    const[books,setbooks] = useState([]);
    const[searchterm,setsearchterm] = useState('');
    const[totalitems,settotalitems] = useState(0);
    const[startindex,setstartindex] =useState(0);
    const[endindex,setendindex] =useState(40);
    const[totalpages,settotalpages]=useState();
    {console.log(startindex)}
    const searchbooks= (e) =>{
        e.preventDefault();
        request.get("https://www.googleapis.com/books/v1/volumes").query({
            q:searchterm,
            startIndex:startindex,
            maxResults:endindex,
        }).then((data)=>{
            setbooks([...data.body.items]);
            settotalitems(data.body.totalItems);
            console.log(endindex);
            let result = Math.ceil(data.body.totalItems/endindex);
            settotalpages(result);
            
        })
    }

    const getpageresult = (startindex)=>{
        request.get("https://www.googleapis.com/books/v1/volumes").query({
            q:searchterm,
            startIndex:startindex,
            maxResults:endindex,
        }).then((data)=>{
            setbooks([...data.body.items]);
            settotalitems(data.body.totalItems);
            console.log(startindex);
            let result = Math.ceil(data.body.totalItems/endindex);
            settotalpages(result);
            
        })
    }

   const handlesearchterm = (event) =>{
     console.log(event.target.value);     
    setsearchterm(event.target.value);
    console.log(searchterm);     
    }
 //  useEffect(()=>{
 //       searchbooks();
  // },[]);
    {console.log(totalitems)}
    {console.log(totalpages)}
   
    const filtereddata =(data)=>{
       data.body.items.map((book) =>{
         if(book.volumeInfo.hasOwnProperty('publishedDate')==false){
            book.volumeInfo['publishedDate'] ='0000';
         }
         else if(book.volumeInfo.hasOwnProperty('imageLinks')===false){
            book.volumeInfo['imageLinks'] = {thumbnail:'https://picsum.photos/seed/picsum/200/300'}
         }
         
       })
       return data;
    }

    return (
    <div >
        <Searchbox handlesearchterm={handlesearchterm}
        searchbooks={searchbooks}/> 
        <Booklist books={books} />
         <Pagination totalPages={totalpages}
                     startindex={setstartindex}
                     pageresult={getpageresult}/>
    </div>
  );
};

export default Books;
