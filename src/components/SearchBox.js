import React from 'react';
const SearchBox =(props) =>{
    return(
     <div className="search-area">
       <form onSubmit={props.searchbooks} action="">
        <input onChange={props.handlesearchterm} type="text" />
        <button type="submit" >Search </button>
       </form>
     </div>
    )
}
export default SearchBox;