import React from 'react';
const SearchBox =(props) =>{
    return(
     <div className="search-area">
       <form onSubmit={props.searchbooks} action="">
        <input onChange={props.handlesearchterm} type="text" />
        <button type="submit" >Search </button>
        <select defaultValue="Sortby" onClick={props.sort}>
          <option disabled value="Sortby">Sortby</option>
          <option value="Newest"> Newest </option>
          <option value="Oldest">Oldest </option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
       </form>
     </div>
    )
}
export default SearchBox;