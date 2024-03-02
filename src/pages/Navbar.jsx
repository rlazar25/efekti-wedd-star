import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <header>
            <h1>
                Efekti WeddStar
            </h1>
            <nav>
                <Link className="navLink" >Početna</Link>
                <Link className="navLink" >Naše Usluge</Link>
                <Link className="navLink" >Zakaži</Link>
                <Link className="navLink" >Galerija</Link>
                <Link className="navLink" >O Nama</Link>
            </nav>
        </header>
    )
}