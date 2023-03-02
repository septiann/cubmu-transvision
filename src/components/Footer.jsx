import React from 'react'
import { linksFooter, socialMedia } from '../constants';
import logo_cubmu from '../assets/logo_cubmu.png';

const Footer = () => {
  return (
    <footer className=''>
        <div className={`flex justify-between`}>
            <div className={`flex flex-col lg:flex-row gap-10 lg:gap-0`}>
                <div className='flex flex-col lg:flex-[2] gap-8'>
                    <img src={logo_cubmu} alt="logo_cubmu" className={`w-[163px]`} />
                    <p className={`font-mulish font-[400] text-grey4 text-[14px] leading-[24px]`}>CubMu adalah layanan streaming dari Transvision yang menyediakan berbagai konten VOD menarik dan menghibur. Nikmati semua konten dari CubMu di berbagai platform media Android, IOS, TV, dan Website</p>
                    <ul className='list-none flex flex-col lg:flex-row justify-between text-left gap-3 lg:justify-start'>
                        {linksFooter.map((link, index) => (
                            <li
                                key={link.id}
                                className={`font-mulish font-[400] cursor-pointer text-grey4 text-[14px] lg:flex`}
                            >
                                {index != 0 ? (
                                    <span className='hidden lg:block ml-3 mr-6'>&#8226;</span>
                                ) : null
                                }
                                <a href={link.link} className='flex items-center gap-2 hvr-underline-from-left'>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex lg:flex-[3] flex-wrap gap-5 justify-center lg:justify-end items-center'>
                    {socialMedia.map((item, index) => (
                        <div className={`social-media w-[165px] h-[109px] rounded-[6px] relative flex flex-col justify-end px-4 py-3`} key={item.id} style={{ background: item.color }}>
                            <h6 className={`font-mulish font-[400] text-[#8A8F9F] text-[12px]`}>Follow us on</h6>
                            <a href={item.link} className={`font-mulish font-[700] text-white text-[18px]`}>{item.title}</a>
                            <img src={item.image} alt={item.image} className={`absolute top-0 right-0`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <h4 className={`font-mulish font-[400] text-grey4 text-[14px] mt-10 w-full text-center`}>© 2022, CubMu All Rights Reserved</h4>
    </footer>
  )
}

export default Footer