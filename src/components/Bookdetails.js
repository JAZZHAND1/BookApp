import React ,{Component} from 'react';
import Bookcard from './Bookcard';
import Individualbookcard from './individualbookcard';
const Bookdetails =(props)=>{
    console.log(props);
    return(
       <Individualbookcard
            image={props.book.image}
            title={props.book.title}
            author={props.book.author}
            publishdate={props.book.publishdate}
            publisher ={props.book.publisher}
            description={props.book.description}  
            bookfunc ={props.book.bookfunc}
            setfalse={props.book.setfalse}
        />
    )
}

export default Bookdetails;


