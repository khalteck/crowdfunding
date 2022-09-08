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
        setBookmark(prevState => !prevState)
        setOpenModalComplete(prevState => !prevState)
    }

    const teal = {
        color: "#3eb3ad"
    }
    const bottom = {
        marginBottom: "40px"
    }

    //to toggle the modal
    const [openModal, setOpenModal] = useState(true)

    function handleModal() {
        setOpenModal(prevState => !prevState)
        setBamboo(false)
        setBlack(false)
    }

    //to bring up the thank you moday
    const [openModalComplete, setOpenModalComplete] = React.useState(false)
    function handleModalComplete() {
        setOpenModalComplete(prevState => !prevState)
        setOpenModal(prevState => !prevState)
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
    }

    //when the black edition select reward is clicked
    function selectBlack() {
        setOpenModal(prevState => !prevState)
        setBlack(prevState => !prevState)
        setBamboo(false)
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
                            <h3>$89,914</h3>
                            <p>of $100,000 backed</p>
                        </div>
                        <div className="stats--box stats--box2">
                            <h3>5,007</h3>
                            <p>total backers</p>
                        </div>
                        <div className="stats--box">
                            <h3>56</h3>
                            <p>days left</p>
                        </div>
                    </div>
                    <progress className="progress" value="78" max="100"></progress>
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
                                <h3>101</h3>
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
                                <h3>64</h3>
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