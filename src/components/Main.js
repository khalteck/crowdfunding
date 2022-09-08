import React from "react"
import { useState } from "react"
import mastercraft from "../images/logo-mastercraft.svg"
import bookmarkIcon from "../images/icon-bookmark.svg"
import bookmarkedIcon from "../images/icons8-bookmark-30.png"
import Modal from "./Modal"
import ModalComplete from "./Modal-complete"

export default function Main() {


    //to set the bookmarked indicator
    const [bookmark, setBookmark] = useState(false)

    function handleBookmark() {
        setBookmark(true)
        setOpenModalComplete(prevState => !prevState)
    }

    const teal = {
        color: "#3eb3ad"
    }
    const bottom = {
        marginBottom: "40px"
    }


    //to toggle the modal
    const [openModal, setOpenModal] = useState(false)

    function handleModal() {
        setOpenModal(prevState => !prevState)
        setBamboo(false)
        setBlack(false)
        setBambooInput(prevState => {
            return {
                ...prevState,
                pledge: ""
            }
        })
        setBlackBambooInput(prevState => {
            return {
                ...prevState,
                blackPledge: ""
            }
        })
    }


    //to bring up the thank you modal without pledging money
    const [openModalComplete, setOpenModalComplete] = React.useState(false)
    function handleModalComplete() {
        setOpenModalComplete(prevState => !prevState)
        setOpenModal(prevState => !prevState)
        setBacked((count) => {
            return count + 1
        })
    }


    //to select bamboo stand and pledge $25
    const [bamboo, setBamboo] = React.useState(false)
    function handleBamboo() {
        setBamboo(prevState => !prevState)
        setBlack(false)
    }


    //to select black edition stand and pledge $75
    const [black, setBlack] = React.useState(false)
    function handleBlack() {
        setBlack(prevState => !prevState)
        setBamboo(false)
    }


    //when the bamboo select reward is clicked
    function selectBamboo() {
        setOpenModal(prevState => !prevState)
        setBamboo(prevState => !prevState)
        setBlack(false)
        setBambooInput(prevState => {
            return {
                ...prevState,
                pledge: ""
            }
        })
        setBlackBambooInput(prevState => {
            return {
                ...prevState,
                blackPledge: ""
            }
        })
    }


    //when the black edition select reward is clicked
    function selectBlack() {
        setOpenModal(prevState => !prevState)
        setBlack(prevState => !prevState)
        setBamboo(false)
        setBambooInput(prevState => {
            return {
                ...prevState,
                pledge: ""
            }
        })
        setBlackBambooInput(prevState => {
            return {
                ...prevState,
                blackPledge: ""
            }
        })
    }



    //to pledge $25 or above and increase the backed count by 1 and increase total money raised by the value
    const [backed, setBacked] = React.useState(5007)
    const [totalRaised, setTotalRaised] = React.useState(80915)
    const [totalBambooLeft, setTotalBambooLeft] = React.useState(101)

    const [bambooInput, setBambooInput] = React.useState({
        pledge: ""
    })
    const changeMoney = (event) => {
        const {name, value} = event.target
        setBambooInput((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function handleBambooSelect() {
        setTotalBambooLeft((count) => {
            return count - 1
        })
        setBacked((count) => {
            return count + 1
        })
        setTotalRaised((amount) => {
            return bambooInput.pledge ? parseInt(amount) + parseInt(bambooInput.pledge) : parseInt(amount)
        })
        setOpenModalComplete(prevState => !prevState)
        setOpenModal(prevState => !prevState)
    }



    //to pledge $75 or above and increase the backed count by 1 and increase total money raised by the value
    const [totalBlackLeft, setTotalBlackLeft] = React.useState(64)
    const [blackBambooInput, setBlackBambooInput] = React.useState({
        blackPledge: ""
    })
    const changeBlackMoney = (event) => {
        const {name, value} = event.target
        setBlackBambooInput((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function handleBlackSelect() {
        setTotalBlackLeft((count) => {
            return count - 1
        })
        setBacked((count) => {
            return count + 1
        })
        setTotalRaised((amount) => {
            return blackBambooInput.blackPledg ? parseInt(amount) + parseInt(blackBambooInput.blackPledge) : parseInt(amount)
        })
        setOpenModalComplete(prevState => !prevState)
        setOpenModal(prevState => !prevState)
    }



    return (
        <main>
            <section className="top--section"></section>

            <section className="second--section">
                {
                    openModal && 
                    <Modal 
                        handleClick={handleModal}
                        handleComplete={handleModalComplete}
                        bamboo={bamboo}
                        handleBamboo={handleBamboo}
                        black={black}
                        handleBlack={handleBlack}
                        name="pledge"
                        value={bambooInput.pledge}
                        handleBambooSelect={handleBambooSelect}
                        changeMoney={changeMoney}
                        nameBlack="blackPledge"
                        valueBlack={blackBambooInput.pledge}
                        handleBlackSelect={handleBlackSelect}
                        changeBlackMoney={changeBlackMoney}
                        totalBambooLeft={totalBambooLeft}
                        totalBlackLeft={totalBlackLeft}
                    />
                }
                {
                    openModalComplete && 
                    <ModalComplete
                        handleClick={handleBookmark}
                    />
                }

                <div className="each--box first--box">
                    <img className="mastercraft--logo" alt="" src={mastercraft}/>
                    <h1 className="master--h1">Mastercraft Bamboo Monitor Riser</h1>
                    <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                    <div className="back--project">
                        <button className="btn" onClick={handleModal}>Back this project</button>
                        <div className="bookmark">
                            <div className="icon--div">
                                {bookmark ? <img className="bookmark--img" alt="" src={bookmarkedIcon}/> : <img className="unbookmarked--img" alt="" src={bookmarkIcon}/>}
                            </div>
                            {bookmark ? <div style={teal} className="bookmark--btn">Bookmarked</div> : <div className="bookmark--btn">Bookmark</div>}
                        </div>
                    </div>
                </div>

                <div className="each--box">
                    <div className="stats">
                        <div className="stats--box">
                            { 
                                bambooInput.pledge > 0 && 
                                <div className="plus--money">
                                    + ${bambooInput.pledge}
                                </div>
                            }
                            { 
                                blackBambooInput.blackPledge > 0 &&
                                <div className="plus--money">
                                    + ${blackBambooInput.blackPledge}
                                </div>
                            }
                            <h3>${totalRaised}</h3>
                            <p>of $100,000 backed</p>
                        </div>
                        <div className="stats--box stats--box2">
                            { bambooInput.pledge > 0 && <div className="plus--money">+1</div>}
                            { blackBambooInput.blackPledge > 0 && <div className="plus--money">+1</div>}
                            <h3>{backed}</h3>
                            <p>total backers</p>
                        </div>
                        <div className="stats--box">
                            <h3>56</h3>
                            <p>days left</p>
                        </div>
                    </div>
                    <progress className="progress" value={totalRaised} max="100000"></progress>
                </div>

                <div className="each--box">
                    <h2 style={bottom}>About this project</h2>
                    <p className="about--text">
                        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
                        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.<br/><br/>

                        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
                        to allow notepads, pens, and USB sticks to be stored under the stand.
                    </p>

                    <div className="pledge">
                        <div className="heading--div">
                            <h4>Bamboo Stand</h4>
                            <h5>Pledge $25 or more</h5>
                        </div>
                        <p className="pledge--text">
                            You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                            you’ll be added to a special Backer member list.
                        </p>
                        <div className="count--div">
                            <div>
                                <h3>{totalBambooLeft}</h3>
                                <p>left</p>
                            </div>
                            <button onClick={selectBamboo} className="pledge--btn">Select Reward</button>
                        </div>
                    </div>

                    <div className="pledge">
                        <div className="heading--div">
                            <h4>Black Edition Stand</h4>
                            <h5>Pledge $75 or more</h5>
                        </div>
                        <p className="pledge--text">
                            You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                            member list. Shipping is included.
                        </p>
                        <div className="count--div">
                            <div>
                                <h3>{totalBlackLeft}</h3>
                                <p>left</p>
                            </div>
                            <button onClick={selectBlack} className="pledge--btn">Select Reward</button>
                        </div>
                    </div>

                    <div className="pledge special--pledge">
                        <div className="pledge--overlay"></div>
                        <div className="heading--div">
                            <h4>Mahogany Special Edition</h4>
                            <h5>Pledge $200 or more</h5>
                        </div>
                        <p className="pledge--text">
                            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                            to our Backer member list. Shipping is included.
                        </p>
                        <div className="count--div">
                            <div>
                                <h3>0</h3>
                                <p>left</p>
                            </div>
                            <button className="pledge--btn outof--stock">Out of Stock</button>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}