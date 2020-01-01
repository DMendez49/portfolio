import { Link } from "react-router-dom";
import { Menu, Button } from "semantic-ui-react";
import React from "react";

const Navbar = () => (
  <Menu>
    <div class="Container">
      <div class="left-column">
        <div class="right-column">
          {/* <div class="ui selection dropdown"> */}
          <Button color="blue inverted">
            <Link to="/">
              <Menu.Item>
                <h3>Home</h3>
              </Menu.Item>
            </Link>
          </Button>
          <Button color="red inverted">
            <Link to="/about">
              <Menu.Item>
                <h3>About</h3>
              </Menu.Item>
            </Link>
          </Button>
          <Button color="red inverted">
            <Link to="/project">
              <Menu.Item>
                <h3>Projects</h3>
              </Menu.Item>
            </Link>
          </Button>
          <Button color="red inverted" >
            <Link to="connection">
              <Menu.Item>
                <h3>Contact Me</h3>
              </Menu.Item>
            </Link>
          </Button>
          {/* </div> */}
        </div>
      </div>
    </div>
  </Menu>
);
export default Navbar;