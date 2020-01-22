import React from "react";
import { Button, Header, Segment, Card, Drop, Grid } from "semantic-ui-react";
import react_rails from "../image/react_rails.png"
import dpl from "../image/dpl.jpg"

const Project = () => (
  <center>
    <div class="Container">
      <div class="left-column">
        <div class="right-column">
          <div class="fieldset">
            <div class="a">
              <div class="smallSpace">
                <br /><br /><br /><br /><br /><br />
              </div>
              <div class="cardBox">
                <div class="card">
                  <Button>
                    <link rel="stylesheet" href="./App.css" />
                    <a href="https://github.com/DMendez49"
                      target="_blank">
                      <img
                        alt="build diagram"
                        src="http://pngimg.com/uploads/github/github_PNG20.png"
                        height="150"
                        width="140">
                      </img>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <br />
            <a href="https://github.com/DMendez49" target="_blank">
              <Card>
                <h3>
                  <br />
                  Select GitHub Icon to review repositories/projects
                  <br /><br />
                </h3>
              </Card>
            </a>
            <h6>
              <h4>
                <br /><br />
                <div class="spacer">
                </div>
                <div class="sidebyside">
                  <Grid.Column>
                    <Grid columns={4}
                      align="center">
                      <div>
                        <Button color="black">
                          <a href="https://github.com/DMendez49/rails_react_Department_store" target="_blank">
                            <img alt="build diagram" src={react_rails} height="150" width="140"></img>
                          </a>
                        </Button>
                        <h3>rails_react_Department_store</h3>
                      </div>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <div>
                        <Button color="black">
                          <a href="https://github.com/DMendez49/contextApp/tree/master/src/components" target="_blank">
                            <img alt="build diagram" src="http://pluspng.com/img-png/logo-javascript-png-file-javascript-logo-png-1052.png" height="150" width="140"></img>
                          </a>
                        </Button>
                        <h3>contextApp</h3>
                      </div>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <div>
                        <Button color="black">
                          <a href="https://github.com/DMendez49/react-Flash-Card/tree/master/src" target="_blank">
                            <img alt="build diagram" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" height="150" width="140"></img>
                          </a>
                        </Button>
                        <h3>react-Flash-Card</h3>
                      </div>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <div>
                        <Button color="black">
                          <a href="https://github.com/DMendez49/Flash_Cards" target="_blank">
                            <img alt="build diagram" src="http://pluspng.com/img-png/logo-javascript-png-file-javascript-logo-png-1052.png" height="150" width="140"></img>
                          </a>
                        </Button>
                        <h3>Flash_Cards</h3>
                      </div>
                      <div>
                        <Button color="black">
                          <a href="https://github.com/DMendez49/Connect4" target="_blank">
                            <img alt="build diagram" src="https://image.flaticon.com/icons/png/512/226/226777.png" height="150" width="140"></img>
                          </a>
                        </Button>
                        <h3>Connect4</h3>
                      </div>
                    </Grid>
                  </Grid.Column>
                </div>
                <br /><br />
                <div class="sidebyside">
                  <Grid.Column>
                    <Grid>
                      <div>
                        <Button color="black">
                          <a href="https://github.com/DMendez49/rails_lms" target="_blank">
                            <img alt="build diagram" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo.png" height="150" width="140"></img>
                          </a>
                        </Button>
                        <h3>rails_lms</h3>
                      </div>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <div>
                        <Button color="black">
                          <a href="https://github.com/DMendez49/Final_Stimulator_Howw" target="_blank">
                            <img alt="build diagram" src="https://image.flaticon.com/icons/png/512/226/226777.png" height="150" width="140"></img>
                          </a>
                        </Button>
                        <h3>Final_Stimulator_Howw</h3>
                      </div>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </Grid>
                  </Grid.Column>
                </div>
                <br /><br />
                <a href="https://github.com/DMendez49" target="_blank">
                  <Card>
                    <h3>
                      <br />
                      Group projects
                  <br /><br />
                    </h3>
                  </Card>
                </a>
                <br /><br />
                <div class="sidebyside">
                  <Grid.Column>
                    <Grid columns={4}
                      align="center">
                      <div>
                        <Button color="black">
                          <a href="https://github.com/DMendez49/Rails_HackTrips" target="_blank">
                            <img alt="build diagram" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ruby_on_Rails_logo.svg/807px-Ruby_on_Rails_logo.svg.png" height="150" width="140"></img>
                          </a>
                        </Button>
                        <h3>Rails_HackTrips</h3>
                      </div>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <div>
                        <Button color="black">
                          <a href="https://github.com/DMendez49/rails_react_Utoob" target="_blank">
                            <img alt="build diagram" src={react_rails} height="150" width="140"></img>
                          </a>
                        </Button>
                        <h3>rails_react_Utoob</h3>
                      </div>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      <div>
                        <Button color="black">
                          <a href="https://github.com/DMendez49/Flash_Cards" target="_blank">
                            <img alt="build diagram" src={react_rails} height="150" width="140"></img>
                          </a>
                        </Button>
                        <h3>DevPointLabs_Store</h3>
                      </div>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </Grid>
                  </Grid.Column>
                </div>
                <br /> <br />
                <br /><br />
              </h4>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </center>
);

export default Project;