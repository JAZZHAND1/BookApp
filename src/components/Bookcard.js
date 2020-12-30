import React from 'react';

const Bookcard =(props)=>{
    return(
        <div className="card-container">
            <img src={props.image} alt="" />
            <div className="desc">
              <h2>{props.title} </h2>
              <h3>{props.author} </h3>
              <p>{props.publishdate}</p>
            </div>
            <p><a onClick={(e)=>
                 props.bookfunc(props)
               }>
                View Details
                </a>
                </p>
        </div>
    )
}

export default Bookcard;