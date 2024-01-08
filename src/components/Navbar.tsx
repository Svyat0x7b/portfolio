import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
//@ts-ignore
import { logo, menu, close } from '../assets';

const Navbar: React.FC = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                    }}>
                    <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
                    <p className="text-white text-[18px] font-bold cursor-pointer">
                        Svyat <span className="sm:block hidden">Frontend Developer</span>
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title ? 'text-white' : 'text-secondary'
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle((prev) => !prev)}
                    />
                    <div
                        className={`${
                            !toggle ? 'hidden' : 'flex'
                        } p-6 bg-slate-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className="list-none flex justify-end items-start flex-col gap-4 bg-slate-900">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${
                                        active === link.title ? 'text-white' : 'text-secondary'
                                    } text-[16px] font-medium cursor-pointer `}
                                    onClick={() => {
                                        setActive(link.title);
                                        setToggle((prev) => !prev);
                                    }}>
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
