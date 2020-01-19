import React from "react";
import { Button, Header, Segment, Card, Drop, Grid } from "semantic-ui-react";

const Project = () => (
  <center>
    <div class="Container">
      <div class="left-column">
        <div class="right-column">
          <div class="fieldset">
            <br /><br />
            <div class="a">
              <link rel="stylesheet" href="./App.css" />
              <a href="https://github.com/DMendez49" target="_blank">
                <Button>
                  <img alt="build diagram" src="http://pngimg.com/uploads/github/github_PNG20.png" height="150" width="140"></img>
                </Button>
              </a>
            </div>
            <br /><br /><br />
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
                <div >
                  <br /><br />
                  <div class="sidebyside">
                    <Grid.Column>
                      <Grid columns={4}
                        align="center">
                        <div>
                          <Button color="black">
                            <a href="https://github.com/DMendez49/rails_react_Department_store" target="_blank">
                              <img alt="build diagram" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo.png" height="150" width="140"></img>
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
                      </Grid>
                    </Grid.Column>
                  </div>
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