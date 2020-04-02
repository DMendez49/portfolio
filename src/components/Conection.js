import React from "react";
import { Card, } from "semantic-ui-react";
import Footer from "./Footer"


export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

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
          <br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
          <div class="Container">
            <div class="left-column">
              <div class="right-column">

                <Card>
                  <a><img alt="build diagram" src="https://img.icons8.com/plasticine/2x/important-mail.png" width="150" height="150"></img></a>
                  <h3>mendezdavid68@gmail.com</h3>
                  <br /><br /> <br />
                  <h3 align="left">Email:</h3>
                  <div class="ui large input focus">
                    <input type="email" placeholder="Email..." name="email" />
                  </div>

                  <br />
                  <h3 align="left">Message:</h3>
                  <div class="ui large icon input">
                    <input type="text" placeholder="Message..." name="message" />
                    <br />  <br />  <br />  <br />  <br />  <br />
                  </div>
                  <br /><br /><br /><br /><br />
                  <br /><br /><br /><br />
                </Card>


                {status === "SUCCESS" ? <p>Thanks!</p> : <button class="ui large blue button ">Send</button>}
                {/*the text button*/}
                {/* <button class="ui massive red button " onClick={this.toggletext}>Text</button>  */}
                <br /><br />
                <div class="ooops">
                  {status === "ERROR" && <p>Ooops! There was an error!</p>}
                </div>
              </div>
            </div>
          </div>
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
          <Footer />
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
