import React, { Component } from 'react';
import './App.css';



class App extends Component {
// Get the navbar
  constructor() {
    super();
    this.state = {
      stickNav: false,
      isToggleOn: false,
      atHome: false,
      atAbout: false,
      atWork: false,
      atExp: false,
      renderContact: false,
      width: 0, 
      height: 0,
    };

    this.tabOnClick = this.tabOnClick.bind(this);
    this.getContact = this.getContact.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount(){
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener("scroll", this.handleWindowScroll);
  }
  componentWillUnmount(){
    window.removeEventListener("scroll", this.handleWindowScroll);
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  //scroll handlers
  handleWindowScroll = (e) => {
    if(!this.navBar){
      return;
    }
    const pageYOffset = window.pageYOffset;
   
    // if(pageYOffset < 1){
    //   this.setState({
    //     atHome: true,
    //     atAbout: false,
    //     atWork: false,
    //     atExp: false,
    //     stickNav: false,
    //   });
    // }
    // else if (pageYOffset > 0){
    //   this.setState({stickNav: true});
    // }
  }

  tabOnClick(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      stickNav: !prevState.stickNav,
    }));
  }

  getNavBarStyle(){
    return !this.state.stickNav ?  'App-card' : 'App-cardSticky';

  }
  setNameStyle(){
    return !this.state.stickNav ?  'name' : 'nameSticky' ;
  }

  setTabStyle(){
    return !this.state.stickNav ? 'tabSticky tabTaggleOff' : 'tabSticky tabTaggleOn' ; 
  }
  setContactButtonStyle(){
    return !this.state.stickNav ? 'getInTouch' : 'getInTouchSticky';
  }
  setTagline(){
    return !this.state.stickNav ? 'tagline' : 'taglineSticky' ;
  }


  getContact(){
    
    this.setState(prevState => ({
      getContact: !prevState.getContact,
    }));
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log(this.state.width);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet"/>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
       

        <div className={this.getNavBarStyle()} ref={ref=>this.navBar=ref}>
          <span className={this.setNameStyle()}>Bo Yu</span>
          <span className={this.setTagline()}>UX Engineer && Software Developer </span>
          <span className={this.setTabStyle()}>
           <ul>
            <li className="tab" onClick={this.tabOnClick}>
              <div className="shiftLeft">
                <div className="initText">//About</div>
              </div>
              <div className="shiftRight">
                <div className="addtext">Me</div>
              </div>
            </li>
        
            <li className="tab">
            <div className="shiftLeft exp">
                <div className="initText">//Exp</div>
              </div>
              <div className="shiftRight erience">
                <div className="addtext">--.erience</div>
              </div>
            </li>

            <li className="tab">
              <div className="shiftLeft">
                <div className="initText">//Work</div>
              </div>
              <div className="shiftRight">
                <div className="addtext">. I Did</div>
              </div>
            </li>

           </ul>
           <div className="boInfo">
            {this.state.stickNav ? 
            //aboout me
              <div className="aboutPage">
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
                  I like to <strong> overcome </strong> design challenages,
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

                  <div className="boExperienceContainer">
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

              </div>
            : null}
             
           </div>
          </span>
          <button className={this.setContactButtonStyle()} onClick={this.getContact}>GET IN TOUCH</button>
            {this.state.getContact ? 
              <div className="contactPage">
                <div className="closeContactPage" onClick={this.getContact}>X</div>
                <p className="contactTitle">Let's Talk</p>
                <p>New project, opportunities, or even just to get coffee.<br/>I am down!</p>
                <form className="contactForm">
                  <div>
                    <input type="text" placeholder="Name *"/>
                  </div>
                  <div>
                    <input type="text" placeholder="E-mail *"/>
                  </div>
                  <div>
                    <textarea type="text" placeholder="Message *"/>
                  </div>
                  <div>
                    <button>Send Message</button>
                  </div>
                </form>
              </div>
              : null}
        </div>

      </div>
    );
  }
}

export default App;
