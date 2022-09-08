import React from "react"
import menu from "../images/icon-hamburger.svg"
import close from "../images/icon-close-menu.svg"

export default function Header() {

    const [openMenu, setOpenMenu] = React.useState(false)
    function handleClick() {
        setOpenMenu(prevState => !prevState)
    }

    const hide = {
        display: "none"
    }
    const show = {
        display: "block"
    }
    const backColor = {
        background: "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))",
    }
    return (
        <header>
            <div className="desktop--header">
                <h1 className="header--h1"><a href="index.html">crowdfund</a></h1>
                <ul className="nav--list">
                    <li>About</li>
                    <li>Discover</li>
                    <li>Get started</li>
                </ul>
            </div>
            <div className="mobile--header" style={!openMenu ? null : backColor}>
                <h1 className="header--h1"><a href="index.html">crowdfund</a></h1>
                {!openMenu && <img className="menu" alt="" src={menu} onClick={handleClick}/>}
                {openMenu && <img className="close" alt="" src={close} onClick={handleClick}/>}
                <div className="dropdown" style={openMenu ? show : hide}>
                    <ul className="nav--list">
                        <li>About</li>
                        <li style={{borderTop: "2px solid #e2e8f0", borderBottom: "2px solid #e2e8f0"}}>Discover</li>
                        <li>Get started</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}