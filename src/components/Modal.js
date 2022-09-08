import React from "react"
import close from "../images/icon-close-modal.svg"

export default function Modal(props) {
    const bottom = {
        marginBottom: "25px"
    }

    const [onclosed, setOnClosed] = React.useState(false)
    function trueClose() {
        setOnClosed(true)
    }
    function falseClose() {
        setOnClosed(false)
    }

    return (
        <div className="modal--overlay">
            <div className="modal">
                <img className="close--modal" alt="" 
                    src={ onclosed ? "https://img.icons8.com/metro/344/delete-sign.png" : close} 
                    onMouseOut={falseClose} onMouseOver={trueClose} 
                    onClick={props.handleClick}
                />
                <h2 style={bottom}>Back this project</h2>
                <p style={{lineHeight: "25px"}}>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

                <div className="choose--pledge">
                    <div className="choose--pledge--top">
                        <div onClick={props.handleComplete} className="check--circle"></div>
                        <div>
                            <h5 
                                onClick={props.handleComplete} 
                                style={{marginBottom: "18px"}} 
                                className="select--pledge"
                            >
                                Pledge with no reward
                            </h5>
                            <p>
                                Choose to support us without a reward if you simply believe in our project. As a backer, 
                                you will be signed up to receive product updates via email.
                            </p>
                        </div>
                    </div>
                    <div className="choose--pledge--top--mobile">
                        <div>
                            <div onClick={props.handleComplete} className="check--circle"></div>
                            <h5 
                                onClick={props.handleComplete}  
                                className="select--pledge"
                            >
                                Pledge with no reward
                            </h5>
                        </div>
                        <p>
                            Choose to support us without a reward if you simply believe in our project. As a backer, 
                            you will be signed up to receive product updates via email.
                        </p>
                    </div>
                </div>


                <div className="choose--pledge" style={props.bamboo ? {border: "2px solid #3eb3ad"} : null}>
                    <div className="choose--pledge--top">
                        <div onClick={props.handleBamboo} className="check--circle">{props.bamboo ? <div className="dot"></div> : null}</div>
                        <div>
                            <div className="pledge--heading">
                                <h5 onClick={props.handleBamboo} style={{marginBottom: "18px", marginRight: "20px"}} className="select--pledge">Bamboo Stand</h5>
                                <h5 style={{marginRight: "auto"}}>Pledge $25 or more</h5>
                                <div>
                                    <h3>{props.totalBambooLeft}</h3>
                                    <p>left</p>
                                </div>
                            </div>
                            <p>
                                You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                                you’ll be added to a special Backer member list.
                            </p>
                        </div>
                    </div>
                    <div className="choose--pledge--top--mobile">
                        <div>
                            <div onClick={props.handleBamboo} className="check--circle">{props.bamboo ? <div className="dot"></div> : null}</div>
                            <div className="pledge--heading">
                                <h5 onClick={props.handleBamboo} style={{marginRight: "20px"}} className="select--pledge">Bamboo Stand</h5>
                                <h5 style={{marginRight: "auto"}}>Pledge $25 or more</h5>
                            </div>
                        </div>
                        <p>
                            You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                            you’ll be added to a special Backer member list.
                        </p>
                        <div style={{marginTop: "30px"}}>
                            <h3>{props.totalBambooLeft}</h3>
                            <p style={{marginLeft: "-10px"}}>left</p>
                        </div>
                    </div>
                    { props.bamboo ? <div className="choose--pledge--bottom">
                        <p style={{marginRight: "auto"}}>Enter your pledge</p>
                        <input 
                            className="pledge--input"
                            type="number"
                            placeholder="$25"
                            name={props.name}
                            value={props.value}
                            onChange={props.changeMoney}
                        />
                        <button onClick={props.handleBambooSelect} >Continue</button>
                    </div> : null}
                    { props.bamboo ? <div className="choose--pledge--bottom--mobile">
                        <p style={{marginBottom: "30px"}}>Enter your pledge</p>
                        <div>
                            <input 
                                className="pledge--input"
                                type="number"
                                placeholder="$25"
                                name={props.name}
                                value={props.value}
                                onChange={props.changeMoney}
                            />
                            <button onClick={props.handleBambooSelect} >Continue</button>
                        </div>
                    </div> : null}
                </div>


                <div className="choose--pledge" style={props.black ? {border: "2px solid #3eb3ad"} : null}>
                    <div className="choose--pledge--top">
                        <div onClick={props.handleBlack} className="check--circle">{props.black ? <div className="dot"></div> : null}</div>
                        <div>
                            <div className="pledge--heading">
                                <h5 onClick={props.handleBlack} style={{marginBottom: "18px", marginRight: "20px"}} className="select--pledge">Black Edition Stand</h5>
                                <h5 style={{marginRight: "auto"}}>Pledge $75 or more</h5>
                                <div>
                                    <h3>{props.totalBlackLeft}</h3>
                                    <p>left</p>
                                </div>
                            </div>
                            <p>
                                You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                                member list. Shipping is included.
                            </p>
                        </div>
                    </div>
                    <div className="choose--pledge--top--mobile">
                        <div>
                            <div onClick={props.handleBlack} className="check--circle">{props.black ? <div className="dot"></div> : null}</div>
                            <div className="pledge--heading">
                                <h5 onClick={props.handleBlack} style={{marginRight: "20px"}} className="select--pledge">Black Edition Stand</h5>
                                <h5 style={{marginRight: "auto"}}>Pledge $75 or more</h5>
                            </div>
                        </div>
                        <p>
                            You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                            member list. Shipping is included.
                        </p>
                        <div style={{marginTop: "30px"}}>
                            <h3>{props.totalBlackLeft}</h3>
                            <p style={{marginLeft: "-10px"}}>left</p>
                        </div>
                    </div>
                    { props.black ? <div className="choose--pledge--bottom">
                        <p style={{marginRight: "auto"}}>Enter your pledge</p>
                        <input 
                            className="pledge--input"
                            type="number"
                            placeholder="$75"
                            name={props.nameBlack}
                            value={props.valueBlack}
                            onChange={props.changeBlackMoney}
                        />
                        <button onClick={props.handleBlackSelect} >Continue</button>
                    </div> : null}
                    { props.black ? <div className="choose--pledge--bottom--mobile">
                        <p style={{marginBottom: "30px"}}>Enter your pledge</p>
                        <div>
                            <input 
                                className="pledge--input"
                                type="number"
                                placeholder="$75"
                                name={props.nameBlack}
                                value={props.valueBlack}
                                onChange={props.changeBlackMoney}
                            />
                            <button onClick={props.handleBlackSelect} >Continue</button>
                        </div>
                    </div> : null}
                </div>


                <div className="choose--pledge trans">
                    <div className="choose--pledge--top">
                        <div className="pledge--overlay"></div>
                        <div className="check--circle"></div>
                        <div>
                            <div className="pledge--heading">
                                <h5 style={{marginBottom: "18px", marginRight: "20px"}} className="select--pledge">Mahogany Special Edition</h5>
                                <h5 style={{marginRight: "auto"}}>Pledge $75 or more</h5>
                                <div>
                                    <h3>0</h3>
                                    <p>left</p>
                                </div>
                            </div>
                            <p>
                                You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                                to our Backer member list. Shipping is included.
                            </p>
                        </div>
                    </div>
                    <div className="choose--pledge--top--mobile">
                        <aside className="pledge--overlay"></aside>
                        <div>
                            <div className="check--circle"></div>
                            <div className="pledge--heading">
                                <h5 style={{marginRight: "20px"}} className="select--pledge">Mahogany Special Edition</h5>
                                <h5 style={{marginRight: "auto"}}>Pledge $75 or more</h5>
                            </div>
                        </div>
                        <p>
                            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                            to our Backer member list. Shipping is included.
                        </p>
                        <div style={{marginTop: "30px"}}>
                            <h3>0</h3>
                            <p style={{marginLeft: "-10px"}}>left</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}