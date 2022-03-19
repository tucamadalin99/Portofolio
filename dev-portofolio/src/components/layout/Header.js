import './Header.scss';
import { Link } from 'react-scroll';
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react';

export default function Header() {

    const [isOpen, setOpen] = useState(false);
    const closeMenu = () => {
        setTimeout(() => {
            isOpen ? setOpen(false) : setOpen(true);
         }, 200)
    }

    return <div className={`cmp-header ${isOpen ? "mobile-active" : ""}`}>
        <nav className={`${isOpen ? "nav-mobile-active" : ""}`}>
            <div className='cmp-header__top'>
                <span><a href="https://github.com/tucamadalin99" rel='noreferrer' target="_blank">tucamadalin@dev:~$</a></span>
                <Hamburger color='white' size={"24"} toggled={isOpen} toggle={setOpen} />
            </div>
            <ul className="cmp-header__list">
            <li className="cmp-header__list-item">
                <Link activeClass='active' onClick={closeMenu} spy={true} smooth={true} to="about" className="cmp-header__list-item-link">
                    About
                </Link>
            </li>
            <li className="cmp-header__list-item">
                <Link activeClass='active' onClick={closeMenu}  to="experience" spy={true} smooth={true} className="cmp-header__list-item-link">
                    Experience
                </Link>
            </li>
            <li className="cmp-header__list-item">
                <Link activeClass='active' onClick={closeMenu} to="projects" spy={true} smooth={true} className="cmp-header__list-item-link">
                    Projects
                </Link>
            </li>
            <li className="cmp-header__list-item">
                <Link activeClass='active' onClick={closeMenu} to="technologies" spy={true} smooth={true} className="cmp-header__list-item-link">
                    Technologies
                </Link>
            </li>
            </ul>
           
        </nav>
    </div>
}
