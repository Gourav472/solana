import React from 'react'
import footlogo from '../assets/images/svg/footer-logo.svg'
import logo1 from '../assets/images/svg/logo1.svg'
import logo2 from '../assets/images/svg/logo2.svg'
import logo3 from '../assets/images/svg/logo3.svg'
import logo4 from '../assets/images/svg/logo4.svg'
import logo5 from '../assets/images/svg/logo5.svg'
import logo6 from '../assets/images/svg/logo6.svg'
import eng1 from '../assets/images/svg/eng.svg'

const footer = () => {
    return (
        <>
            <footer className=' footer-bg-border' id='community'>
                <div className=' container max-w-1124'>
                    <div className="row footer-py">
                        <div className="col-12 col-md-6">
                            <div className=' d-flex flex-column'>
                                <img className=' max-31 cp' src={footlogo} alt="logo" />
                                <h2 className=' mb-0 white roboto fw-400 fs-16 lh-27 pt-20'>Managed by Solana Foundation</h2>
                                <div className=' d-flex align-items-center gap-10 py-logo'>
                                    <a className=' logo-hover' href="https://www.youtube.com/" target='_blank'><img src={logo1} alt="logo" /></a>
                                    <a className=' logo-hover' href="https://twitter.com/?lang=en" target='_blank'><img src={logo2} alt="logo" /></a>
                                    <a className=' logo-hover' href="https://discord.com/" target='_blank'><img src={logo3} alt="logo" /></a>
                                    <a className=' logo-hover' href="https://www.reddit.com/?rdt=42836" target='_blank'><img src={logo4} alt="logo" /></a>
                                    <a className=' logo-hover' href="https://github.com/" target='_blank'><img src={logo5} alt="logo" /></a>
                                    <a className=' logo-hover' href="https://telegram.org/" target='_blank'><img src={logo6} alt="logo" /></a>
                                </div>
                                <p className=' mb-0 grey2 helvetica fw-400 fs-16 lh-27'>© 2024 Solana Foundation. All rights reserved.</p>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2 d-flex mt-5 mt-md-0 justify-content-md-center justify-content-lg-end">
                            <ul className=' m-0 p-0 d-flex flex-column gap-11'>
                                <li className=' white helvetica fw-400 fs-16 lh-18 '>SOLANA</li>
                                <li><a href="" className='grey2 helvetica fw-400 fs-15 lh-27 pt_2 under_line'>Grants</a></li>
                                <li><a href="" className='grey2 helvetica fw-400 fs-15 lh-27 under_line '>Break Solana</a></li>
                                <li><a href="" className='grey2 helvetica fw-400 fs-15 lh-27 under_line '>Media Kit</a></li>
                                <li><a href="" className='grey2 helvetica fw-400 fs-15 lh-27 under_line '>Careers</a></li>
                                <li><a href="" className='grey2 helvetica fw-400 fs-15 lh-27 under_line '>Disclaimer</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-md-2 d-flex mt-5 mt-md-0 justify-content-md-center justify-content-lg-end">
                            <ul className=' m-0 p-0 d-flex flex-column gap-11'>
                                <li className=' white helvetica fw-400 fs-16 lh-18 text-nowrap '>GET CONNECTED</li>
                                <li><a href="" className='grey2 helvetica fw-400 fs-15 lh-27 pt_2 under_line'>Ecosystem</a></li>
                                <li><a href="" className='grey2 helvetica fw-400 fs-15 lh-27 under_line '>Blog</a></li>
                                <li><a href="" className='grey2 helvetica fw-400 fs-15 lh-27 under_line '>Newsletter</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-4 col-md-2 d-flex mt-5 mt-md-0 justify-content-md-center justify-content-lg-end">
                            <img className='cp max-globe' src={eng1} alt="english" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default footer