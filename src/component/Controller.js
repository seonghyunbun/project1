import React,{/*useEffect,*/ useContext,useRef} from "react";
import { TodoContext } from "../App";

        const Controller=() =>{
            console.log(`Controller 업데이트`)
            let {count,handleSetCount}=useContext(TodoContext);
            const btnCount= useRef(0);
            const textRef = useRef();
            const handleOnChange = (e) => {
                handleSetCount(Number(e.target.value));
            };
            const handleOnClick = () => {
                textRef.current.value="";
            };
            /*
            useEffect(() =>{
                console.log("버튼 클릭 횟수:",btnCount.current);;
            });
            */
            return (
                <div>
                    <div>
                    <button onClick={()=>{handleSetCount(count-1); btnCount.current++;}}>-1</button>
                    <button onClick={()=>{handleSetCount(count-10); btnCount.current++;}}>-10</button>
                    <button onClick={()=>{handleSetCount(count-100); btnCount.current++;}}>-100</button>
                    <button onClick={()=>{handleSetCount(count=0); btnCount.current++;}}>0</button>
                    <button onClick={()=>{handleSetCount(count+100); btnCount.current++;}}>+100</button>
                    <button onClick={()=>{handleSetCount(count+10); btnCount.current++;}}>+10</button>
                    <button onClick={()=>{handleSetCount(count+1); btnCount.current++;}}>+1</button>
                    </div>

                <div style ={{marginTop: 20}}>
                     입력: <input ref={textRef} type="number" onChange={handleOnChange} />
                     <button onClick={handleOnClick}>Clear</button>
                     
                </div>
            </div>
            );
            
        }
        Controller.defaultProps={
            count: [],
        };




        
    
export default React.memo(Controller);