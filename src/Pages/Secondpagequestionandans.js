import React,{useState} from 'react'

function Secondpagequestionandans({perticipatename}) {

    const [complete,setComplete]=useState(false);
    const [number,setNumber]=useState(0);
    const [score,setScore]=useState(0);

    const examfile=[
        {
            question:"what is your name",
            answer:[
                {name:"tushar",iscorrect:true},
                {name:"shehab",iscorrect:false},
                {name:"israfil",iscorrect:false},
                {name:"sadia",iscorrect:false},
            ]
        },

        {
            question:"what is your address",
            answer:[
                {name:"jatrabari",iscorrect:false},
                {name:"matuail",iscorrect:true},
                {name:"sonir akhra",iscorrect:false},
                {name:"rayerbag",iscorrect:false},
            ]
        },

    ];

    let answerquestion=(myanswer)=>{
        if(myanswer===true){
            setScore(score+1)
        }
       const nextquestion=number+1
       if(nextquestion<examfile.length){
        setNumber(nextquestion)
        
       }else{
           setComplete(true)
       }
       
    }

    let startfunction=()=>{
        setComplete(false);
        setNumber(0);
        setScore(0);
    }
    return (
        <div>
            <h3>hello {perticipatename}</h3>
            {
                complete?(<><h3>your score is {score} out of 2</h3><button onClick={startfunction}>start</button></>):
                (<>
                <h3>{examfile[number]?.question}</h3>
                <h5>
                    <ul>
                        {examfile[number]?.answer.map((ans,index)=>{
                          return(
                              <li key={index}><a onClick={(e)=>answerquestion(ans.iscorrect)}>{ans.name}</a></li>
                          )  
                        })}
                    </ul>
                </h5>
                </>)
            } 
        </div>
    )
}

export default Secondpagequestionandans
