import React from 'react';

const Bookcard =(props)=>{
   
    return(
        <div className="flexbox" style={{flexDirection:'column'}}>
          <div className="row">
              <div className="col-md-8">
                <div className="card">
                    <img src={props.image} alt="" className="card-img-top" />
                      <div className="card-body">
                        <h3 className="card-title"><u> Title</u>:{props.title} </h3>
                        <h5 className="card-text"><u>  Authors</u>:{props.author} </h5>
                        <h5 className="card-text"><u>  Publishdate</u>:{props.publishdate} </h5>
                        <button className="btn btn-primary"  onClick={(e)=>
                          props.bookfunc(props)
                        }>
                       View Details
                        </button>
                      </div>
                    </div>
                    </div>
                    </div> 
        </div>
    )
}

export default Bookcard;