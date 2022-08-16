import React, {useState} from 'react';


export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("convert butoon was clicked" + text)
        // console.log(text)
        let upperText = text.toUpperCase()
        setText(upperText)
        props.showAlert("sucessfully converted to uppercase", "success")
    }
    const handleLoClick = () => {
        // console.log(text);
        const lowerText = text.toLowerCase()
        setText(lowerText);
        props.showAlert("sucessfully converted to lowercase", "success")
    }
    const handleTitleClick = () => {
        const titleText = text.split(' ');
        for(let i = 0; i < titleText.length; i++){
            titleText[i] = titleText[i][0].toUpperCase() + titleText[i].substr(1).toLowerCase();
        }
        setText(titleText.join(" "))
        props.showAlert("sucessfully converted to TitleCase", "success")
    }
    const handleReverseClick = () => {
        const revText = text.split("");
        // console.log(revText);
        const reverseText = revText.reverse();
        // console.log(reverseText)
        setText(reverseText.join(""));
        props.showAlert("sucessfully converted to Reverse", "success")
        
    }

    const handleCopyClick = () => {
        // let copyText = document.getElementById("myBox");
        // copyText.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Text Copied", "success")
    }
    const handleExtraSpaces = () => {
            let newText = text.split(/[ ] +/);
            setText(newText.join(" "))
            props.showAlert("sucessfully removed extra spaces", "success")
        }
    
   
    const handleClearClick = () => {
        // console.log(text);
        const clearText = ''
        setText(clearText);
    }
    const handleOnChange = (event) => {
        // console.log(" on  change")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
<div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
    <h1 className='my-4'>
        {props.heading}
    </h1>
    <div className="mb-3">
    {/* <label for="myBox" class="form-label">{props.heading}</label> */}
    <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    <button disabled={text.length===0} className="btn btn-primary my-2" onClick={handleUpClick}>Convert into Uppercase</button>
    <button disabled={text.length===0}className="btn btn-primary my-2 mx-2" onClick={handleTitleClick}>Convert into Titlecase</button>
    <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert into Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleReverseClick}>Convert into Reverse</button>
    <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleCopyClick}>Copy</button>
    <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear</button>
    
    </div>
</div>
<div className="container my-2" style={{color: props.mode === 'dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p><b>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length}</b> Words and <b>{text.length}</b> Character</p>
    <p> You can read it in <b>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length}</b> Minutes</p>
    <h2>Preview</h2>
    <p>{text.length > 0 ?text:'Enter your text to Preview it here'}</p>
</div>
</>
  )
}
