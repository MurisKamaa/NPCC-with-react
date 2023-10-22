import '../App.css';
import CoA from "../images/CoA.png"
import logo from "../images/logo.png"

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src={CoA} alt="Logo"/>
                </div>
                <a href="../public/index.html">
                    <h1>National Productivity and<br/>Competitiveness Centre</h1>
                </a>
                <div className="icons">
                    <a href="../public/index.html">FAQ</a>
                    <a href="../public/index.html">Sitemap</a>
                    <a href="../public/index.html">Complaints</a>
                </div>
                <div className="logo">
                    <img src={logo} alt="Logo"/>
                </div>
            </header>
        
        <nav className="navbar">
            <a href="../public/index.html">Home</a>
            <a href="../public/index.html">About</a>
            <a href="../public/index.html">Productivity</a>
            <a href="../public/index.html">Media</a>
            <a href="portal/reporting.html">Reporting</a>
            <a href="../public/index.html">Contact Us</a>
        </nav>
    </>
    )
}