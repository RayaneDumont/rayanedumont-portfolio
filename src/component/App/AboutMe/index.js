import './styles.scss';
import photo from './photo.jpeg';
import laptopIcon from './laptop-1928.svg'

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

        <h2 className='aboutMe-keywords'>Projects</h2>
          <p className='aboutMe-text'>You can see my individual projects *here*</p>

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