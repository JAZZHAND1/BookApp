import React from 'react';

const Individualbookcard  =(props)=>{
    console.log(props);
    return(
     
        <div className="indiv">
            <img src={props.image} alt="" />
            <div className="desc">
              <h2>Title:{props.title} </h2>
              <h3>Authors:{props.author} </h3>
              <p>Publishdate:{props.publishdate}</p>
              <p>Publisher:{props.publisher}</p>
              <p>Description:{props.description}</p>
              <button onClick={function () {
                  props.setfalse()
              }}>Go back</button>
            </div>
        </div>
    )


}

export default Individualbookcard;