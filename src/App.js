import "./App.css";
import React, {useCallback,useRef, useEffect , useState,useReducer} from "react";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";
import Even from "./component/Even";

function reducer(state,action){
    switch(action.type){
        case "SET":
            return action.data;
        default:
            return state;
    }
}
export const TodoContext = React.createContext();
function App(){
    //const [count,setCount] =userState(0);
    const [count,dispatch]=useReducer(reducer,0);
    const [text,setText]=useState("");
    const handleSetCount =useCallback((value)=>{
        //setCount(value);
        dispatch({
            type: "SET",
            data: value,
        });
    },[]);
    const handleChangeText = useCallback((e) =>{
        setText(e.target.value);
    },[]);
    
    const didMountRef = useRef(false);

    useEffect(()=>{
        if (!didMountRef.current){
            didMountRef.current = true;
            return;
        }/*else{
            console.log("컴포넌트 업데이트!");
        }
            */
    });
/*
    useEffect(() => {
        console.log("컴포넌트 마운트");
    }, []);

    useEffect(() =>{
        const intervalID = setInterval(() =>{  
            console.log("깜빡");
        }, 1000);
        
    

    return ()=>{
        console.log("클린업");
        clearInterval(intervalID);
        };
    });
*/
    return (
        <div className="App">
            <h1>Simple Counter Version 2</h1>
            <section>
                <input value ={text} onChange={handleChangeText}/>
            </section>
            <TodoContext.Provider value={{count,handleSetCount}}>
            <section>
                <Viewer/>
                <Even/>
            </section>
            <section>
                <Controller/>
            </section>
            </TodoContext.Provider>
        </div>
    );
};

export default App;