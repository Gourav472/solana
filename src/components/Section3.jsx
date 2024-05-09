import React from 'react'
import uparrow from '../assets/images/svg/upright-arrow.svg'
import elipse1 from '../assets/images/svg/elipse-1.svg'
const section3 = () => {
    return (
        <>
            <section className=' bg-black' id='build'>
                <div className=' container max-w-1124'>
                    <h2 className=' mb-0 white helvetica fw-400 lh-42 fs-7xl'>Dig deeper.</h2>
                    <p className=' mb-0 grey helvetica fw-400 lh-27 fs-lg pt-1'>Learn from resources across the greater Solana ecosystem.</p>

                    <div className="row py-section3  ">
                        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                            <div className=' black-card  z-1 w-100 position-relative '>
                                <div className=' d-flex flex-column justify-content-between h-100'>
                                    <div className=' d-flex flex-column'>
                                        <h2 className=' purple mb-0 helvetica fw-400 fs-12 lh-19'>TOOL / LIBRARY</h2>
                                        <p className=' mb-0 white helvetica fw-400 fs-19 lh-21 pt-2'>Core Documentation</p>
                                        <p className=' mb-0 white helvetica fw-400 fs-16 lh-25 pt-14'>The official Solana documentation on developing, validators, SPL tokens, wallets and more.</p>
                                    </div>
                                    <div className=' d-flex gap-2 pt_35  align-items-center '>
                                        <h2 className='cp mb-0 white helvetica fw-400 fs-11 lh-27 '>Learn more</h2>
                                        <img className='cp' src={uparrow} alt="upright-arrow" />
                                    </div>
                                </div>
                                <div className='elipse-purple  position-absolute bottom-0'>
                                    <img className='max-259 w-100' src={elipse1} alt="purple-elipse" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-cards mt-sm-0">
                            <div className=' black-card z-1 position-relative w-100 '>
                                <div className=' d-flex flex-column justify-content-between h-100'>
                                    <div className=' d-flex flex-column'>
                                        <h2 className=' purple mb-0 helvetica fw-400 fs-12 lh-19'>TOOL / LIBRARY</h2>
                                        <p className=' mb-0 white helvetica fw-400 fs-19 lh-21 pt-2'>Solana Cookbook</p>
                                        <p className=' mb-0 white helvetica fw-400 fs-16 lh-25 pt-14'>The Solana Cookbook is a developer resource that provides the essential concepts and references for building applications on Solana.</p>
                                    </div>
                                    <div className=' d-flex gap-2 pt_10 align-items-center'>
                                        <h2 className=' cp mb-0 white helvetica fw-400 fs-11 lh-27 '>Learn more</h2>
                                        <img className='cp' src={uparrow} alt="upright-arrow" />
                                    </div>
                                </div>
                                <div className='elipse-purple  position-absolute bottom-0'>
                                    <img className='max-259 w-100' src={elipse1} alt="purple-elipse" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-cards mt-md-0 ">
                            <div className=' black-card z-1 position-relative w-100 '>
                                <div className=' d-flex flex-column justify-content-between h-100'>
                                    <div className=' d-flex flex-column'>
                                        <h2 className=' purple mb-0 helvetica fw-400 fs-12 lh-19'>TOOL / LIBRARY</h2>
                                        <p className=' mb-0 white helvetica fw-400 fs-19 lh-21 pt-2'>Solana Stack Exchange</p>
                                        <p className=' mb-0 white helvetica fw-400 fs-16 lh-25 pt-14'>Solana Stack Exchange is a question and answer site for Solana software users and developers.</p>
                                    </div>
                                    <div className=' d-flex gap-2 pt_35 align-items-center'>
                                        <h2 className='cp mb-0 white helvetica fw-400 fs-11 lh-27 '>Learn more</h2>
                                        <img className='cp' src={uparrow} alt="upright-arrow" />
                                    </div>
                                </div>
                                <div className='elipse-purple  position-absolute bottom-0'>
                                    <img className='max-259 w-100' src={elipse1} alt="purple-elipse" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-cards">
                            <div className=' black-card z-1 position-relative w-100 '>
                                <div className=' d-flex flex-column justify-content-between h-100'>
                                    <div className=' d-flex flex-column'>
                                        <h2 className=' purple mb-0 helvetica fw-400 fs-12 lh-19'>TOOL / LIBRARY</h2>
                                        <p className=' mb-0 white helvetica fw-400 fs-19 lh-21 pt-2'>Solana Playground</p>
                                        <p className=' mb-0 white helvetica fw-400 fs-16 lh-25 pt-14'>Easily build, deploy and test Solana programs and smart contracts from a browser IDE.</p>
                                    </div>
                                    <div className=' d-flex gap-2 pt_35 align-items-center'>
                                        <h2 className='cp mb-0 white helvetica fw-400 fs-11 lh-27 '>Learn more</h2>
                                        <img className='cp' src={uparrow} alt="upright-arrow" />
                                    </div>
                                </div>
                                <div className='elipse-purple  position-absolute bottom-0'>
                                    <img className='max-259 w-100' src={elipse1} alt="purple-elipse" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-cards">
                            <div className=' black-card z-1 position-relative w-100 '>
                                <div className=' d-flex flex-column justify-content-between h-100'>
                                    <div className=' d-flex flex-column'>
                                        <h2 className=' purple mb-0 helvetica fw-400 fs-12 lh-19'>TOOL / LIBRARY</h2>
                                        <p className=' mb-0 white helvetica fw-400 fs-19 lh-21 pt-2'>create-solana-dapp</p>
                                        <p className=' mb-0 white helvetica fw-400 fs-16 lh-25 pt-14'>Get up and running fast with Solana dApps, generate a project template in seconds.</p>
                                    </div>
                                    <div className=' d-flex gap-2 pt_35 align-items-center'>
                                        <h2 className='cp mb-0 white helvetica fw-400 fs-11 lh-27 '>Learn more</h2>
                                        <img className='cp' src={uparrow} alt="upright-arrow" />
                                    </div>
                                </div>
                                <div className='elipse-purple  position-absolute bottom-0'>
                                    <img className='max-259 w-100' src={elipse1} alt="purple-elipse" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-cards">
                            <div className=' black-card z-1 position-relative w-100 '>
                                <div className=' d-flex flex-column justify-content-between h-100'>
                                    <div className=' d-flex flex-column'>
                                        <h2 className=' purple mb-0 helvetica fw-400 fs-12 lh-19'>TOOL / LIBRARY</h2>
                                        <p className=' mb-0 white helvetica fw-400 fs-19 lh-21 pt-2'>Anchor Docs</p>
                                        <p className=' mb-0 white helvetica fw-400 fs-16 lh-25 pt-14'>Anchor is a framework for Solana's Sealevel runtime providing several convenient developer tools for writing smart contracts.</p>
                                    </div>
                                    <div className=' d-flex gap-2 pt_10  align-items-center'>
                                        <h2 className='cp mb-0 white helvetica fw-400 fs-11 lh-27 '>Learn more</h2>
                                        <img className='cp' src={uparrow} alt="upright-arrow" />
                                    </div>
                                </div>
                                <div className='elipse-purple  position-absolute bottom-0'>
                                    <img className='max-259 w-100' src={elipse1} alt="purple-elipse" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-cards">
                            <div className=' black-card z-1 position-relative w-100 '>
                                <div className=' d-flex flex-column justify-content-between h-100'>
                                    <div className=' d-flex flex-column'>
                                        <h2 className=' purple mb-0 helvetica fw-400 fs-12 lh-19'>TOOL / LIBRARY</h2>
                                        <p className=' mb-0 white helvetica fw-400 fs-19 lh-21 pt-2'>Solana Program Library</p>
                                        <p className=' mb-0 white helvetica fw-400 fs-16 lh-25 pt-14'>The Solana Program Library (SPL) is a collection of on-chain programs targeting the Sealevel parallel runtime.</p>
                                    </div>
                                    <div className=' d-flex gap-2 pt_35 align-items-center'>
                                        <h2 className='cp mb-0 white helvetica fw-400 fs-11 lh-27 '>Learn more</h2>
                                        <img className='cp' src={uparrow} alt="upright-arrow" />
                                    </div>
                                </div>
                                <div className='elipse-purple  position-absolute bottom-0'>
                                    <img className='max-259 w-100' src={elipse1} alt="purple-elipse" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mt-cards">
                            <div className=' black-card z-1 position-relative w-100 '>
                                <div className=' d-flex flex-column justify-content-between h-100'>
                                    <div className=' d-flex flex-column'>
                                        <h2 className=' purple mb-0 helvetica fw-400 fs-12 lh-19'>TOOL / LIBRARY</h2>
                                        <p className=' mb-0 white helvetica fw-400 fs-19 lh-21 pt-2'>Program Examples</p>
                                        <p className=' mb-0 white helvetica fw-400 fs-16 lh-25 pt-14'>A list of curated examples for a wide range of use cases implemented using on-chain programs.</p>
                                    </div>
                                    <div className=' d-flex gap-2 pt_36 align-items-center'>
                                        <h2 className='cp mb-0 white helvetica fw-400 fs-11 lh-27 '>Learn more</h2>
                                        <img className='cp' src={uparrow} alt="upright-arrow" />
                                    </div>
                                </div>
                                <div className='elipse-purple  position-absolute bottom-0'>
                                    <img className='max-259 w-100' src={elipse1} alt="purple-elipse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default section3