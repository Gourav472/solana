import React from 'react'
import uparrow from '../assets/images/svg/upright-arrow.svg'
import changelog from '../assets/images/sec-4.png'
import youtube from '../assets/images/svg/youtube.svg'
import podcast from '../assets/images/svg/podcast.svg'
import right2arrow from '../assets/images/right2.png'
const Section4 = () => {
    return (
        <>
            <section className='section-4-bg overflow-hidden' id='network'>
                <div className="container max-w-1124">
                    <div className=' d-flex flex-column pt-section4-text'>
                        <h2 className=' mb-0 white helvetica fw-400 lh-42 fs-2xl'>Go to the source.</h2>
                        <p className=' mb-0 helvetica fw-400 fs-lg lh-27 grey pt-1'>Read the documentation for Solana and popular tools.</p>
                    </div>
                    <div className="d-flex flex-wrap flex-lg-nowrap  gap-39 pt-5 ">
                        <div className=' max-522 d-flex z-1 w-100 flex-column'>
                            <div className=' d-flex justify-content-between align-items-center cp'>
                                <h2 className=' mb-0 white helvetica fw-400 lh-32 fs-xxl'>Solana Docs</h2>
                                <div className=' button-view d-flex align-items-center gap-10'>
                                    <h2 className=' mb-0 white view-all roboto fw-400 fs-15 lh-21 text-nowrap'>View all</h2>
                                    <img src={uparrow} alt="up-right" />
                                </div>
                            </div>
                            <div className=' py-line'>
                                <div className=' line-1 w-100'></div>
                            </div>
                            <p className=' mb-0 white helvetica fw-400 fs-lg lh-27 pt-30 max-399'>Learn how Solana works and get a high-level understanding of Solana's architecture.</p>
                        </div>
                        <div className=' max-522 d-flex z-1 w-100 flex-column'>
                            <div className=' d-flex justify-content-between align-items-center cp'>
                                <h2 className=' mb-0 white helvetica fw-400 lh-32 fs-xxl'>Metaplex Docs</h2>
                                <div className=' button-view d-flex align-items-center gap-10'>
                                    <h2 className=' mb-0 white view-all roboto fw-400 fs-15 lh-21 text-nowrap'>View all</h2>
                                    <img src={uparrow} alt="up-right" />
                                </div>
                            </div>
                            <div className=' py-line'>
                                <div className=' line-1 w-100'></div>
                            </div>
                            <p className=' mb-0 white helvetica fw-400 fs-lg lh-27 pt-30 max-503'>Learn what you build with Metaplex, make the process of creating and launching NFTs easier.</p>
                        </div>
                    </div>
                    <div className="row flex-column-reverse flex-md-row section4-row2-py">
                        <div className=" mt-4 mt-md-0 col-md-6">
                            <div className='d-flex flex-column'>
                                <h2 className=' mb-0 white helvetica fw-400 fs-6xl lh-42'>Solana Changelog</h2>
                                <p className=' mb-0 white helvetica fw-400 fs-lg lh-27 max-505 pt-25'>Some more Solana changes from Jacob & Joe. Subscribe to the newsletter: https://solana.us17.list-manage.com/s... Proposal - Priced Compute Units: ...</p>
                                <div className=' latest-box d-flex gap-10 justify-content-center  align-items-center'>
                                    <h2 className=' mb-0 white roboto fw-400 fs-15 lh-21'>LATEST EPISODE</h2>
                                    <img className='max-24 cp' src={right2arrow} alt="right-arrow" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-end col-md-6">
                            <img className=' w-100 max-w-522' src={changelog} alt="img-changelog" />
                        </div>
                    </div>
                    <div className="row section4-row3-py">
                        <div className="col-sm-6">
                            <div className='section4-card1 w-100 h-100'>
                                <div className=' d-flex flex-column'>
                                    <h2 className=' mb-0 white helvetica fw-400 fs-2xl lh-37'>Solana Developer Update</h2>
                                    <p className=' mb-0  helvetica fw-400 fs-sm lh-27 grey pt-29'>Sign up to the newsletter and learn about new resources, new commits, new proposals, and more.</p>
                                    <div className=' btn-pt'>
                                        <div className='email-box d-flex align-items-center justify-content-between w-100'>
                                            <input className=' w-100 bg-transparent email-input grey2 roboto fw-600 fs-15 lh-21 border-0' type="email" name="enter-email" placeholder='Email' />

                                            <button className=' d-none d-sm-block black roboto fw-400 fs-15 lh-21 text-nowrap button-sign'>SIGN UP</button>
                                        </div>
                                        <button className=' black w-100 mt-4 d-sm-none roboto fw-400 fs-15 lh-21 text-nowrap button-sign'>SIGN UP</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mt-4 mt-sm-0">
                            <div className='section4-card2 w-100 h-100'>
                                <div className=' d-flex flex-column'>
                                    <h2 className=' mb-0 white helvetica fw-400 fs-2xl lh-37'>Even more resources</h2>
                                    <p className=' mb-0  helvetica fw-400 fs-sm lh-27 grey pt-29'>More videos, more episodes. Discussions between industry leaders in both blockchain and technology, our team, and community developers.</p>
                                    <div className='youtube-pt'>
                                        <div className=' d-flex gap-22 flex-wrap justify-content-center  align-items-center'>
                                            <div className=' youtube-box justify-content-center justify-content-sm-start cp d-flex align-items-center gap-2'>
                                                <h2 className=' mb-0 white roboto fw-400 fs-15 lh-21'>YOUTUBE</h2>
                                                <img src={youtube} alt="logo" />
                                            </div>
                                            <div className=' youtube-box justify-content-center justify-content-sm-start cp d-flex align-items-center gap-2'>
                                                <h2 className=' mb-0 white roboto fw-400 fs-15 lh-21'>PODCAST</h2>
                                                <img src={podcast} alt="logo" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </section>
        </>
    )
}

export default Section4