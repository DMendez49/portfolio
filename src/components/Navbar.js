import { Link } from "react-router-dom";
import { Menu, Button, Icon } from "semantic-ui-react";
import React from "react";

const Navbar = () => (
  <Menu>
    <div class="Container">
      <div class="left-column">
        <div class="right-column">
          <Button color="blue inverted"
            size="tiny">
            <Link to="/">
              <Menu.Item>
                <h3><Icon name='home'>
                </Icon></h3>
              </Menu.Item>
            </Link>
          </Button>
          <Button color="red inverted"
            size="tiny">
            <Link to="/about">
              <Menu.Item>
                <h3>
                  About</h3>
              </Menu.Item>
            </Link>
          </Button>
          <Button color="red inverted"
            size="tiny">
            <Link to="/Resume">
              <Menu.Item>
                <h3>
                  Resume</h3>
              </Menu.Item>
            </Link>
          </Button>
          <Button color="red inverted"
            size="tiny">
            <Link to="/project">
              <Menu.Item>
                <h3>
                  Projects
                </h3>
              </Menu.Item>
            </Link>
          </Button>
          <Button color="red inverted"
            size="tiny" >
            <Link to="connection">
              <Menu.Item>
                <h3>Contact Me
                  {/* <Icon name="phone">
                  </Icon> */}
                </h3>
              </Menu.Item>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </Menu>
);

export default Navbar;

