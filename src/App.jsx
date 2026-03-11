import React, { useRef, useState } from 'react';
import './App.css'

import chatbot from './chatbot.png';
import ontheway from './ontheway.png'
import aiFitnessTracker from './aiFitnessTracker.png'
import dreamart from './dreamart.jpg';
import certificate from './certificate.jpg';
import prof from './prof1.jpg';
import CV from './Nazar_Pashayev_Software_Engineer_CV_2026.pdf'
// import emailjs from '@emailjs/browser'
// import axios from 'axios'



/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return (
    <div className={`menu-container ${props.showMenu}`}>
      <div className="overlay" />
      <div className="menu-items">
        <ul>
          <li>
            <a href="#welcome-section" className="hover-target" onClick={props.toggleMenu}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" className="hover-target" onClick={props.toggleMenu}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#projects" className="hover-target" onClick={props.toggleMenu}>
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#contact" className="hover-target" onClick={props.toggleMenu}>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand hover-target">
            port
            <strong>folio</strong>
          </p>
          <a
            onClick={props.toggleMenu}
            className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button hover-target'}
          >
            <span />
          </a>
        </div>

      </nav>
    </React.Fragment>
  );
};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line">Hello, I am</span>
          <span className="line">Nazar Pashayev</span>

        </h1>
        <div className="buttons">

          <button className="cta hover-target cv" type="submit" onClick={() => window.open(CV)}>
            Resume <i className="fa fa-download"></i></button>

          {/* <a method="get" href="/" download={CV} target="_blank">
            download
          </a> */}
          <a href="#contact" className="cta hover-target">
            get in touch
          </a>

        </div>
      </div>
    </header>
  );
};


/***********************
  About Component
 ***********************/

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>About</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">My name is Nazar.</h4>
            <p>
              I have received my master degree of computer science at the University of Konstanz, Germany in 2021 and
              currently based in Germany.
            </p>
            <p>
              I am working as a Technical Consultant for a global IT company in Germany. I always have passion to learn
              things that are required in order to solve tomorrow's productivity problems in this software engineering area. Especially motivated to
              move towards challenges where analytical thinking is crucial thing to find the solution.
            </p>

          </div>
          <div className="desc">
            <img src={prof}></img>
          </div>
          <div className="title">
            <h3>What I am able to do?</h3>
            <p className="separator" />
            <p>
              I have 6+ years of programming and application development experience.
              Full Stack Developer with a strong focus on frontend development.
              Compatible team player throughout the complete project cycle,
              testing, and final implementation. Excellent communication and
              interpersonal skills. Quickly learns and masters new technologies.
              Top competencies are mastering Frontend technologies, alongside
              passionate about Backend, DevOps and Cloud computing technologies.
              An Angular and Nx monorepo enthusiast.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};


const Cursor = props => {
  return (
    <div>
      <div className='cursor' id="cursor"></div>
      <div className='cursor2' id="cursor2"></div>
      <div className='cursor3' id="cursor3"></div>
    </div>
  );

};




/***********************
  Project Component
 ***********************/

const Project = props => {
  return (
    <div className="project">
      {
        props.title === 'OnRoad' ? <iframe className='iframe' src='https://onroad.netlify.app/'></iframe> :
          <a className="project-link" target="_blank" rel="noopener noreferrer">
            <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} /></a>
      }
      {/* <a className="project-link" target="_blank" rel="noopener noreferrer">
        { props.title === 'OnRoad' ? <iframe className='iframe' src='https://onroad.netlify.app/'></iframe> 
        : <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />}
      </a> */}
      <div className="project-details">
        <div className="project-tile">

          {props.title}{' '}
        </div>
        {props.children}

      </div>
    </div>
  );
};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">Job Experience</h3>
          <p className="separator" />

        </div>
        <div className="projects-wrapper">
          <Project
            title="AI Fitness Tracker"
            img={aiFitnessTracker}
          >
            <ul className='techs'>
              <li>
                <small>
                  <strong>Frontend: </strong> Angular,  TensorFlow.js, Chart.js
                </small>
              </li>
            </ul>
            <p>
              An AI-powered fitness trainer in the browser that detects body poses in real time using TensorFlow.js MoveNet and counts exercise repetitions while giving AI-based form correction feedback. Link for demo:
              <a href='https://ai-fitnesstracker.netlify.app/' target="_blank"> https://ai-fitnesstracker.netlify.app/</a>
            </p>
          </Project>
          <Project
            title="OnRoad"
            img={ontheway}
            url="https://onroad.netlify.app/"
          >
            <ul className='techs'>
              <li>
                <small>
                  <strong>Frontend: </strong> Angular
                </small>
              </li>
              <li>
                <small>
                  <strong>Backend: </strong> Express JS
                </small>
              </li>
              <li>
                <small>
                  <strong>Database: </strong> Amazon RDS service for PostgreSQL
                </small>
              </li>
            </ul>
            <p>
              This is my personal project. I developed this website in order to make it easier for people to find cheaper way to transport
              form A to point B. The taget audience was defined for my home country for now. Because of that reason, the website
              language appears in azerbaijani. The project is still in demo version and improvement phase. Link for demo:
              <a href='https://onroad.netlify.app/' target="_blank"> https://onroad.netlify.app/</a>
            </p>
          </Project>
          <Project
            title="Chatbot for mobile intervention studies."
            img={chatbot}
          >
            <small>
              Built using Android Studio, Java, Node, RoomDB, Google Dialogflow, Google Fit Api.
            </small>
            <p>
              This is my master project. I built a chatbot application for Android OS, which mimics a classical mobile app.
              My goal was to assess effectiveness and usability rate of a chatbot version UI over a traditional GUI.
              <a href="https://www.youtube.com/watch?v=nre8LhwYlnc&ab_channel=NazarPashayev" target="_blank"> App Demo</a>
            </p>
          </Project>
          <Project
            title="Frontend developer"
            img={dreamart}
          >
            <small>
              Worked more than one year.
            </small>
            <p>Working on frontend side of a start-up project website</p>
            <p>Collaboration with UX/UI designers</p>
            <p>Participating on discussions of business logic solutions</p>
          </Project>
          <Project
            title="IT Support Technician"
            img={certificate}
          >
            <small>
              One year experience.
            </small>
            <p>
              Providing technical assistance and support related to computer systems, hardware, and software.
            </p>
            <p>
              Responsible for the day-to-day IT requirements of the partnership companies that we were
              working with such as user management, troubleshooting, help and advice
            </p>
          </Project>

        </div>
      </div>
    </section>
  );
};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  const form = useRef();
  const [alertShowing, setAlertShowing] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zzil70j', 'template_zib3oll', form.current, 'user_8Q2g78ciZ1nOQjpMQG88m')
      .then((result) => {
        console.log(result)
        setAlertShowing(!alertShowing)
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">

            <p className="title">
              Want to contact me?
            </p>

            <p className="separator" />
            <h1 className="cnt">Phone: +49 1573 7917399</h1>

            <h1 className="cnt">Email: nazar.pashayev@gmail.com</h1>
            <h1 className="cont">...or send me an email direct from here</h1>

          </div>
        </div>
        <form ref={form} id="contact-form" action="#" onSubmit={sendEmail}>

          <input placeholder="Name" name="name" type="text" required />
          {/* <input placeholder="Subject" name="subject" type="text" required /> */}
          <input placeholder="Email" name="email" type="email" required />
          <textarea placeholder="Message" type="text" name="message" />
          <input className="button" id="submit" value="Send" type="submit" />
        </form>
      </div>
      <div className={alertShowing ? "show" : "alertBox"}>Thanks for your email.</div>
    </section>
  );
};



const SocialLinks = props => {
  return (
    <div className="social">
      <a
        href="https://www.facebook.com/nazar.pshyev/"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to Facebook profile"
      >
        {' '}
        <i className="fa fa-facebook"></i>
      </a>
      <a
        id="profile-link"
        href="https://github.com/Nazar-Pa"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to GitHub Profile"
      >
        {' '}
        <i className="fa fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/nazar-pashayev/"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to Linkedin Profile"
      >
        {' '}
        <i className="fa fa-linkedin" />
      </a>
      <a
        href="https://www.instagram.com/nazarpashayev/"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to Instagram Profile"
      >
        {' '}
        <i className="fa fa-instagram" />
      </a>
    </div>
  );
};




/***********************
  Main Component
 ***********************/

class App extends React.Component {
  state = {
    menuState: false
  };


  // componentDidMount = () => {
  //   const getData = async () => {
  //     const dataFromApi = await this.updateVisitor()
  //   }
  //   getData()
  // }

  // updateVisitor = async () => {
  //   let res;
  //   await axios.get('https://us-central1-dialogflow-chatapp-b3033.cloudfunctions.net/updateVisitor')
  //     .then(data => {
  //       res = data.data;
  //     })
  //     .catch(error => {
  //       console.log("update error: ", error);
  //     })
  //   return res
  // }

  toggleMenu = () => {
    this.setState(state => ({
      menuState: !state.menuState
        ? 'active'
        : state.menuState === 'deactive'
          ? 'active'
          : 'deactive'
    }));
  };

  render() {

    return (
      <React.Fragment>
        <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Cursor />
        <SocialLinks />
      </React.Fragment>
    );
  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');

    const t = document.getElementById("cursor");
    const e = document.getElementById("cursor2");
    const i = document.getElementById("cursor3");
    //const r = document.querySelectorAll(".hover-target")
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility = header.style.visibility === 'hidden' && 'visible';
      else header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
      else navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          });
        }
      }
    })();


    document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {

      t.style.left = `${n.clientX}px`;
      t.style.top = `${n.clientY}px`;
      e.style.left = `${n.clientX}px`;
      e.style.top = `${n.clientY}px`;
      i.style.left = `${n.clientX}px`;
      i.style.top = `${n.clientY}px`;
    });

    function n(t) {
      e.classList.add("hover");
      i.classList.add("hover");
    }
    function s(t) {
      e.classList.remove("hover");
      i.classList.remove("hover");
    }
    s();

    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
      o(r[a])
    }
    function o(t) {
      t.addEventListener("mouseover", n);
      t.addEventListener("mouseout", s);
    }
  }
}



export default App
