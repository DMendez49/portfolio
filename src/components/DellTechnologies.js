import React from "react";
import { Button, Header, Segment, Card } from "semantic-ui-react";
import Footer from "./Footer"

const DellTechnologies = () => (
  <center>
    <div class="Container">
      <div class="left-column">
        <div class="right-column">
          <br />
          <Card>
            <br />
            <img
              className="img"
              alt="build diagram"
              src="https://cdn.worldvectorlogo.com/logos/dell-technologies-logo.svg"
              width="500">
            </img>
            <br />
          </Card>

          <card>
            <div class="backy">
              <br /><br /><br />
              <h3>Role: Data Analyst</h3>
              <h3>Contact: 1(801)566-1889</h3>
              <h3>Dates: Feb 2018 - May 2019</h3>
              <br />
              <h3>Discription:</h3>
              <h3><br /><li>
                Provided technical support to field support personnel using complex infrastructures, Dell customers and dell distributors. I developed resolutions to problems of limited scope and follows standard practices and procedures.
            </li>
              </h3>
              <h3><br /><li>
                I recorded and updated Customer Service call Tracking Databases in a timely and accurate manner. I used defined protocols and independent judgment to properly escalate more complex issues to more experienced staff to resolve customer issues in the most expedient manner possible.
          </li></h3><h3>
                <br /><li>
                  I worked closely with customers to resolve technical issues on various information systems and information storage platforms. These issues include all of the following components: Operating Systems (Unix, Windows, and /or MVS, Networking(Ethernet,Fibre Channel, ISCSI), Storage Area networks attached storage, and databases- relational and hierarchical.
          </li></h3>
            </div>
          </card>
        </div>
      </div>
    </div>
    <br /><br /><br />
    <br /><br />
    <Footer />
  </center>

);

export default DellTechnologies;