import React from "react";

export default function Alert(props) {

  const capitalize=(word)=>{
    let word1=word.toLowerCase();
    return word.charAt(0).toUpperCase()+word1.slice(1);
      
  }

  return (

    props.alert && (
      <div id="abcd"
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        
      </div>
    )
  );
}
