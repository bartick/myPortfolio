import React from 'react'
import logo from './../PFP645.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
    function openMenu() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('hidden');
    }
    return (
        <nav className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-3" style={{position: 'fixed', width: '100%', top: '0'}}>
            <div className="flex-1 flex justify-between items-center">
                <Link to="/" className="flex items-center justify-between text-base hover:text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/>
                    </svg>
                        &nbsp;&nbsp;&nbsp;&nbsp;Bartick&apos;s Portfolio
                </Link>
            </div>

            <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block" type="button" onClick={openMenu}>
                <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>

            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div className="hidden lg:flex  lg:items-center lg:w-auto w-full" id="menu">
                <nav>
                <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                    <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/about">About Me</Link></li>
                    <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/projects">Projects</Link></li>
                    <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/contributions">Contributions</Link></li>
                    <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2" to="/arbitary">Support</Link></li>
                </ul>
                </nav>
                <i className="hidden lg:flex lg:items-center lg:w-auto w-full ">
                    <a href="https://github.com/bartick/bartick.github.io" rel="noreferrer" target="_blank">
                        <img style={{width: '3rem', height: '3rem', borderRadius: '50%', marginTop: '10%', marginRight: '10%'}} src={logo} alt="Andy Leverenz"/>
                    </a>
                </i>
            </div>
        </nav>
    )
}
