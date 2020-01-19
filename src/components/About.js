import React, { Fragment, useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import { Link, } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

const About = () => (

  <center>
    <div class="Container">
      <div class="left-column">
        <div class="right-column">
          <br />
          <Card>
            <header>
              <br />
              <h3>My concentration is to work for you long term and expand my skill set.</h3>
              <h3> And to do some freelance work on the side.</h3>
              <br />
            </header>
          </Card>
          <Container class="Container">
            <h5>
              <br />
              <h3>Company's I've Worked For:</h3>
              <hr />
              <br /> <br />
              <Link to="DellTechnologies">
                <button>
                  <img alt="build diagram" src="https://cdn.worldvectorlogo.com/logos/dell-technologies-logo.svg" width="275" ></img>
                </button>
              </Link>
              <br />
              <br />
              <br />
              <Link to="Instructure">
                <button >
                  <img alt="build diagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Instructure_logo.svg/1280px-Instructure_logo.svg.png" width="275"></img>
                </button>
              </Link>
              <br />
              <br />
              <br />
              <Link to="Sykes">
                <button>
                  <img alt="build diagram" src="https://www.xytrondatarecovery.co.uk/wp-content/uploads/2015/07/sykes-logo.png" width="275"></img>
                </button>
              </Link>
              <br />
              <Link to="Express">
                <button>
                  <img alt="build diagram" src="https://www.expresspros.com/uploadedImages/Landing_Pages/Express_Reviews/EEP.PNG?n=5007" width="275" height="215"></img>
                </button>
              </Link>
              <br />
              <Link to="Alorica">
                <button>
                  <img alt="build diagram" src="https://cdn.alorica.com/wp-content/themes/alorica/images/logo.png" width="275"></img>
                </button>
              </Link>
              <br />
              <br />
              <br />
              <br />
            </h5>
          </Container>
          <br />
          <Card>
            <br />
            <h3>Schools I attended:</h3>
            <div class="sidebyside">
              <button>
                <img alt="build diagram" src="https://umc.utah.edu/wp-content/uploads/sites/15/2015/01/BlockU_400px.png" width="150"></img>
              </button>
              <button onClick={() => { }}>
                <img alt="build diagram" src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/2475/s300/beaker-white-256.png" width="100"></img>
              </button>
              <button onClick={() => { }}>
                <img alt="build diagram" src="https://i.slcc.edu/institutionalmarketing/images/logo/SLCClogo-BrandColors2015.png" width="150"></img>
              </button>
            </div>
          </Card>
          <br /><br /><br />
        </div>
      </div>
    </div>
  </center >
);

export default About;