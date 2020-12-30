import React from "react";

const Pagination = (props) => {
  const page_links = [];
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
    <div className="container">
      <div className="row">{page_links}</div>
    </div>
  );
};

export default Pagination;
