import React ,{Component, useState, useEffect} from 'react';
import Searchbox from './SearchBox';
import Booklist from './Booklist';
import request from 'superagent';
import Pagination from './Pagination';
import Bookdetails from './Bookdetails';
const Books = (props) => {
    const[books,setbooks] = useState([]);
    const[searchterm,setsearchterm] = useState('');
    const[totalitems,settotalitems] = useState(0);
    const[startindex,setstartindex] =useState(0);
    const[endindex,setendindex] =useState(40);
    const[totalpages,settotalpages]=useState();
    const[sortmethod,setsortmethod]=useState('');
    const[bookdetailclicked,setbookdetailclicked] = useState(false);
    const[currentbook,setcurrentbook] =useState();
    const[init,setinit] = useState(false);
    {console.log(startindex)}
    const searchbooks= (e) =>{
        e.preventDefault();
        request.get("https://www.googleapis.com/books/v1/volumes").query({
            q:searchterm,
            startIndex:startindex,
            maxResults:endindex,
        }).then((data)=>{
            data =filtereddata(data);
            setbooks([...data.body.items]);
            settotalitems(data.body.totalItems);
            console.log(endindex);
            let result = Math.ceil(data.body.totalItems/endindex);
            settotalpages(result);
            setinit(true);
            
        })
    }

    const getpageresult = (startindex)=>{
        request.get("https://www.googleapis.com/books/v1/volumes").query({
            q:searchterm,
            startIndex:startindex,
            maxResults:endindex,
        }).then((data)=>{
            data = filtereddata(data)
            setbooks([...data.body.items]);
            settotalitems(data.body.totalItems);
           // console.log(startindex);
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
            console.log("date");
         }
         else if(book.volumeInfo.hasOwnProperty('imageLinks')===false){
            book.volumeInfo['imageLinks'] = {thumbnail:'https://picsum.photos/seed/picsum/200/300'}
            console.log("image");
         }
         console.log("40 times");
       })
       return data;
    }

    const sort =(e)=>{
        console.log(e.target.value);
        setsortmethod(e.target.value);
    }
    
    const sortedbooks= books.sort((a,b)=>{
       if(sortmethod==='Newest'){
           return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4));

       }  
       else if(sortmethod==='Oldest'){
        return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4));
       }  
       else if(sortmethod==='A-Z'){
         var textA = a.volumeInfo.title.toUpperCase();
         var textB = b.volumeInfo.title.toUpperCase();
         return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
       }
       else{
        var textA = a.volumeInfo.title.toUpperCase();
        var textB = b.volumeInfo.title.toUpperCase();
        return (textA < textB) ? 1 : (textA > textB) ? -1 : 0;
       }
    })

    const handlecurrentbook =(data)=>{
        if(bookdetailclicked==false){
            setbookdetailclicked(true);
            console.log(data);
            setcurrentbook(data);
        }
        else if(bookdetailclicked==true){
            console.log("Here");
            setbookdetailclicked(false);
            console.log(data);
           // setcurrentbook(data);
        }
    }
    const setfalse =() =>{
        setbookdetailclicked(false);
    }


    {console.log(bookdetailclicked)}
    {console.log(currentbook)}
    {console.log(books[0])}
    
    return (
     <div>
        <Searchbox handlesearchterm={handlesearchterm}
        searchbooks={searchbooks} sort={sort}/> 
       {bookdetailclicked ? '':<Booklist books={sortedbooks} currentbook={handlecurrentbook} setfalse={setfalse}/> }
       {bookdetailclicked ? '':<Pagination totalPages={totalpages}
                               startindex={setstartindex}
                             pageresult={getpageresult}
                             init={init}/>}  
       
      {bookdetailclicked? <Bookdetails book={currentbook}></Bookdetails>:''}
        
    </div>
    
);
};

export default Books;
