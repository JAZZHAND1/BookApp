import {React,useState} from "react";

const Pagination = (props) => {
  const page_links = [];
  const [currentpage,setcurrentpage] =useState(1);
  console.log(currentpage);
  for (let i = 1; i <= props.totalPages; i++) {
    let isActive;
    if (currentpage == i) {
      isActive = "active";
    } else {
      isActive = "";
    }
    let classname = "page-item "+isActive;
    page_links.push(
      <li key={i} className={classname}> 
      <a
        className="page-link"
        key={i}
        onClick={(event) => {
         // props.startindex(39);
          if(i!=1){
            props.pageresult((i-1)*40);
            setcurrentpage(i);
          }
          else{
            props.pageresult(0);
            setcurrentpage(1);
          }
         
        }}
      >
        {i}
      </a>
      </li>

    );
  }

  return (
       <nav aria-label="Page navigation example">
          <ul className='pagination'>
          <li className='page-item'>
           {props.init ? <a className="page-link" onClick={function(){
             props.pageresult((currentpage-2)*40)
             setcurrentpage(currentpage-1)
           }}>Prev</a>:''} 
        </li> 
        {page_links}
     
        <li className='page-item'>
           {props.init ? <a className="page-link" onClick={function(){
             props.pageresult((currentpage)*40)
             setcurrentpage(currentpage+1)
           }}>Next</a>:''}    
          
          </li>
          
          </ul>
          </nav>
          
        
  );
};

export default Pagination;
