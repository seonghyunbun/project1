import React,{useContext} from "react"
import { TodoContext } from "../App";
const Viewer=()=>{
    const {count}=useContext(TodoContext);
    console.log("Viewer");
    return(
        <div>
            <div>현재 카운트:</div>
            <h2>{count}</h2>
        </div>
    );
};
export default React.memo(Viewer);