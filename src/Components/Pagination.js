import React from 'react'

function Pagination({totalpost,Postperpage,paginate}) {


    let pagenumbers=[];

    for(let i=1; i<=Math.ceil(totalpost/Postperpage);i++){
        pagenumbers.push(i)
    }
    return (
        <ul>
            {
                pagenumbers.map((number)=>{
                    return(
                        <li style={{display:"inline"}}>
                           <a onClick={()=>paginate(number)}  style={{border:"1px solid red",padding:"5px 10px",cursor:"pointer"}}>{number}</a>
                        </li>
                    )
                })
            }
           
        </ul>
    )
}

export default Pagination
