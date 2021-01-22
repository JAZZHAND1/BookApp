import React, { useEffect } from 'react';


const Individualbookcard  =(props)=>{
    console.log(props);


      return(
        <div className="card-container-md-8" style={{maxWidth:'36rem'}}>
           <div classname="card">
            <img className="card-img-top" src={props.image} alt=""/>
            <div className="card-body">
              <h2 className="card-title"><u>Title</u>      :{props.title} </h2>
              <h2 className="card-title"><u>Authors</u>    :{props.author} </h2>
              <h2 className="card-title"><u>Publishdate</u>:{props.publishdate} </h2>
              <h2 className="card-title"><u>Publisher</u>  :{props.publisher}</h2>
              <p className="card-text" style={{fontSize:20}}><u><b>Description</b></u> :{props.description}</p>
              <button className="btn btn-primary" onClick={function () {
                  props.setfalse()
              }}>Go back</button>
            </div>
        </div>
        </div>
    )


}

export default Individualbookcard;