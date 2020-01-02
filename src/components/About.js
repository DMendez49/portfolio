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
              <h2>My concentration is to work for you long term and expand my skill set.</h2>
              <h2> And to do some freelance work on the side.</h2>
              <br />
            </header>
          </Card>
          <Container class="Container">
            <h5>
              <br />
              <h2>Company's I've Worked For:</h2>
              <hr />
              <br /> <br />
              <button onClick={event => window.location.href = '/DellTechnologies'}>
                <img alt="build diagram" src="https://cdn.worldvectorlogo.com/logos/dell-technologies-logo.svg" width="325"></img>
              </button>
              <br />
              <br />
              <br />
              <button onClick={event => window.location.href = '/Instructure'}>
                <img alt="build diagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Instructure_logo.svg/1280px-Instructure_logo.svg.png" width="325"></img>
              </button>
              <br />
              <br />
              <br />
              <button onClick={event => window.location.href = '/Sykes'}>
                <img alt="build diagram" src="https://www.xytrondatarecovery.co.uk/wp-content/uploads/2015/07/sykes-logo.png" width="325"></img>
              </button>
              <br />
              <button onClick={event => window.location.href = `/Express`}>
                <img alt="build diagram" src="https://www.expresspros.com/uploadedImages/Landing_Pages/Express_Reviews/EEP.PNG?n=5007" width="325" height="215"></img>
              </button>
              <br />
              <button onClick={event => window.location.href = `/Alorica`}>
                <img alt="build diagram" src="https://cdn.alorica.com/wp-content/themes/alorica/images/logo.png" width="325"></img>
              </button>
              <br />
              <br />
              <br />
              <br />
            </h5>
          </Container>
        <br />
          <Card>
            <br />
            <h2>Schools I attended:</h2>
            <div class="sidebyside">
              <button onClick={() => { }}>
                <img alt="build diagram" src="https://umc.utah.edu/wp-content/uploads/sites/15/2015/01/BlockU_400px.png" width="200"></img>
              </button>
              <button onClick={() => { }}>
                <img alt="build diagram" src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/2475/s300/beaker-white-256.png" width="100"></img>
              </button>
              <button onClick={() => { }}>
                <img alt="build diagram" src="https://i.slcc.edu/institutionalmarketing/images/logo/SLCClogo-BrandColors2015.png" width="200"></img>
              </button>
            </div>
          </Card>
          <br /><br /><br />
        </div>
      </div>
    </div>
  </center>
);

export default About;