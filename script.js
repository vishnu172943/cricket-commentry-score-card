
let score=0;
let wicket=0;
let ballWiseResult=[];
let hit=0;
let inputRef=React.createRef();
let addNum=(num)=>{
     hit=num;
     rootelement.render(<App/>);
    }
 
 let addWicket=()=>{
    hit="w";
    rootelement.render(<App/>);
   }
                  
const Result=()=>
      (
    <div>
    {ballWiseResult.map((result,index)=>(
        <>
        {index%6==0?<br/>:null}
        <span key={index}>{result==0?<strong>.</strong>:result}&nbsp;&nbsp;</span>
        </>
    ))}
    </div>
     )
    function handleSubmit(event){
        event.preventDefault();
        ballWiseResult.unshift(<span>{`${hit},${inputRef.current.value}`}</span>);
        if(hit==="w"){
            wicket++;
        }else{
        score=hit+score;
        }
        hit=0;
        inputRef.current.value="";
         rootelement.render(<App/>);
    }
const Form=()=>(
    <>
    <form>
        <input value={hit} default={null}/>
        <input ref={inputRef} placeholder="Add a comment"/>
        <button onClick={handleSubmit}>Submit</button>
    </form>
    </>
)
 
 const ScoreButtons=()=>{
 return ( 
    <div>
        <button onClick={()=>addNum(0)}>0</button>
        <button onClick={()=>addNum(1)}>1</button>
        <button onClick={()=>addNum(2)} >2</button>
        <button onClick={()=>addNum(3)}>3</button>
        <button onClick={()=>addNum(4)}>4</button>
        <button onClick={()=>addNum(5)}>5</button>
        <button onClick={()=>addNum(6)}>6</button>
        <button onClick={addWicket}>wicket</button>
    </div>
 )
 }
  
 const App=()=>{
    return (
        <>
        <h1>SCORE KEEPER</h1>
        <h1>SCORE:{score}/{wicket}</h1>
        <ScoreButtons/>

         <br/>
        <Form/>
        <hr/>
        <div>
            {ballWiseResult.map((res,index)=>
            (<>
              <p key={index}>{res}</p> 
               </>
            )
                
            )}
        </div>
        </>
    )
 }
 let rootelement=ReactDOM.createRoot(document.getElementById("root"));
 rootelement.render(<App/>);