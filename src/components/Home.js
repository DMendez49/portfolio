import React, { Fragment } from "react";
import { Header, Card } from "semantic-ui-react";

const Home = () => (
  <Fragment>
    <div class="Container">
      <div class="left-column">
        <div class="right-column">
          <br /><br /><br /><br /><br />
          <div>
            <img class="thick-border" alt="build diagram" src="https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/52778803_2138707336198360_337889896129626112_o.jpg?_nc_cat=106&_nc_ohc=AUtSFTivbikAQm_MYSYvHf-LmfojfKQ0_YFgq8IS74C-osLNnVkVZ8NAA&_nc_ht=scontent-den4-1.xx&oh=f2b8c48adc26eab321f39c730aa2a627&oe=5EAF8C67" width="600"></img>
            <Card>
              <br />
              <h1>David Mendez</h1>
              <h2>Software Engineer</h2>
              <h3>Hello my name is David Mendez and my interest grew for computer science with my time at Instructure. I was self tought when it comes to programming but was never satisfied with my skills.
                I completed the folllwing courses<li>Fundamentals of computer science</li>
                <li>Object Orented programming</li><li>Data Structures & Algorithms</li>at Salt Lake Comunity College and attended a bootCamp with the University Of Utah at Dev Point Labs.
                I will continue this journey by challenging myself daily. The languages below are the languages I study, you can see more about me by clicking on "About" on the navbar listed above.
              </h3>
              <h4>
                <div class="sidebyside">
                  <img alt="build diagram" src="https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png" width="35" height="30"></img>HTML |
              <img alt="build diagram" src="https://3.bp.blogspot.com/-oRSUw_TmO9o/XIb61m88fcI/AAAAAAAAIq0/vnxl2zzsXEQsnHI2fH4GjKu_ZT0urRo4wCK4BGAYYCw/s1600/icon%2Bcss%2B3.png" width="35" height="30"></img> CSS |
              <img alt="build diagram" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo.png" width="35" height="30"></img> Ruby |
              <img alt="build diagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ruby_on_Rails_logo.svg/807px-Ruby_on_Rails_logo.svg.png" width="35" height="30"></img> Rails |
              <img alt="build diagram" src="https://image.flaticon.com/icons/png/512/226/226777.png" width="35" height="30"></img> Java |
              <img alt="build diagram" src="http://pluspng.com/img-png/logo-javascript-png-file-javascript-logo-png-1052.png" width="35" height="30"></img> JavaScript |
              <img alt="build diagram" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width="35" height="30"></img> React |
              <img alt="build diagram" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" width="35" height="30"></img> Git
            </div>
              </h4>
              <br />
            </Card>
            <br />
          </div>
        </div>
        <div>
          <div className="alighnRight">
            <a href="https://www.youtube.com/channel/UCT3WnNy39aTW1Xba8Wh8hGA/about?view_as=subscriber">
              <img alt="build diagram" src="https://image.flaticon.com/icons/png/512/16/16030.png" width="60" align="left" ></img></a>
            <br />
          </div>
          <br />
          <div className="alighnRight">
            <br />
            <a href="https://www.linkedin.com/in/david-mendez-462933145/">
              <img alt="build diagram" src="https://i.ya-webdesign.com/images/linkedin-icon-white-png-7.png" width="60" align="left"></img></a>
            <br />
          </div>
          <div className="alighnRight">
            <br />
            <a href="https://github.com/DMendez49">
              <img alt="build diagram" src="http://pngimg.com/uploads/github/github_PNG20.png" height="60" width="60" align="left"></img></a>
            <br />
          </div>
          <br />
          <div className="alighnRight">
            <br />  <br />
            <a href="https://www.facebook.com/profile.php?id=100001773444206&ref=bookmarks">
              <img alt="build diagram" src="https://papermilkdesign.com/transparent450_/facebook-png-white-19.png" width="60" align="left"></img></a>
          </div>
          <br />
        </div>
        <br />
      </div>
    </div>

  </Fragment>
);

export default Home;