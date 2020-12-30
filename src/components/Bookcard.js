import React from 'react';

const Bookcard =(props)=>{
    return(
        <div className="card-container">
            <img src={props.image} alt="" />
            <div className="desc">
              <h2>Title:{props.title} </h2>
              <h3>Authors:{props.author} </h3>
              <p>Publishdate:{props.publishdate}</p>
            </div>
            <button style={{position:"absolute"
                            }} onClick={(e)=>
                 props.bookfunc(props)
               }>
                View Details
            </button>
                
        </div>
    )
}

export default Bookcard;