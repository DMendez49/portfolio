import React from "react";
import { Button, Header, Segment, Card } from "semantic-ui-react";
import Footer from "./Footer"


const Resume = () => (

  <center>
    <br /><br />
    <div class="cardBox">
      <div class="card">
        <Button>
          <a href="https://docs.google.com/document/d/1CwEJmKSCMsQEZILbRV5V4JIrV9Uq5dEVO2IF9s0uodk/edit"
            target="_blank">
            <img
              alt="build diagram"
              src="https://img.icons8.com/plasticine/2x/resume.png"
              height="150"
              width="140">
            </img>
          </a>
        </Button>
      </div>
    </div>
    <br /><br /><br />
    <a href="https://docs.google.com/document/d/1CwEJmKSCMsQEZILbRV5V4JIrV9Uq5dEVO2IF9s0uodk/edit" target="_blank">
      <Card>
        <h3>
          <br />
          Select Icon to review Resume
        <br /><br />
        </h3>
      </Card></a>
    <br /><br /><br />
    <a href="https://docs.google.com/document/d/1CwEJmKSCMsQEZILbRV5V4JIrV9Uq5dEVO2IF9s0uodk/edit" target="_blank">
      <card>
        <div class="backson">
          <br /><br /><br />
          <h2>Refrences</h2>
          <hr />
          <br />
          <h3>
            <h3>Stanley Egwuonwu</h3>
            <h3>Assistant Professor</h3>
            <h3>Computer Sciences and Information Systems</h3>
            <h3>Office: BB111P</h3>
            <h3>Office phone: 801-957-4054</h3>
            <h3>Email: Stanley.egwuonwu@slcc.edu</h3>
          </h3>
        </div>
      </card></a>
    <br /><br /><br />
    <br /><br /><br />
    <br /><br /><br />
    <br /><br /><br />
    <br />
    <Footer />
  </center>
);

export default Resume;