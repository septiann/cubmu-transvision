import React from 'react'

import logo_cubmu from '../assets/logo_cubmu.png';
import icon_search from '../assets/icon-search.svg';
import icon_notification from '../assets/icon-notification.svg';
import icon_avatar from '../assets/icon-avatar.svg';
import icon_chevron from '../assets/icon-chevron.svg';
import icon_arrow_down from '../assets/icon-arrow-down.svg';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo_cubmu} alt="logo_cubmu" className="w-[112px]" />

        <ul className='list-none hidden md:flex lg:flex items-center gap-12'>
            {navLinks.map((nav, index) => (
                <li
                    key={nav.id}
                    className={`font-mulish ${window.location.pathname == nav.link ? "font-[700]" : "font-[400]"}  cursor-pointer text-[#B1B2B3] text-[14px]`}
                >
                    <a href={nav.link} className='flex items-center gap-2 hvr-underline-from-left'>
                        {nav.title}

                        {nav.link == "/category" ? (
                            <img src={icon_chevron} alt="icon_chevron" className='w-[12px]' />
                        ) : null}
                    </a>
                </li>
            ))}
        </ul>

        <div className='flex items-center gap-7'>
            <img src={icon_search} alt="icon_search" className='w-[24px]' />
            <img src={icon_notification} alt="icon_notification" className='w-[24px]' />
            <button className='flex items-center gap-2'>
                <img src={icon_avatar} alt="icon_avatar" className='w-[32px]'/>
                <span className={`font-mulish font-[600] text-white text-[14px] hidden md:block lg:block`}>BERUANGAIR</span>
                <img src={icon_arrow_down} className={`w-[15px]`} />
            </button>
        </div>
    </nav>
  )
}

export default Navbar