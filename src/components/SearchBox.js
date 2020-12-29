import React from 'react';
const SearchBox =(props) =>{
    return(
     <div className="search-area">
       <form onSubmit={props.searchbooks} action="">
        <input onChange={props.handlesearchterm} type="text" />
        <button type="submit" >Search </button>
        <select defaultValue="Sortby">
          <option disabled value="Sortby">Sortby</option>
          <option value="Newest"> Newest </option>
          <option value="Oldest">Oldest </option>
        </select>
       </form>
     </div>
    )
}
export default SearchBox;