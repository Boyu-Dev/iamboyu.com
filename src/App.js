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
            <div className={this.setTagline()}>UX Engineer && Web Developer </div>
          <div className="tabContainer">
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
           </div>

              <div id="aboutMe" className="aboutPage">
                <div className="aboutContainer">
                  <div className="boExperienceHeader"> About</div>
                  <div className="boExperienceFill"></div>
                <div className="AboutIntro-text">
                  <h>Me</h>
                  I am Bo Yu, a 24-year-old Canadian 
                  <strong> UX Engineer and Web Developer. </strong>
                    I love making things that people interact with and 
                  I am always learning something new 
                  <strong> (I am currently learning about game user research). </strong>
                  I like to <strong> overcome </strong> design challenges,
                  <strong> create </strong> intelligent user experiences and software
                  with strong integrity. 
                  <br/>
                  Nowadays when I have free time, I like to make silly games. And 
                  Once a year I travel the world to <strong> experience and learn </strong> 
                  about new cultures.
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
                      <img src="img/jquery_icon.svg" alt="jQuery"/>
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
                        <div className="timeline current">Present 10mos</div>
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
                      <div className="title">Lead UX Engineer</div>
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
                      <div className="title">UX Engineer</div>
                      <div className="timelineContainer">
                        <div className="timeline previous">2015.03 6mos</div>
                      </div>
                      <div className="location">Lingly Language Systems, Toronto</div>
                      <p>
                      I joined Lingly to help design and develope their web and mobile's user experience.
                      Standardized the studio’s UI principles, identity, development process, quality control and testing pipeline.
                      After a successful launch, we received excellent reviews and approval from our international users. Lingly 
                      was quickly acquired by an investor shortly after.
                      </p>
                    </div>

                    <div className="experienceBlock">
                      <div className="title">Web Developer</div>
                      <div className="timelineContainer">
                        <div className="timeline previous">2014.05 10mos</div>
                      </div>
                      <div className="location">Aloud Creative, Toronto</div>
                      <p>
                      As a web developer I have Designed concept models, sitemaps, process flows, wireframes,
                      prototypes and preformed heuristic reviews. Once a final designs was approved, I will
                      develope the project using React and React native.
                      I would also design, directed user research sessions, analyze and reported research data to stack-holders.
                      </p>
                    </div>

                    <div className="experienceBlock">
                      <div className="title">Freelance Web Developer</div>
                      <div className="timelineContainer">
                        <div className="timeline previous">2012.07 1.8years</div>
                      </div>
                      <div className="location">Icebird Studio, Toronto</div>
                      <p>
                      As a freelance web developer, I prepared and presented project proposal to clients and 
                      designed website wireframes and mockups.
                      Once a contracted is established, I built sophisticated interfaces using HTML, CSS,
                      Bootstrap, JavaScript and jQuery. Depending on client needs I also configured and set
                      up new WordPress instances, installed themes, plugins and according to client’s needs.
                      Once a project is finished, I would maintain continuous customer support, 
                      project maintenance and updates based on client feedback.
                      </p>
                    </div>
                    <div className="boExperienceFill"> </div>
                    </div>
                  </div>

                <div id="projects" className="workContainer">
                <div className="workblockContainer">
                  <div className="boExperienceHeader">Fun Projects</div>
                  <div className="boExperienceFill"></div>

                  <div className="workBlock">
                    <div className="title">Bustle</div>
                    <div className="location">Passion Project,<br/> UX/UI Designer, Developer</div>
                    <div className="link">
                      <div className="linky" type="button" value="itch.io Page" onClick={()=> window.open("https://moonwalkstudios.itch.io/bustle", "_blank")}>itch.io Page</div>
                    </div>
                    <p>
                    Developed with fellow Moonwalk Studios members Over the course of 4 - 5 months, 
                    we developed the current build of Bustle from the ground up, including engine, art, design, etc. 
                    This current build was showcased at the Level Up Showcase in Toronto, Canada in April 2017.
                    </p>
                    <div className="media">
                      <img src="img/bustle_icon.png" alt="GFRPO media icon"/>
                    </div>
                  </div>

                  <div className="workBlock">
                    <div className="title">G.F.R.P.O</div>
                    <div className="location">Game Jam Project,<br/> UX/UI Designer, Developer</div>
                    <div className="link">
                      <div className="linky" type="button" value="itch.io Page" onClick={()=> window.open("https://moonwalkstudios.itch.io/giant-family-reunion", "_blank")}>itch.io Page</div>
                    </div>
                    <p>
                    GFRPO was made during the UOIT GDSOC (Game Dev Society) 
                    2017 48 Hour Game Jam at the University of Ontario Institute of Technology by 
                    Moonwalk Studios members.
                    </p>
                    <div className="media">
                      <img src="img/GFRPO_icon.png" alt="GFRPO media icon"/>
                    </div>
                  </div>

                  <div className="workBlock">
                    <div className="title">Monday Night Mines</div>
                    <div className="location">Collaboration Project,<br/> Project Consultant/Manager</div>
                    <div className="link">
                      <div className="linky" type="button" value="Demo Video" onClick={()=> window.open("https://youtu.be/WpMqaufpWEk", "_blank")}>Demo Video</div>
                    </div>
                    <p>
                    In collaboration with University of Ontario Institute of Technology, Monday Night Mines was a research and demo project developed along side
                    current Game Development and Entrepreneurship program's students. The project gave students an opportunity to research, experiment and develop
                    in a VR environment.
                    </p>
                    <div className="media">
                      <iframe width="400" height="250" src="https://www.youtube.com/embed/WpMqaufpWEk" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                  </div>

                  <div className="workBlock">
                    <div className="title">Word Lounge (work in progress)</div>
                    <div className="location">Android App Project,<br/> UX/UI Designer, Developer</div>
                    <div className="link">
                    </div>
                    <p>
                      Word Lounge is a word puzzle game developed for Android Devices, and an exercise of developing
                      mobile applications.
                    </p>
                    <div className="media">
                      <img className="wlgif" src="img/wordlounge_animation.gif" atl="word lounge"/>
                    </div>
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