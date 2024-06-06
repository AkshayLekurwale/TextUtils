import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("Enter text here");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")
    }

    const handleClClick = () => {
        setText("");
        props.showAlert("Text Cleared","success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container my-3" style = {{color : props.mode==='dark'?"white":"#042743"}}>
                <h1>{props.heading}</h1>
                <textarea onChange = { handleOnChange } className="form-control" style = {{backgroundColor : props.mode==='dark'?"#13466e":"white", color : props.mode==='dark'?"white":"#042743"}} value = { text } id="myBox" rows="8" ></textarea>
                <button onClick={handleUpClick} disabled = {text.length===0} className="btn btn-primary mx-2 my-3" style={{ backgroundColor: '#4CAF50', color: '#fff'}}>Convert to Uppercase</button>
                <button onClick={handleLoClick} disabled = {text.length===0} className="btn btn-primary mx-2 my-3" style={{ backgroundColor: '#4CAF50', color: '#fff' }}>Convert to Lowercase</button>
                <button onClick={handleClClick} disabled = {text.length===0} className="btn btn-primary mx-2 my-3" style={{ backgroundColor: '#4CAF50', color: '#fff' }}>Clear Text</button>
            </div>
            <div className="container" style = {{color : props.mode==='dark'?"white":"#042743"}}>
                <h1>Your Text summary</h1>
                <p>Words = { (text==="")?0:(text.charAt(text.length-1)===" ")?text.split(" ").length-1:text.split(" ").length } characters = {text.length} </p>
                <p>{(0.008 * text.split(" ").length)} minutes to read</p>
                <p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Nothing to preview"}</p>
                </p>
            </div>
        </>
    )
}
