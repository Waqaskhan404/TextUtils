import React,{useState} from 'react'




export default function Textform(props) {
    const handleextraspaces=()=>{
        let newText=text.split(/[ ]+/);
        settext(newText.join(" "));
        props.showAlert("Extra Spaces Removed","success");
    }

    const clearTextField=()=>{
        let newtext='';
        settext(newtext);
        props.showAlert("Text Cleared!","success");
    }
    


const COPYIT=(event)=>{
            let newtext=document.getElementById("mybox");
            newtext.select();
            navigator.clipboard.writeText(newtext.value);
            document.getSelection().removeAllRanges();
            console.log(newtext);
            props.showAlert("The Paragrapgh Copied","success");
          
    };

    const capitalize = () => {
        
        let firstchar = text.charAt(0); // storing the first char of the string
        let newText= firstchar.toUpperCase(); // converting that to uppercase
        settext(newText+text.slice(1)); // printing it with rest excluding the first char by using slice
        props.showAlert("The Frist Letter has Capitalized","success");

    }
    
    const handleUpClick=()=>
    {
        let newtext=text.toUpperCase();
        settext(newtext);
        props.showAlert("Converted To UpperCase","success");

    }

    const handleOnChange=(event)=>
    {
        settext(event.target.value);
        

    }


    const lcclick=()=>
    {
        let newtext=text.toLowerCase();
        settext(newtext);
        props.showAlert("Converted To LowerCase","success");

    }

    

   




    const[text,settext]=useState('');
    // text='sksgkjdgjasd' wrong way
    // settext('Hammy!!') corrcet wya 


    return (
        <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#1e1d1e'}}>
        <h1 className='mb-2' >{props.heading} </h1>
    <div className="mb-3">
    <textarea className="form-control" id="mybox" rows="8" style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#1e1d1e'}} onChange={handleOnChange} value={text}></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To Upper case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={lcclick}>Convert To Lower case</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={ COPYIT}>Copy It</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={ capitalize}>Capitalize Frist Letter</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleextraspaces}>Remove Extra Spaces</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={ clearTextField}>Clear Text</button>
    
    
    
    
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#1e1d1e'}}>
            <h2>Your text Summary</h2>
            <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words, {text.length}  characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes  Take time To Read</p>
        </div>
        <div className="container my-3"  style={{color:props.mode==='dark'?'white':'#1e1d1e'}}>
            <h2>Prewiew</h2>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
            
        </div>
        </>
    )
}
