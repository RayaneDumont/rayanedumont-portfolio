import './styles.scss';
import photo from './photo.jpeg';
import laptopIcon from './laptop-1928.svg'
import { NavLink } from 'react-router-dom';

function AboutMe() {
  return (
    <div className='aboutMe-container'>
      <div className='aboutMe-content'>
        <p className='aboutMe-title'>About Me</p>
        <p className='aboutMe-text'>I am a passionate web developer who has completed training 
        in web and mobile development and is looking for a 16-month alternating position 
        (1 week at school, 2 weeks in a company) followed by 3 months of full-time 
        work in a company. <br/> My goal is to join an innovative and dynamic company to continue 
        learning, develop my technical skills, and work on exciting projects.</p>

        <h2 className='aboutMe-keywords'>skills</h2>
          <p className='aboutMe-text'>Programming languages: HTML, CSS, JavaScript, PHP</p>
          <p className='aboutMe-text'>Design and development of websites and mobile applications</p>
          <p className='aboutMe-text'>Knowledge of frameworks: React, Bootstrap, Laravel, Symfony</p>
          <p className='aboutMe-text'>Management of MySQL databases, Adminer</p>
          <p className='aboutMe-text'>Ability to work in a team, solve problems and learn quickly.</p>

        <h2 className='aboutMe-keywords'>Diploma</h2>
          <p className='aboutMe-text'>BAC STMG -{'>'} Highest qualification obtained at a French upper secondary school (lycée), with a focus on business management</p>
          <p className='aboutMe-text'>CQP APS and SSIAP1 -{'>'} Fire Protection Services: The protection of life and safety of persons and properties from fire, including everything relating to public </p>
          <p className='aboutMe-text'>DWWM (BAC +2) -{'>'} Developer Web and Web Mobile</p>

        <h2 className='aboutMe-keywords'>Professional experiences</h2>
          <p className='aboutMe-text'>Fire Security agent (2016-2023) -{'>'} I have worked at Val d'Europe Shopping Center, 
          where I provided assistance to individuals by responding to medical emergencies and ensuring their safety. 
          My responsibilities included promptly attending to emergency situations, providing first aid when necessary, 
          and coordinating with medical professionals. Additionally, 
          I was responsible for conducting regular inspections of safety equipment to ensure their proper functioning 
          and compliance with safety regulations. My experience at Val d'Europe has enhanced my skills in handling emergency situations 
          and prioritizing the well-being of individuals in need.</p>
          <p className='aboutMe-text'>Final Training project (2023) -{'>'} I collaborated with a team of six developers to create a movie quiz game as a final project during my training, which spanned one month.</p>

        <h2 className='aboutMe-keywords'>Projects</h2>
          <p 
            className='aboutMe-text'
            >
              You can see my individual projects right here
              <NavLink to='/projects'><button className='project-button'>Projects</button></NavLink>
          </p>
          

        <h2 className='aboutMe-keywords'>Social medias</h2>
          <div className="social-links">
            <NavLink to="https://www.linkedin.com/in/rayane-dumont/" target='_blank' id="linkedin" className="social-btn flex-center">
              <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg><span>rayane-dumont</span>
            </NavLink>
            <NavLink to='https://github.com/RayaneDumont' target='_blank' id="github" className="social-btn flex-center">
              <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg><span>RayaneDumont</span>
            </NavLink>
          </div>

      </div>
      <div className="flip-card-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="laptopIcon" src={laptopIcon}/>
              <p className="title">Identity Card</p>
              <p>Hover Me</p>
            </div>
            <div className="flip-card-back">
                <img className="photo" src={photo}/>
                <p className="title">Developper Web front-end</p>
                <p className='adress'>27 years old</p>
                <p className='age'>From Bonnières-sur-seine</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;