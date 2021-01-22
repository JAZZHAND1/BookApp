import React from 'react';
const SearchBox =(props) =>{
    return(
      <div>
       <form onSubmit={props.searchbooks} action="">
         <div className="input-group" style={{width:'400px',margin:'auto',paddingTop:'10px'}}>
         <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={props.handlesearchterm}/>
         <button className="btn btn-outline-primary" type="submit" >Search</button>
         <select defaultValue="Sort" onClick={props.sort}>
          <option disabled value="Sort">Sort</option>
          <option value="Newest"> Newest </option>
          <option value="Oldest">Oldest </option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
         </div>
       
       </form>
     </div>
    )
}


export default SearchBox;