import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  let val = 'Full Stack developer'
  const nameArray = ['i', 'j', 'o', 'y', ' ', 'j', 'o', 'g', 'i']
  const jobArray = val.split('');



  setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 4000)


  return (
    <>

    <div className="top_scroll">


  

      <div className="container home-page">
        
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            

           
      
           
            <div className='img_with_name'>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
              <img
                className="img-move"
                src={LogoTitle}
                alt="full stack developer"
               
              />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={8}
              />
               </div>
             
              <br/>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={24}
              />
           
          </h1>
          <h2>Full stack devleoper / Web Application,React-native mobile Application / Freelencer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      
        <Logo />
        
        
      </div>

      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
