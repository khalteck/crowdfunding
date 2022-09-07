import React from "react"
import complete from "../images/icon-check.svg"

export default function ModalComplete(props) {
    return (
       <div className="modal--overlay">
             <div className="modal--complete">
                <img alt="" src={complete} style={{marginBottom: "35px"}}/>
                <h4 style={{margin: "auto", fontSize: "25px"}}>Thanks for your Support!</h4>
                <p style={{marginTop: "20px", lineHeight: "25px"}}>
                    Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                    an email once our campaign is completed.
                </p>
                <button onClick={props.handleClick} style={{marginTop: "30px"}}>Got it!</button>
            </div>
       </div>
    )
}