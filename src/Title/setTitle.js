import { useEffect } from "react";


const setTitle = title =>{
    useEffect(()=>{
    document.title = `KhelaGhor | ${title}`;
    },[title])
}

export default setTitle;