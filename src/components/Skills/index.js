import React from 'react'
import java from '../../assets/images/java.png'
import python from '../../assets/images/python.png'
import bash from '../../assets/images/bash.png'
import C from '../../assets/images/C_lang.png'
import react from '../../assets/images/react.png'
import react_native from '../../assets/images/native.png'
import redux from '../../assets/images/Redux.png'
import tailwindcss from '../../assets/images/tailwind.png'
import node from '../../assets/images/node.png'
import django from '../../assets/images/django.png'
import bootstrap from '../../assets/images/bootstrap.png'
import firebase from '../../assets/images/firebaes.png'
import git from '../../assets/images/Git.png'
import css from '../../assets/images/css.png'
import javascript from '../../assets/images/javascript.png'
import mongodb from '../../assets/images/mongodb.png'
import html_5 from '../../assets/images/html_5.png'

import styles from './index.module.scss';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
function Skills() {


    const [letterClass, setLetterClass] = useState('text-animate')

    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)



    return (
        <>
            <div className={styles.boom}>

                <div className={styles.inner}>

                    <div className={styles.header}>
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']}
                                idx={9}
                            />
                        </h1>

                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.skills_box}>

                        <div className={styles.skills_title}>
                            <div className={styles.img}>
                                <img src={java} alt="" />
                            </div>

                        </div>
                        <h3><AnimatedLetters
                            letterClass={letterClass}
                            strArray={['J', 'a', 'v', 'a']}
                            idx={4}
                        /></h3>
                        <p>With a strong command of Java, Leveraging the power of this versatile programming language, I create scalable and reliable solutions. From designing object-oriented architectures to implementing complex algorithms, my Java skills enable me to tackle diverse challenges. I prioritize clean and readable code, ensuring maintainability and ease of collaboration.</p>
                    </div>

                    <div className={styles.skills_box}>

                        <div className={styles.skills_title}>
                            <div className={styles.img}>
                                <img src={python} alt="" />
                            </div>

                        </div>
                        <h3><AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'y', 't', 'h', 'o', 'n']}
                            idx={6}
                        /></h3>
                        <p>As a Python developer, I leverage the Django framework to create dynamic and feature-rich web applications. With Django's powerful capabilities, I build secure, scalable, and high-performing websites. By utilizing Django's built-in functionalities like ORM (Object-Relational Mapping) and templating system, I streamline the development process and ensure efficient database management. Additionally. </p>
                    </div>


                    <div className={styles.skills_box}>

                        <div className={styles.skills_title}>
                            <div className={styles.img}>
                                <img src={html_5} alt="" />
                            </div>

                        </div>
                        <h3><AnimatedLetters
                            letterClass={letterClass}
                            strArray={['H', 'T', 'M', 'L', ' ', '5']}
                            idx={6}
                        /></h3>
                        <p>With a solid grasp of HTML, I possess the skills to develop engaging and well-structured web pages. By leveraging HTML5 and adhering to web standards, I create responsive and accessible designs that adapt seamlessly across devices. I prioritize clean and efficient code, enabling fast loading times and optimal performance.</p>
                    </div>

                    <div className={styles.skills_box}>

                        <div className={styles.skills_title}>
                            <div className={styles.img}>
                                <img src={css} alt="" />
                            </div>
                        </div>
                        <h3><AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'S', 'S']}
                            idx={3}
                        /></h3>
                        <p>
                            Although CSS may not be my primary focus, I have a solid understanding of the language and can effectively style and enhance web pages. While my expertise lies primarily in other areas, I am proficient in CSS and can create visually appealing and responsive designs. By leveraging CSS properties, selectors, and media queries, I ensure that your website looks polished and functions seamlessly across different devices.</p>
                    </div>

                    <div className={styles.skills_box}>

                        <div className={styles.skills_title}>
                            <div className={styles.img}>
                                <img src={javascript} alt="" />
                            </div>
                        </div>
                        <h3><AnimatedLetters
                            letterClass={letterClass}
                            strArray={['J', 'a', 'v', 'a','s', 'c', 'r', 'i', 'p', 't']}
                            idx={10}
                        /></h3>
                        <p>
                            As a highly skilled JavaScript developer with a recognized certification, I bring an exceptional level of expertise to every project. With a deep understanding of JavaScript's core concepts and its vast ecosystem of libraries and frameworks, I create powerful and interactive web applications. Whether it's developing complex algorithms, implementing seamless user interactions.</p>
                    </div>

                    <div className={styles.skills_box}>

                        <div className={styles.skills_title}>
                            <div className={styles.img}>
                                <img src={react} alt="" />
                            </div>
                        </div>
                        <h3><AnimatedLetters
                            letterClass={letterClass}
                            strArray={['R', 'e', 'a', 'c', 't']}
                            idx={5}
                        /></h3>
                        <p>As a proficient React developer, I specialize in crafting exceptional front-end experiences with this powerful JavaScript library. With a deep understanding of React's component-based architecture and virtual DOM, I create highly interactive and responsive user interfaces. Leveraging the declarative nature of React, I efficiently manage state and seamlessly update UI components.</p>
                    </div>
                    <div className={styles.skills_box}>

                        <div className={styles.skills_title}>
                            <div className={styles.img}>
                                <img src={react_native} alt="" />
                            </div>
                        </div>
                        <h3><AnimatedLetters
                            letterClass={letterClass}
                            strArray={['R', 'e', 'a', 'c', 't', 'n', 'a', 't', 'i', 'v', 'e']}
                            idx={11}
                        /></h3>
                        <p>Currently, I am in the learning phase for React Native, eager to expand my skill set and gain practical experience in developing cross-platform mobile applications.  I am actively pursuing learning resources and investing time in honing my abilities. With a solid foundation in JavaScript and React, I am quickly acquiring the knowledge and proficiency required to build robust and efficient mobile apps</p>
                    </div>
                    <div className={styles.skills_box}>

                        <div className={styles.skills_title}>
                            <div className={styles.img}>
                                <img src={git} alt="" />
                            </div>
                        </div>
                        <h3><AnimatedLetters
                            letterClass={letterClass}
                            strArray={['G','i','t']}
                            idx={3}
                        /></h3>
                        <p>
                            As an adept Git user, I effectively utilize version control to manage and collaborate on projects. With Git, I ensure code integrity, traceability, and facilitate seamless teamwork. I am proficient in Git commands for initializing repositories, committing changes, branching, merging, and conflict resolution. Trust my Git expertise to maintain organized and controlled development environments for efficient collaboration and code versioning.</p>
                    </div>
                    <div className={styles.skills_box}>

                        <div className={styles.skills_title}>
                            <div className={styles.img}>
                                <img src={bootstrap} alt="" />
                            </div>
                        </div>
                        <h3><AnimatedLetters
                            letterClass={letterClass}
                            strArray={['B', 'o', 'o', 't', 's', 't', 'r', 'a', 'p']}
                            idx={9}
                        /></h3>
                        <p>I have a solid understanding of Bootstrap, a popular CSS framework, enabling me to create responsive and visually appealing websites efficiently. By leveraging Bootstrap's pre-built components and grid system, I streamline the development process and ensure consistent styling across different devices.  </p>
                    </div>
                    <div className={styles.skills_box}>

                        <div className={styles.skills_title}>
                            <div className={styles.img}>
                                <img src={tailwindcss} alt="" />
                            </div>
                        </div>
                        <h3><AnimatedLetters
                            letterClass={letterClass}
                            strArray={['T', 'a', 'i', 'l', 'w', 'i', 'n', 'd']}
                            idx={8}
                        /></h3>
                        <p>
                            Tailwind CSS is my preferred choice for styling websites. With its utility-first approach, I can efficiently apply pre-defined classes to achieve customized designs. The extensive range of utility classes for spacing, typography, and colors allows for quick and flexible styling. Tailwind's scalability, flexibility, and comprehensive documentation make it an ideal solution for creating visually appealing and responsive interfaces.</p>
                    </div>
                    <div className={styles.skills_box}>

                        <div className={styles.skills_title}>
                            <div className={styles.img}>
                                <img src={bash} alt="" />
                            </div>
                        </div>
                        <h3><AnimatedLetters
                            letterClass={letterClass}
                            strArray={['B', 'a', 's', 'h',]}
                            idx={13}
                        /></h3>
                        <p>With proficiency in Bash scripting, I automate tasks and streamline workflows. By leveraging Bash's scripting capabilities, I create efficient scripts to execute commands, process data, and perform system administration tasks. From simple one-liners to complex scripts, </p>
                    </div>
                    <div className={styles.skills_box}>

                        <div className={styles.skills_title}>
                            <div className={styles.img}>
                                <img src={C} alt="" />
                            </div>
                        </div>
                        <h3><AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', ' ', 'L', 'a', 'n', 'g', 'u', 'a', 'g', 'e']}
                            idx={10}
                        /></h3>
                        <p>As an experienced C programmer, I am proficient in writing efficient and reliable code. With a deep understanding of the C language, I develop robust applications that leverage its low-level capabilities. By utilizing C's syntax and features, such as pointers, memory management, and structured programming</p>
                    </div>
                    <div className={styles.skills_box}>

                        <div className={styles.skills_title}>
                            <div className={styles.img}>
                                <img src={redux} alt="" />
                            </div>
                        </div>
                        <h3><AnimatedLetters
                            letterClass={letterClass}
                            strArray={['R', 'e', 'd', 'u', 'x']}
                            idx={5}
                        /></h3>
                        <p>Proficient in Redux, I manage state effectively, ensuring predictable data flow. With actions, reducers, and the Redux store, I facilitate component communication and enable seamless state updates. Redux's middleware and dev tools enhance debugging and handle asynchronous operations.</p>
                    </div>
                    <div className={styles.skills_box}>

                        <div className={styles.skills_title}>
                            <div className={styles.img}>
                                <img src={node} alt="" />
                            </div>
                        </div>
                        <h3><AnimatedLetters
                            letterClass={letterClass}
                            strArray={['N', 'o', 'd', 'e', ' ', 'j', 's',]}
                            idx={7}
                        /></h3>
                        <p>As a Node.js enthusiast, I primarily utilize it for backend development. With its event-driven, non-blocking architecture, I create high-performance and scalable web applications. Leveraging Node.js' vast ecosystem of modules and libraries, I efficiently handle server-side operations, data management, and API integrations. By utilizing frameworks like Express.js, I build robust and RESTful APIs. </p>
                    </div>
                    <div className={styles.skills_box}>

                        <div className={styles.skills_title}>
                            <div className={styles.img}>
                                <img src={django} alt="" />
                            </div>
                        </div>
                        <h3><AnimatedLetters
                            letterClass={letterClass}
                            strArray={['D', 'j', 'a', 'n', 'g', 'o']}
                            idx={6}
                        /></h3>
                        <p>As a Django enthusiast, I specialize in utilizing this powerful Python framework for web development. With Django's batteries-included approach, I create robust and scalable web applications efficiently. Leveraging Django's built-in ORM, authentication system, and templating engine, I streamline the development process and ensure secure and maintainable code.</p>
                    </div>
                    <div className={styles.skills_box}>

                        <div className={styles.skills_title}>
                            <div className={styles.img}>
                                <img src={firebase} alt="" />
                            </div>
                        </div>
                        <h3><AnimatedLetters
                            letterClass={letterClass}
                            strArray={['F', 'i', 'r', 'e', 'b', 'a', 's', 'e']}
                            idx={8}
                        /></h3>
                        <p>Though I'm relatively new to Firebase, I have successfully completed multiple projects from scratch using this powerful platform. With Firebase, I leverage its wide range of services, including real-time database, authentication, hosting, and cloud functions. By integrating Firebase into my projects, I ensure seamless data synchronization, user management, and efficient cloud-based operations. </p>
                    </div>
                    <div className={styles.skills_box}>

                        <div className={styles.skills_title}>
                            <div className={styles.img}>
                                <img src={mongodb} alt="" />
                            </div>
                        </div>
                        <h3><AnimatedLetters
                            letterClass={letterClass}
                            strArray={['M', 'o', 'n', 'g', 'o', 'd', 'b']}
                            idx={7}
                        /></h3>
                        <p>MongoDB is my primary choice for data storage and management in my projects. With its flexible document-based model, I can easily store and retrieve data in a JSON-like format. By leveraging MongoDB's scalability and high-performance capabilities, I ensure efficient handling of large datasets. With its powerful query language and indexing features, I optimize data retrieval and enable fast and precise searches. </p>
                    </div>
                </div>
               
            </div>

            <Loader type='pacman' />
        </>

    )
}

export default Skills