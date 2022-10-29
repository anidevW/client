import React from "react"
import { useLocation } from "react-router-dom"
export default function Store(){
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const storeId = params.get("storeId");
    return (
        <>
            <label>Store</label><br/>
            Store id : {storeId}<br/>
            Store name : {location.state.storeName}
        </>        
    )
}