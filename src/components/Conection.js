import React from "react";
import { Card, } from "semantic-ui-react";

export default class MyForm extends React.Component {
  //for the text toggle button
  // state = { text: false, }

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }
  //toggle button for text
  // toggle = () => this.setState({ text: !this.state.text })

  render() {
    const { status } = this.state;
    return (

      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mqkeggyz"
        method="POST"
      >
        {/* <!-- add your custom form HTML here --> */}
        <center>
          <div class="Container">
            <div class="left-column">
              <div class="right-column">
                <h1></h1>
                <h6>
                  <h2>Connect with me by clicking on a platform</h2>
                  <hr />
                  <br /><br />
                  <div class="sidebyside">
                    <a href="https://www.youtube.com/channel/UCT3WnNy39aTW1Xba8Wh8hGA/about?view_as=subscriber">
                      <img alt="build diagram" src="https://image.flaticon.com/icons/png/512/16/16030.png" width="100"></img></a>

                    <a href="https://www.linkedin.com/in/david-mendez-462933145/">
                      <img alt="build diagram" src="https://i.ya-webdesign.com/images/linkedin-icon-white-png-7.png" width="100"></img></a>

                    <a href="https://github.com/DMendez49">
                      <img alt="build diagram" src="http://pngimg.com/uploads/github/github_PNG20.png" height="110" width="140"></img></a>

                    <a href="https://www.facebook.com/profile.php?id=100001773444206&ref=bookmarks">
                      <img alt="build diagram" src="https://papermilkdesign.com/transparent450_/facebook-png-white-19.png" width="100"></img></a>
                  </div>
                  <br />
                </h6>
                <br />  <br />  <br />  <br />
                <br />  <br />  <br />  <br />
                <Card>
                  <br />  <br />  <br />  <br />
                  <h2 align="left">Email:</h2>
                  <div class="ui large input focus">
                    <input type="email" placeholder="Email..." name="email" />
                  </div>

                  <br />
                  <h2 align="left">Message:</h2>
                  <div class="ui massive icon input">
                    <input type="text" placeholder="Message..." name="message" />
                    <br />  <br />  <br />  <br />  <br />  <br />
                    <br />
                  </div>
                  <br />  <br />  <br />  <br />
                </Card>
                {status === "SUCCESS" ? <p>Thanks!</p> : <button class="ui massive blue button ">Send</button>}
                {/*the text button*/}
                {/* <button class="ui massive red button " onClick={this.toggletext}>Text</button>  */}
                <br /><br />

                <div class="ooops">
                  {status === "ERROR" && <p>Ooops! There was an error!</p>}
                </div>
              </div>
            </div>
          </div>
        </center>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
