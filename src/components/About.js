import React, { Fragment, useState, useEffect } from "react";
import {Card} from "semantic-ui-react";
import {Link, } from 'react-router-dom'

const About = () => (
  <center>
    <br />
    <Card>
      <header> 
        <br />
          <h2> My concentration is on
          expanding and growing organizational
          and individual capabilities by writing
          and creating standard software programs. 
          that supports high performance, clarity, 
          learning, and growth.
         <br /><br />
          </h2>
      </header>
    </Card>
        <h5> 
          <br />
          <h1>Company's I've Worked For:</h1>
          <hr />
            <br />
              <button onClick={() => {}}>
                <img alt="build diagram" src="https://cdn.worldvectorlogo.com/logos/dell-technologies-logo.svg"width="400"></img>
              </button>
                <br />
                <br />
              <button onClick={() => {}}>
                <img alt="build diagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Instructure_logo.svg/1280px-Instructure_logo.svg.png"width="400"></img>
              </button> 
                <br />
                <br />
              <button onClick={() => {}}>
                <img alt="build diagram" src="https://www.xytrondatarecovery.co.uk/wp-content/uploads/2015/07/sykes-logo.png"width="400"></img>
              </button>
                <br />
              <button onClick={() => {}}>
              <img alt="build diagram" src="https://www.expresspros.com/uploadedImages/Landing_Pages/Express_Reviews/EEP.PNG?n=5007" width="400" height="215"></img>
              </button>
                <br />
              <button onClick={() => {}}>
                <img alt="build diagram" src="https://cdn.alorica.com/wp-content/themes/alorica/images/logo.png" width="400"></img>
              </button>
                <br />
         </h5>
      <br />
     <Card>
       <h2>Schools I attended:</h2>
      <hr />
      <div class="sidebyside">
        <button onClick={() => {}}>
          <img alt="build diagram" src="https://umc.utah.edu/wp-content/uploads/sites/15/2015/01/BlockU_400px.png" width="300"></img>
        </button>
        <button onClick={() => {}}>
          <img alt="build diagram" src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/2475/s300/beaker-white-256.png" width="200"></img>
        </button>
        <button onClick={() => {}}>
          <img alt="build diagram" src="https://i.slcc.edu/institutionalmarketing/images/logo/SLCClogo-BrandColors2015.png" width="300"></img>
        </button>
        </div>
     </Card>
  </center>
);

export default About;