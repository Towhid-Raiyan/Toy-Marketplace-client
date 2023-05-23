import { useEffect } from "react";


const setTitle = title =>{
    useEffect(()=>{
    document.title = `Kidoz | ${title}`;
    },[title])
}

export default setTitle;