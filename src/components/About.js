import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.toggleMode === 'dark'?'white':'black',
        backgroundColor: props.toggleMode === 'dark'?'black':'white',
        
    }
    // const [myStyle, setMyStyle]=useState({
    //     backgroundColor:'white',
    //     color:'black '
    // }) 
    // const [buttonText, setButtonText]= useState('Enable dark Mode')

    // const toggleStyle = () => {
    //     if(myStyle.color === "white"){
    //         setMyStyle({
    //             backgroundColor:'white',
    //             color:'black'
    //         })
    //         setButtonText('Enable dark Mode')
    //     }
    //     else{
    //         setMyStyle({
    //             backgroundColor:'black',
    //             color:'white'
    //         })
    //         setButtonText('Enable light Mode')
    //     }
    // }
   
    
  return (
   
    <div className="container" style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion"  id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze the Text
                </button>
                </h2>
                <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free to Use
                </button>
                </h2>
                <div style={myStyle} id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatible
                </button>
                </h2>
                <div style={myStyle} id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
    </div>
    
    {/* <button onClick={toggleStyle} className="btn btn-primary my-2">{buttonText}</button> */}
</div>

  )
}
