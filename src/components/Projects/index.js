import React from 'react'
import Netflix from '../../assets/images/Netflix.jpeg'
import News from '../../assets/images/news.jpeg'
import Notes from '../../assets/images/Notes.jpeg'
import Hotel from '../../assets/images/Hotel.jpeg'
import instagram from '../../assets/images/instagram.png'
import portfolio from '../../assets/images/portfolio.png'
import './index.scss'

import { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
function Projects() {
    const [letterClass, setLetterClass] = useState('text-animate')

    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)

    return (
        <>
            <div className="container project-page">

                <h1>
                    <AnimatedLetters
                        className="boom_letter"
                        letterClass={letterClass}
                        strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                        idx={15}
                    />
                </h1>
                <hr style={{ "width": "500px" }} />
            </div>

            <div className="container our-services">

                <div className="row">
                    <div className="col-sm-4">
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="front">
                                    <img className="lazyload" src={Netflix} alt="Avatar" />
                                    <h3 >NETFLIX-CLONE</h3>
                                </div>
                                <div className="back" >
                                    <h5>
                                        <AnimatedLetters
                                            letterClass={letterClass}
                                            strArray={['N', 'e', 't', 'f', 'l', 'i', 'x', '-', 'c', 'l', 'o', 'n', 'e']}
                                            idx={13} />
                                    </h5>
                                    <p>This is a netflix clone, made with Next-js , Css, firebase and IMDB api with Google authentication system
                                    </p>
                                    <div className='projects-button'>
                                        <Link to="https://netflix-clone-b0e2d.web.app/" className="flat-button">
                                            Demo
                                        </Link>
                                        <Link to="https://github.com/BijoyJogi123/Netflix-Clone" className="flat-button">
                                            Code
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="front" >
                                    <img className="lazyload" src={News} alt="Avatar" />
                                    <h3>Get-Notify</h3>
                                </div>
                                <div className="back">
                                    <h5>
                                        <AnimatedLetters
                                            letterClass={letterClass}
                                            strArray={['G', 'e', 't', '-', 'N', 'o', 't', 'i', 'f', 'y']}
                                            idx={10} />
                                    </h5>
                                    <p>Get-Notify is a News application, here you can see varity of latest news, made with React js, tailwind css React-router-dom </p>
                                    <div className='projects-button'>
                                        <Link to="https://github.com/BijoyJogi123/Get-notify" className="flat-button">
                                            Demo
                                        </Link>
                                        <Link to="https://github.com/BijoyJogi123/Get-notify" className="flat-button">
                                            Code
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="front" >
                                    <img className="lazyload" src={Notes} alt="Avatar" />
                                    <h3>Note-Book Application</h3>
                                </div>
                                <div className="back" >
                                    <h5><AnimatedLetters
                                        letterClass={letterClass}
                                        strArray={['N', 'o', 't', 'e', '-', 'B', 'o', 'o', 'k']}
                                        idx={16} /></h5>
                                    <p>It is a Note-book application where user can make account and  keep their personal notes, here for Frontend React js ,tailwind css and for Backend Node js with CRUD and Mongoodb</p>
                                    <div className='projects-button'>
                                        <Link to="https://github.com/BijoyJogi123/Note-book" className="flat-button">
                                            Demo
                                        </Link>
                                        <Link to="https://github.com/BijoyJogi123/Note-book" className="flat-button">
                                            Code
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="front" >
                                    <img className="lazyload" src={instagram} alt="Avatar" />
                                    <h3>Instagram-Clone</h3>
                                </div>
                                <div className="back" >
                                    <h5><AnimatedLetters
                                        letterClass={letterClass}
                                        strArray={['I', 'n', 's', 't', 'a', 'g', 'a', 'm', 'e']}
                                        idx={16} /></h5>
                                    <p>It is a instagram clone where all the features are avilable same as instagram, and user can upload photo change profile picture, like other photos, get follow or send follow request, here i used React js, Tailwind css, firebase , Mongoodb, Redux</p>
                                    <div className='projects-button'>
                                        <Link to="/projects" className="flat-button">
                                            Demo
                                        </Link>
                                        <Link to="/projects" className="flat-button">
                                            Code
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="front" >
                                    <img className="lazyload" src={Hotel} alt="Avatar" />
                                    <h3>Easy-Hotels</h3>
                                </div>
                                <div className="back" >
                                    <h5><AnimatedLetters
                                        letterClass={letterClass}
                                        strArray={['E', 'a', 's', 'y', '-', 'H', 'o', 't', 'e', 'l', 's']}
                                        idx={18} /></h5>
                                    <p>This is my first Django basic project based on Hotel application, where i used Bootstrap for styling</p>
                                    <div className='projects-button'>
                                        <Link to="https://github.com/BijoyJogi123/Easy-Hotel" className="flat-button">
                                            Demo
                                        </Link>
                                        <Link to="https://github.com/BijoyJogi123/Easy-Hotel" className="flat-button">
                                            Code
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="front" >
                                    <img className="lazyload" src={portfolio} alt="Avatar" />
                                    <h3>Personal portfolio</h3>
                                </div>
                                <div className="back" >
                                    <h5><AnimatedLetters
                                        letterClass={letterClass}
                                        strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                                        idx={16} /></h5>
                                    <p>it is my portfolio made with React js and for Styling i used Sass and animate css.</p>
                                    <div className='projects-button'>
                                        <Link to="https://github.com/BijoyJogi123/Personal-portfolio" className="flat-button">
                                            Demo
                                        </Link>
                                        <Link to="https://github.com/BijoyJogi123/Personal-portfolio" className="flat-button">
                                            Code
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Projects