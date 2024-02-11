import React, { useState } from "react";

export default function TextBox(props) {
  const [text, setText] = useState("");

  const upperCase = () => {
    if (text === "") {
      props.showAlert("warning", "TextBox is Empty");
    } else {
      let newWord = text.toUpperCase();
      setText(newWord);
      props.showAlert("success", "Text has been conerted to uppercase");
    }
  };

  const lowerCase = () => {
    if (text === "") {
      props.showAlert("warning", "TextBox is Empty");
    } else {
      let newWord = text.toLowerCase();
      setText(newWord);
      props.showAlert("success", "Text has been conerted to lowercase");
    }
  };

  const newText = (event) => {
    setText(event.target.value);
  };

  const clearText = () => {
    if (text === "") {
      props.showAlert("warning", "TextBox is Empty");
    } else {
      setText("");
      props.showAlert("success", "Text has been cleared");
    }
  };

  const copyText = () => {
    var text = document.getElementById("abc");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("success", "Text has been copied successsfully");
  };

  const removeExtraSpace = () => {
    if (text === "") {
      props.showAlert("warning", "TextBox is Empty");
    } else {
      let newText = text.split(/[  ]+/);
      setText(newText.join(" "));
      props.showAlert("success", "Text has been modified");
    }
  };

  const checkText=()=>{
    console.log("function called");
    var text= document.getElementById("abc").value;
    for(let i=0;i<text.length;i++){
      if(text[i]===" "){
        continue;
      }else{
        
        return false;
      }
    }
    return true;
  }

  return (
    <>
      <div className="container" col="6">
        <h2 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.heading}
        </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="abc"
            type="text"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={newText}
            col="6"
            rows="8"
          />
        </div>

        <button className="btn btn-primary" onClick={upperCase}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary" onClick={lowerCase}>
          Convert to LowerCase
        </button>

        <button className="btn btn-primary" onClick={clearText}>
          Clear
        </button>

        <button className="btn btn-primary" onClick={copyText}>
          Copy Text
        </button>

        <button className="btn btn-primary" onClick={removeExtraSpace}>
          Remove Extra Space
        </button>

        <div
          classname="container my-3"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          <p>
            {(text.length===0 || checkText())?0:(text.charAt(text.length-1)===" "?text.split(" ").length-1:text.split(" ").length)} words and {text.length} characters
          </p>
          <p>{text.split(" ").length * (1 / 125)} minutes read</p>
          <p style={{ color: props.mode === "light" ? "black" : "white" }}>
            {text === "" ? "Enter something in the textBox" : text}
          </p>
        </div>
      </div>
    </>
  );
}
