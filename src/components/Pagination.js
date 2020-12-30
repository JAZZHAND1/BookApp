import {React,useState} from "react";

const Pagination = (props) => {
  const page_links = [];
  const [currentpage,setcurrentpage] =useState(1);
  console.log(props);
  for (let i = 1; i <= props.totalPages; i++) {
    let isActive;
    if (props.currentPage == i) {
      isActive = "active";
    } else {
      isActive = "";
    }




    let classes = "wave-effect " + isActive;
    page_links.push(
      <button
        className={classes}
        key={i}
        onClick={(event) => {
         // props.startindex(39);
          if(i!=1){
            props.pageresult((i-1)*40);
            setcurrentpage(i);
          }
          else{
            props.pageresult(0);
          }
         
        }}
      >
        {i}
      </button>

    );
  }

  return (
        <nav>
          <ul className="pagination" >
           {props.init ? <button onClick={function(){
             props.pageresult((currentpage-2)*40)
             setcurrentpage(currentpage-1)
           }}>Prev</button>:''} 
           <li className="page-item">{page_links} </li>
           {props.init ? <button onClick={function(){
             props.pageresult((currentpage)*40)
             setcurrentpage(currentpage+1)
           }}>Next</button>:''} 
          </ul>
        </nav>
  );
};

export default Pagination;
