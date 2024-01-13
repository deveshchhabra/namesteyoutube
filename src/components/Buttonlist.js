import React from "react";
import Button from "./Button";
const ButtonList=()=>{
    const List=["All","Live","Gaming"]
    return (
        <div className="flex">
            <Button name="All" />
            <Button  name="Gaming"/>
            <Button name="Songs"/>
            <Button name="Live" />
            <Button name="Cricket" />
            <Button name="New" />
            <Button name="NamesteJavascript" />
            <Button name="c++best" />




        </div>
    )
}
export default ButtonList