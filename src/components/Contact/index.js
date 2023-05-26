import './index.scss';
import Loader from 'react-loaders';
import  React,{useRef,useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate} from 'react-router-dom';
import {
  faLinkedin,
  faGithub,

} from '@fortawesome/free-brands-svg-icons'

import {
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

  const navigate = useNavigate();
  let val = "Contact me"
  val = val.split('');

  const [letterClass, setLetterClass] = useState('text-animate')

 
  const form = useRef();


  setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 4000)


 const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm( 'service_3ovj65t',
      'template_0spo55r',
      form.current,
      'pqAUAmLOaxvheZNfU')
      .then(
        () => {
              alert('Message successfully sent!')


          navigate('/')
          return null;


        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className='container contact-page' style={{"height":"100%","overflow":"scroll"}}>
        <div className='text-zone'>
          <h1>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={val}
              idx={15}
            />
             </h1>
            <p style={{"fontSize":"15px"}}> I'm a very ambitious Full-stack developer looking for a role in an
              established IT company with the opportunity to work with the latest
              technologies on challenging and diverse projects.
            </p>

            <div className="contact-form">
            <form  ref={form}  onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={(e)=> sendEmail(e.target.value)}
                    
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                <input type="submit"  className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
            </div>


        
        <div className="social_media_icons">
      
          <a
            href="https://in.linkedin.com/in/bijoy-jogi-917972212"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
             
            />
          </a>
        
      
          <a
            href="https://github.com/BijoyJogi123"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
             

            />
          </a>
        
      
          <a href="https://www.fiverr.com/s/vKWPWz" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faBriefcase}
              color="#4d4d4e"
              className="anchor-icon"
              
            />
          </a>
        
      
          </div>

        </div>

        <div className="info-map">
          Bijoy jogi
          <br />
          Siliguri,
          <br />
          Siliguri subhashpally 18<br />
           
          <br />
          <span>bijoyjogi9564482@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[26.726923250709667, 88.39487990023981]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[26.726923250709667, 88.39487990023981]}>
              <Popup>bijoy is here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>



      </div>

      <Loader type='pacman' />
    </>
  )
}

export default Contact
