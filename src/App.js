import React, { Component } from 'react';
import './App.css';
import {smoothScroll} from './util/smoothScroll.js';

class App extends Component {
// Get the navbar
  constructor() {
    super();
    this.state = {
      stickNav: true,
      width: 0, 
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount(){
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener("scroll", this.handleWindowScroll);
  }
  componentWillUnmount(){
    this.updateWindowDimensions();
    window.removeEventListener("scroll", this.handleWindowScroll);
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  //scroll handlers
  // handleWindowScroll= (e)=> {
  //   if(!this.navBar){
  //     return;
  //   }
  //   const pageYOffset = window.pageYOffset;
   
    //  if(pageYOffset < 1){
    //    this.setState({
    //      atHome: true,
    //      atAbout: false,
    //      atWork: false,
    //      atExp: false,
    //      stickNav: false,
    //    });
    //  }
    //  else if (pageYOffset > 0){
    //    this.setState({stickNav: true, atHome: false});
    //  }
     //console.log(window.pageYOffset);
  // }
// tabs onClick handles

  aboutMeOnClick(){
      //console.log(targetElement.offsetParent.offsetTop);
      //window.scrollTo(0,targetElement.offsetParent.offsetTop);
      smoothScroll.scrollTo('aboutMe', null);
  }
  expOnClick(){
      //console.log(targetElement.offsetTop);
      smoothScroll.scrollTo('exp', null);
  }
  projectOnClick(){
      //console.log(targetElement.offsetParent.offsetTop);
      smoothScroll.scrollTo('projects', null);
  }

  getNavBarStyle(){
    return !this.state.stickNav ?  'App-card' : 'App-cardSticky';

  }
  setNameStyle(){
    return !this.state.stickNav ?  'name' : 'nameSticky' ;
  }

  setTagline(){
    return !this.state.stickNav ? 'tagline' : 'taglineSticky' ;
  }
  contactButton(){
    window.location.href='https://www.linkedin.com/in/bo-yu-09091514b/';
  }


  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
        <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet"/>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
       

        <div className={this.getNavBarStyle()} ref={ref=>this.navBar=ref}>
          <div className="homeContainer">
            <div className={this.setNameStyle()}>Bo Yu</div>
            <div className={this.setTagline()}>UX Engineer && Software Developer </div>
          <span className='tabSticky'>
           <ul>
            <li className="tab" onClick={this.aboutMeOnClick}>
              <div className="shiftLeft">
                <div className="initText">//About</div>
              </div>
              <div className="shiftRight">
                <div className="addtext">Me</div>
              </div>
            </li>
        
            <li className="tab" onClick={this.expOnClick}>
            <div className="shiftLeft exp">
                <div className="initText">//Exp</div>
              </div>
              <div className="shiftRight erience">
                <div className="addtext">--.erience</div>
              </div>
            </li>

            <li className="tab" onClick={this.projectOnClick}>
              <div className="shiftLeft">
                <div className="initText">//Fun</div>
              </div>
              <div className="shiftRight">
                <div className="addtext">----.Projects</div>
              </div>
            </li>

           </ul>
           </span>
           </div>

              <div id="aboutMe" className="aboutPage">
                <div className="aboutContainer">
                <div className="AboutIntro-text">
                  <div className="aboutBackdrop">
                    About
                  </div>
                  <h>Me</h>
                  I am Bo Yu, a 24-year-old Canadian 
                  <strong> UX Engineer and Software Developer. </strong>
                    I love making things that people interact with and 
                  I am always learning something new 
                  <strong> (I am currently learning about UX in games). </strong>
                  I like to <strong> overcome </strong> design challenges,
                  <strong> create </strong> intelligent user experiences and software
                  with strong integrity. 
                  <br/>
                  Nowadays when I have free time, I like to make silly games. And 
                  Once a year I travel the world to <strong> experience and learn </strong> 
                  about new cultures.
                  <h href="empty">View My Resume</h>
                </div>
                  <div className="About-skills">
                    <h>My Skills</h>

                    <div className="skill-App a1">
                      <img src="img/html_icon.svg" alt="html"/>
                    </div>

                    <div className="skill-App a2">
                      <img src="img/css_icon.svg" alt="css"/>
                    </div>

                    <div className="skill-App a3">
                      <img src="img/js_icon.svg" alt="javascript"/>
                    </div>

                    <div className="skill-App a4">
                      <img src="img/es3_icon.svg" alt="es3"/>
                    </div>

                    <div className="skill-App a5">
                      <img src="img/csharp_icon.svg" alt="C#"/>
                    </div>

                    <div className="skill-App a6">
                      <img src="img/c++_icon.svg" alt="c++"/>
                    </div>

                    <div className="skill-App a7">
                      <img src="img/java_icon.svg" alt="java"/>
                    </div>

                    <div className="skill-App a8">
                      <img src="img/python_icon.svg" alt="python"/>
                    </div>

                    <div className="skill-App a9">
                      <img src="img/mdb_icon.svg" alt="mdb"/>
                    </div>

                    <div className="skill-App a10">
                      <img src="img/mysql_icon.svg" alt="mysql"/>
                    </div>

                    <div className="skill-App a11">
                      <img src="img/react_icon.svg" alt="react native"/>
                    </div>

                    <div className="skill-App a12">
                      <img src="img/vs_icon.svg" alt="visual studio"/>
                    </div>

                    <div className="skill-App a13">
                      <img src="img/ai_icon.svg" alt="adobe illustrator"/>
                    </div>

                    <div className="skill-App a14">
                      <img src="img/id_icon.svg" alt="adobe indesign"/>
                    </div>

                    <div className="skill-App a15">
                      <img src="img/an_icon.svg" alt="adobe animate"/>
                    </div>

                    <div className="skill-App a16">
                      <img src="img/ps_icon.svg" alt="adobe photoshop"/>
                    </div>

                    <div className="skill-App a17">
                      <img src="img/blender_icon.svg" alt="blender"/>
                    </div>

                    <div className="skill-App a18">
                      <img src="img/unity_icon.svg" alt="unity"/>
                    </div>

                    <div className="skill-App a19">
                    <img src="img/github_icon.svg" alt="github"/>
                    </div>

                    <div className="skill-App a20">
                    <img src="img/bitbucket_icon.svg" alt="bitbucket"/>
                    </div>

                  </div>
                  </div>
                  </div>

                  <div id="exp"className="boExperienceContainer">
                  <div className="boExperience">
                    <div className="boExperienceHeader">Experience</div>
                    <div className="boExperienceFill"> </div>
                    
                    <div className="experienceBlock">
                      <div className="title">Teaching Assistant</div>
                      <div className="timelineContainer">
                        <div className="timeline current">Present 2mos</div>
                      </div>
                      <div className="location">University of Ontario Institute of Technology, Oshawa</div>
                      <p>
                      As a math and programming TA, I teach students how the two subjects are relevent
                      and how they are applied in real world applications. I also help design tutorial materials
                      along side the professors. Occasionally I would also help professors with
                      marking assignments and exams, I would also invigilate during exam season.
                      </p>
                    </div>

                    <div className="experienceBlock">
                      <div className="title">UX Engineer</div>
                      <div className="timelineContainer">
                        <div className="timeline current">Present 2.8yrs</div>
                      </div>
                      <div className="location">Moonwalk Studios, Oshawa</div>
                      <p>
                      I lead the development of gameplay user experience in many projects both in VR and traditional space, 
                      as well as conducting user research and analysing test data. I am also responsible for designing and implementing 
                      diegetic UI focusing on ease of use, and seamless tutotialization. When I am not on a project, I would join our research team. 
                      We research and test existing VR user experience methods, then develop new methods to overcome problems, 
                      and improve user comfort. 
                      </p>
                    </div>

                    <div className="experienceBlock">
                      <div className="title">Content Developer</div>
                      <div className="timelineContainer">
                        <div className="timeline previous">2015.09 2.4yrs</div>
                      </div>
                      <div className="location">University of Ontario Institute of Technology, Oshawa</div>
                      <p>
                      I was responsible for designing and writing introductory programming materials for students new to game development, 
                      focused on improving student’s learning experience and the material's practicality. Our team also
                      introduced game centric objectives to help students better understand how they can relate their programming knowledge 
                      in the context of games development.
                      </p>
                    </div>

                    <div className="experienceBlock">
                      <div className="title">UX Engineer</div>
                      <div className="timelineContainer">
                        <div className="timeline previous">2014.09 1yr</div>
                      </div>
                      <div className="location">Lingly Language Systems, Toronto</div>
                      <p>
                      I joined Lingly to lead the design and development of their web and mobile's user experience.
                      Standardized the studio’s UI principles, identity, development process, quality control and testing pipeline.
                      After a successful launch, we received excellent reviews and approval from our international users. Lingly 
                      was quickly acquired by an investor shortly after.
                      </p>
                    </div>

                    </div>
                  </div>

                <div id="projects" className="workContainer">
                  <div className="boExperienceHeader">Projects</div>
                  <div className="boExperienceFill"></div>

                  <div className="workBlock">
                    <div className="title">TITLE</div>
                    <div className="location">purpose</div>
                    <div className="link">
                      <div className="linky" type="button" value="link" onClick={()=> window.open("https://www.linkedin.com/in/bo-yu-09091514b/", "_blank")}>link</div>
                    </div>
                    <p>
                    Morbi ultricies tortor id ante accumsan molestie. Donec vitae ultricies ante. 
                    Vestibulum tempor viverra pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus a aliquet mi, quis pretium quam. Donec dapibus leo at elementum accumsan.
                    Nunc sodales massa vitae dolor imperdiet suscipit.
                    </p>
                    <div className="media">
                    
                    </div>
                  </div>

                  <div className="workBlock">
                    <div className="title">TITLE</div>
                    <div className="location">purpose</div>
                    <div className="link">
                      <div className="linky" type="button" value="link" onClick={()=> window.open("https://www.linkedin.com/in/bo-yu-09091514b/", "_blank")}>link</div>
                    </div>
                    <p>
                    Morbi ultricies tortor id ante accumsan molestie. Donec vitae ultricies ante. 
                    Vestibulum tempor viverra pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus a aliquet mi, quis pretium quam. Donec dapibus leo at elementum accumsan.
                    Nunc sodales massa vitae dolor imperdiet suscipit.
                    </p>
                    <div className="media">
                    
                    </div>
                  </div>

                  <div className="workBlock">
                    <div className="title">TITLE</div>
                    <div className="location">purpose</div>
                    <div className="link">
                      <div className="linky" type="button" value="link" onClick={()=> window.open("https://www.linkedin.com/in/bo-yu-09091514b/", "_blank")}>link</div>
                    </div>
                    <p>
                    Morbi ultricies tortor id ante accumsan molestie. Donec vitae ultricies ante. 
                    Vestibulum tempor viverra pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus a aliquet mi, quis pretium quam. Donec dapibus leo at elementum accumsan.
                    Nunc sodales massa vitae dolor imperdiet suscipit.
                    </p>
                    <div className="media">
                    
                    </div>
                  </div>

                  <div className="workBlock">
                    <div className="title">TITLE</div>
                    <div className="location">purpose</div>
                    <div className="link">
                      <div className="linky" type="button" value="link" onClick={()=> window.open("https://www.linkedin.com/in/bo-yu-09091514b/", "_blank")}>link</div>
                    </div>
                    <p>
                    Morbi ultricies tortor id ante accumsan molestie. Donec vitae ultricies ante. 
                    Vestibulum tempor viverra pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus a aliquet mi, quis pretium quam. Donec dapibus leo at elementum accumsan.
                    Nunc sodales massa vitae dolor imperdiet suscipit.
                    </p>
                    <div className="media">
                    
                    </div>
                  </div>

                </div>
          
            <div className="getInTouchSticky" type="button" value="CONTACT" onClick={()=> window.open("https://www.linkedin.com/in/bo-yu-09091514b/", "_blank")}>
              <div className="getinTouchLable">Contact</div>
              <img src="img/linkedin_icon.svg" alt="linkedin"/>
            </div>
        </div>

      </div>
    );
  }
}

export default App;