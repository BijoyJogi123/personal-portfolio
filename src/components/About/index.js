import './index.scss';
import { useState } from 'react';
import my_img from '../../assets/images/logo4.png';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

function About() {
  const [letterClass, setLetterClass] = useState('text-animate');

  setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 3000);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p style={{ fontSize: '15px', fontWeight: 'bold' }}>
            As a full stack developer, and currently, I am doing a bachelor's in computer science. I am passionate about
            crafting exceptional digital experiences. With expertise in both front-end and back-end technologies, I
            create dynamic web applications that exceed client expectations. By actively listening to client needs and
            employing modern design principles, I deliver intuitive and engaging interfaces. With a strong understanding
            of database management and optimization, I build efficient and scalable systems. My diverse portfolio
            showcases successful collaborations with a variety of clients, from startups to established businesses.
            Choose me as your dedicated and reliable full stack developer, and together, we will bring your vision to
            life.
          </p>
          <p style={{ fontSize: '15px', fontWeight: 'bold' }} align="LEFT">
            I'm quite confident, naturally curious, and perpetually working on improving my skills one design problem at
            a time.
          </p>
          <p style={{ fontSize: '15px', fontWeight: 'bold' }}>
            If I need to define myself in one sentence, I am currently a student and working in a full stack role. I
            love spending time with technologies, I'm an artist by hobby, and I love to chill out with friends!
          </p>
        </div>
        <div className="image-container">
          <img src={my_img} alt="" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default About;
