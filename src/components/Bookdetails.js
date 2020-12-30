import React ,{Component} from 'react';
import Bookcard from './Bookcard';

const Bookdetails =(props)=>{
    return(
      <div className="list">
        <Bookcard
        key = {i}
        image={book.volumeInfo.imageLinks.thumbnail}
        title={book.volumeInfo.title}
        author={book.volumeInfo.authors}
        publishdate={book.volumeInfo.publishedDate}
        />
       </div>
        
    )
}


