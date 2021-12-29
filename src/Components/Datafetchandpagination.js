import React,{useState,useEffect} from 'react'
import Pagination from './Pagination';
function Datafetchandpagination() {
    const [fetchdata,setFetchdata]=useState([]);  
    const [page,setPage]=useState(0);
    const [loading,setLoading]=useState(false);
    const [currentpage,setCurrentpage]=useState(1);
    const [postperpage,setPostperpage]=useState(10);
    let mytendatafetch=async()=>{
       console.log("10 fat");
       setLoading(true);
       let res=await fetch(`http://hn.algolia.com/api/v1/search?tags=story&page=${page}`);
       let data=await res.json();
       let result=data.hits;
       let final=result.slice(0,10);
       console.log(final)
       const newdata=[...final,...fetchdata]
       setFetchdata(newdata)
       setPage(page+1);
       
       setTimeout(()=>{
           setLoading(false)
       },[3000])

    }

    let indexoflastpost=currentpage*postperpage;
    let indexoffirstpost=indexoflastpost-postperpage;
    let currentpost=fetchdata.slice(indexoffirstpost,indexoflastpost)

    let paginate=(pagenumber)=>{
      setCurrentpage(pagenumber)
    }
    return (
        <div>
             {!loading?<button onClick={mytendatafetch}>data fetch {fetchdata.length}</button>:"loading......"}
            {
                currentpost.map((datafetch)=>{
                    return(
                        <>
                        <h5>{datafetch.title}</h5>
                        <hr/>
                        </>
                    )
                })
            }
          <Pagination totalpost={fetchdata.length} Postperpage={postperpage} paginate={paginate}/> 
        </div>
    )
}

export default Datafetchandpagination
