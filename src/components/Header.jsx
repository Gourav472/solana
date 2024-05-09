import React from 'react'
import Solana from '../assets/images/svg/solana-logo.svg'
import hero from '../assets/images/hero.png'
import message from '../assets/images/svg/btn-svg.svg'
import elipsehead from '../assets/images/svg/header-elipse.svg'
import rightarrow from '../assets/images/svg/right-arrow.svg'
const Header = () => {
    return (
        <>
            <header className='bg-black position-relative overflow-hidden'>
                <div className='bg-linear-blue  py-1 d-flex justify-content-center align-items-center '>
                    <h2 className=' mb-0 black roboto fw-400 fs-sm px-2 text-center lh-27 '>Breakpoint 2023 - New City. New Vibes - Get Early Access -&gt; </h2>
                </div>
                <nav className=' z-2  position-relative' >
                    <div className="nav-py nav-bg  d-flex flex-column align-items-center justify-content-center w-100 position-absolute z-3 top-navbar left-0 ">
                        <div className="container max-w-1140 ">
                            <div className="d-flex align-items-center justify-content-between">
                                <img className=' w-100 max-181 cp' src={Solana} alt="solana-logo" />
                                <label for="icon" className="icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </label>
                                <input type="checkbox" id='icon' hidden />
                                <div className="d-flex gap-5 align-items-center mobile-view m-0 ">
                                    <div className="dropdown">
                                        <a href="#learn" className="dropbtn text-hover-dropdown helvetica fs-sm white lh-27 fw-400 text-center">
                                            Learn<span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2931 8.29308C17.3853 8.19757 17.4957 8.12139 17.6177 8.06898C17.7397 8.01657 17.8709 7.98898 18.0037 7.98783C18.1365 7.98668 18.2681 8.01198 18.391 8.06226C18.5139 8.11254 18.6256 8.18679 18.7195 8.28069C18.8134 8.37458 18.8876 8.48623 18.9379 8.60913C18.9882 8.73202 19.0135 8.8637 19.0123 8.99648C19.0112 9.12926 18.9836 9.26048 18.9312 9.38249C18.8788 9.50449 18.8026 9.61483 18.7071 9.70708L12.7071 15.7071C12.5248 15.8893 12.2793 15.9942 12.0216 15.9998C11.7639 16.0054 11.514 15.9113 11.3241 15.7371L5.32407 10.2371C5.12861 10.0578 5.01237 9.8082 5.00093 9.54321C4.99527 9.41201 5.0155 9.28097 5.06048 9.15758C5.10546 9.03419 5.1743 8.92087 5.26307 8.82408C5.35185 8.7273 5.45881 8.64895 5.57787 8.5935C5.69692 8.53806 5.82573 8.5066 5.95694 8.50094C6.22193 8.4895 6.48061 8.58379 6.67607 8.76308L11.9701 13.6161L17.2931 8.29308Z" fill="#E6E6E6" />
                                            </svg>

                                            </span>
                                        </a>
                                        <div className="dropdown-content dropdown_bg">
                                            <a className=" text-hover-dropdown helvetica fs-sm white lh-27 fw-400 text-center"
                                                href="#ggg">
                                                Build </a>
                                            <a className=" text-hover-dropdown helvetica fs-sm white lh-27 fw-400 text-center"
                                                href="#ggg">
                                                Learn</a>

                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a href="#build" className="dropbtn text-hover-dropdown helvetica fs-sm white lh-27 fw-400 text-center">
                                            Build<span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2931 8.29308C17.3853 8.19757 17.4957 8.12139 17.6177 8.06898C17.7397 8.01657 17.8709 7.98898 18.0037 7.98783C18.1365 7.98668 18.2681 8.01198 18.391 8.06226C18.5139 8.11254 18.6256 8.18679 18.7195 8.28069C18.8134 8.37458 18.8876 8.48623 18.9379 8.60913C18.9882 8.73202 19.0135 8.8637 19.0123 8.99648C19.0112 9.12926 18.9836 9.26048 18.9312 9.38249C18.8788 9.50449 18.8026 9.61483 18.7071 9.70708L12.7071 15.7071C12.5248 15.8893 12.2793 15.9942 12.0216 15.9998C11.7639 16.0054 11.514 15.9113 11.3241 15.7371L5.32407 10.2371C5.12861 10.0578 5.01237 9.8082 5.00093 9.54321C4.99527 9.41201 5.0155 9.28097 5.06048 9.15758C5.10546 9.03419 5.1743 8.92087 5.26307 8.82408C5.35185 8.7273 5.45881 8.64895 5.57787 8.5935C5.69692 8.53806 5.82573 8.5066 5.95694 8.50094C6.22193 8.4895 6.48061 8.58379 6.67607 8.76308L11.9701 13.6161L17.2931 8.29308Z" fill="#E6E6E6" />
                                            </svg>

                                            </span>
                                        </a>
                                        <div className="dropdown-content dropdown_bg">
                                            <a className=" text-hover-dropdown helvetica fs-sm white lh-27 fw-400 text-center"
                                                href="#ggg">
                                                Build </a>
                                            <a className=" text-hover-dropdown helvetica fs-sm white lh-27 fw-400 text-center"
                                                href="#ggg">
                                                Learn</a>

                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a href="#network" className="dropbtn text-hover-dropdown helvetica fs-sm white lh-27 fw-400 text-center">
                                            Network<span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2931 8.29308C17.3853 8.19757 17.4957 8.12139 17.6177 8.06898C17.7397 8.01657 17.8709 7.98898 18.0037 7.98783C18.1365 7.98668 18.2681 8.01198 18.391 8.06226C18.5139 8.11254 18.6256 8.18679 18.7195 8.28069C18.8134 8.37458 18.8876 8.48623 18.9379 8.60913C18.9882 8.73202 19.0135 8.8637 19.0123 8.99648C19.0112 9.12926 18.9836 9.26048 18.9312 9.38249C18.8788 9.50449 18.8026 9.61483 18.7071 9.70708L12.7071 15.7071C12.5248 15.8893 12.2793 15.9942 12.0216 15.9998C11.7639 16.0054 11.514 15.9113 11.3241 15.7371L5.32407 10.2371C5.12861 10.0578 5.01237 9.8082 5.00093 9.54321C4.99527 9.41201 5.0155 9.28097 5.06048 9.15758C5.10546 9.03419 5.1743 8.92087 5.26307 8.82408C5.35185 8.7273 5.45881 8.64895 5.57787 8.5935C5.69692 8.53806 5.82573 8.5066 5.95694 8.50094C6.22193 8.4895 6.48061 8.58379 6.67607 8.76308L11.9701 13.6161L17.2931 8.29308Z" fill="#E6E6E6" />
                                            </svg>

                                            </span>
                                        </a>
                                        <div className="dropdown-content dropdown_bg">
                                            <a className=" text-hover-dropdown helvetica fs-sm white lh-27 fw-400 text-center"
                                                href="#ggg">
                                                Build </a>
                                            <a className=" text-hover-dropdown helvetica fs-sm white lh-27 fw-400 text-center"
                                                href="#ggg">
                                                Learn</a>

                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a href="#community" className="dropbtn text-hover-dropdown helvetica fs-sm white lh-27 fw-400 text-center">
                                            Community<span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2931 8.29308C17.3853 8.19757 17.4957 8.12139 17.6177 8.06898C17.7397 8.01657 17.8709 7.98898 18.0037 7.98783C18.1365 7.98668 18.2681 8.01198 18.391 8.06226C18.5139 8.11254 18.6256 8.18679 18.7195 8.28069C18.8134 8.37458 18.8876 8.48623 18.9379 8.60913C18.9882 8.73202 19.0135 8.8637 19.0123 8.99648C19.0112 9.12926 18.9836 9.26048 18.9312 9.38249C18.8788 9.50449 18.8026 9.61483 18.7071 9.70708L12.7071 15.7071C12.5248 15.8893 12.2793 15.9942 12.0216 15.9998C11.7639 16.0054 11.514 15.9113 11.3241 15.7371L5.32407 10.2371C5.12861 10.0578 5.01237 9.8082 5.00093 9.54321C4.99527 9.41201 5.0155 9.28097 5.06048 9.15758C5.10546 9.03419 5.1743 8.92087 5.26307 8.82408C5.35185 8.7273 5.45881 8.64895 5.57787 8.5935C5.69692 8.53806 5.82573 8.5066 5.95694 8.50094C6.22193 8.4895 6.48061 8.58379 6.67607 8.76308L11.9701 13.6161L17.2931 8.29308Z" fill="#E6E6E6" />
                                            </svg>

                                            </span>
                                        </a>
                                        <div className="dropdown-content dropdown_bg">
                                            <a className=" text-hover-dropdown helvetica fs-sm white lh-27 fw-400 text-center"
                                                href="#ggg">
                                                Build </a> <br />
                                            <a className=" text-hover-dropdown helvetica fs-sm white lh-27 fw-400 text-center"
                                                href="#ggg">
                                                Learn</a>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className=' container max-w-1140 z-0'>
                    <div className="row flex-column-reverse flex-md-row pb-5 pt-header-row pb-lg-0">
                        <div className="col-12 z-1  col-md-5 justify-content-center d-flex align-items-center  ">
                            <div className=' d-flex flex-column align-items-center align-items-md-start'>
                                <h2 className=' mb-0 white helvetica fw-400 lh-94 fs-5xl text-center text-md-start'>Developer Resources</h2>
                                <p className=' mb-0 grey helvetica fw-400 fs-xl max-390 text-center text-md-start pt-19'>A manual for joining the Solana ecosystem. By builders for builders.</p>
                                <div className=' d-flex gap-sm-4 gap-lg-2 flex-wrap gap-3 justify-content-center justify-content-md-start align-items-center pt-40'>
                                    <button className='button-build black roboto fw-400 lh-21 fs-15 text-nowrap'>BUILD NOW</button>

                                    <div className='button-stack d-flex align-items-center gap-10 '>
                                        <h2 className=' roboto fw-400 lh-21 fs-15 mb-0 text-nowrap'>STACK EXCHANGE</h2>
                                        <img src={message} alt="message-svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12   col-md-7 justify-content-center d-flex justify-content-md-end">
                            <img className='hero-image-translate z-1 w-100 max-636 ' src={hero} alt="hero-img" />
                        </div>
                    </div>

                </div>
                <div className='header-elipse d-none d-sm-block position-absolute'>
                    <img className=' w-100' src={elipsehead} alt="ellipse" />
                </div>
                <div className="container position-relative z-1 max-w-1124" id='learn'>
                    <h2 className=' mb-0 white helvetica fw-400 lh-42 fs-3xl'>Get started.</h2>
                    <p className=' mb-0 pt-1 grey helvetica fw-400 lh-27 fs-lg'>Use these Solana Foundation and community courses to begin your journey into Solana development.</p>
                    <div className=' d-flex flex-column align-items-center pt-32'>
                        <div className='big-box w-100'>
                            <div className=' d-flex flex-column'>
                                <div className=' mini-box justify-content-center align-items-center d-flex'>
                                    <h2 className=' mb-0 fw-400 helvetica lh-18 fs-11 white'>17 Chapters</h2>
                                </div>
                                <h2 className=' mb-0 white helvetica fw-400 lh-40 fs-6xl pt-17'>Solana Development Course</h2>
                                <p className=' mb-0 white max-387 helvetica fw-400 lh-27 fs-md pt-box-text'>Quickstart your Solana development starting from nothing to complex programs.</p>
                                <div className=' pt-26'>
                                    <img className='cp' src={rightarrow} alt="arrow-svg" />
                                </div>
                            </div>
                        </div>
                        <div className="row w-100 py-sec2-row ">
                            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center justify-content-lg-start ">
                                <div className='card-1 card-1-bg d-flex align-items-end w-100'>
                                    <div className=' d-flex justify-content-between align-items-end w-100'>
                                        <div className=' d-flex flex-column gap-11'>
                                            <div className=' mini-box justify-content-center align-items-center d-flex'>
                                                <h2 className=' mb-0 fw-400 helvetica lh-18 fs-11 white'>14 Chapters</h2>
                                            </div>
                                            <h2 className=' mb-0 white helvetica fw-400 lh-25 fs-md'>Buildspace</h2>
                                        </div>
                                        <img className='cp' src={rightarrow} alt="right-arrow" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-cards mt-sm-0 ">
                                <div className='card-1 card-2-bg d-flex align-items-end w-100'>
                                    <div className=' d-flex justify-content-between align-items-end w-100'>
                                        <div className=' d-flex flex-column gap-11'>
                                            <div className=' mini-box justify-content-center align-items-center d-flex'>
                                                <h2 className=' mb-0 fw-400 helvetica lh-18 fs-11 white'>12 Chapters</h2>
                                            </div>
                                            <h2 className=' mb-0 white helvetica fw-400 lh-25 fs-md'>Solana Bytes</h2>
                                        </div>
                                        <img className='cp' src={rightarrow} alt="right-arrow" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-cards mt-md-0 justify-content-lg-end">
                                <div className='card-1 card-3-bg d-flex align-items-end w-100'>
                                    <div className=' d-flex justify-content-between align-items-end w-100'>
                                        <div className=' d-flex flex-column gap-11'>
                                            <div className=' mini-box justify-content-center align-items-center d-flex'>
                                                <h2 className=' mb-0 fw-400 helvetica lh-18 fs-11 white'>1 Chapters</h2>
                                            </div>
                                            <h2 className=' mb-0 white helvetica fw-400 lh-25 fs-md'>Scaffold Series</h2>
                                        </div>
                                        <img className='cp' src={rightarrow} alt="right-arrow" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-cards justify-content-lg-start">
                                <div className='card-1 card-4-bg d-flex align-items-end w-100'>
                                    <div className=' d-flex justify-content-between align-items-end w-100'>
                                        <div className=' d-flex flex-column gap-11'>
                                            <div className=' mini-box justify-content-center align-items-center d-flex'>
                                                <h2 className=' mb-0 fw-400 helvetica lh-18 fs-11 white'>3 Chapters</h2>
                                            </div>
                                            <h2 className=' mb-0 white helvetica fw-400 lh-25 fs-md'>Freecodecamp Solana Course</h2>
                                        </div>
                                        <img className='cp' src={rightarrow} alt="right-arrow" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-cards">
                                <div className='card-1 card-5-bg d-flex align-items-end w-100'>
                                    <div className=' d-flex justify-content-between align-items-end w-100'>
                                        <div className=' d-flex flex-column gap-11'>
                                            <div className=' mini-box justify-content-center align-items-center d-flex'>
                                                <h2 className=' mb-0 fw-400 helvetica lh-18 fs-11 white'>167 Chapters</h2>
                                            </div>
                                            <h2 className=' mb-0 white helvetica fw-400 lh-25 fs-md'>Solana Development by Knox</h2>
                                        </div>
                                        <img className='cp' src={rightarrow} alt="right-arrow" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-cards justify-content-lg-end">
                                <div className='card-1 card-6-bg d-flex align-items-end w-100'>
                                    <div className=' d-flex justify-content-between align-items-end w-100'>
                                        <div className=' d-flex flex-column gap-11'>
                                            <div className=' mini-box justify-content-center align-items-center d-flex'>
                                                <h2 className=' mb-0 fw-400 helvetica lh-18 fs-11 white'>8 Chapters</h2>
                                            </div>
                                            <h2 className=' mb-0 white helvetica fw-400 lh-25 fs-md'>Solana Bootcamp</h2>
                                        </div>
                                        <img className='cp' src={rightarrow} alt="right-arrow" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header