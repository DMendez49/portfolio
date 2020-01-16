import { Link } from "react-router-dom";
import { Menu, Button, Icon } from "semantic-ui-react";
import React from "react";

const Navbar = () => (
  <Menu>
    <div class="Container">
      <div class="left-column">
        <div class="right-column">
          <Button color="blue inverted">
            <Link to="/">
              <Menu.Item>
                <h3><Icon name='home'></Icon></h3>
              </Menu.Item>
            </Link>
          </Button>
          <Button color="red inverted">
            <Link to="/about">
              <Menu.Item>
                <h3>
                  {/* <Icon name="child">
                  </Icon> */}
                  About</h3>
              </Menu.Item>
            </Link>
          </Button>
            <Button color="red inverted">
              <Link to="/Resume">
                <Menu.Item>
                  <h3>
                    {/* <Icon name="coffee"></Icon> */}
                    Resume</h3>
                </Menu.Item>
              </Link>
            </Button>
          <Button color="red inverted">
            <Link to="/project">
              <Menu.Item>
                <h3><Icon name="free code camp"></Icon>Projects</h3>
              </Menu.Item>
            </Link>
          </Button>
          <Button color="red inverted" >
            <Link to="connection">
              <Menu.Item>
                <h3><Icon name="phone"></Icon>Contact Me</h3>
              </Menu.Item>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </Menu>
);
export default Navbar;