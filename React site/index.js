// import ReactDOM from "react-dom/client"
// import React from "react"
function Header() {
    return (
    <header>
        <nav className="nav">
            <img src="./react-logo.jpg" className="nav-logo" />
            <ul className="nav-items">
                <li><a href=""> Pricing </a> </li>
                <li><a href=""> About </a> </li>
                <li><a href=""> Contact </a> </li>
            </ul>
        </nav>
    </header>
    )
}
function Footer(){
    return (
        <footer>
                © 2021 Monty development. All rights reserved.
        </footer>
    )
}
function MainContent() {
    return (
        <div>
        <h2>
            Fun facts about React
        </h2>
        <ul>
            <li> fgfg</li>
            <li> gfdgdfg</li>
            <li> fgfthkjhlg</li>
            <li> fgsawwrwrfg</li>
            <li> fgjkhjkhfg</li>
        </ul>
        </div>
    )
}
function Fun(){
    return (
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
    )
}
// ReactDOM.createRoot(fun).render("root")
ReactDOM.render(<Fun />, document.getElementById("root"))