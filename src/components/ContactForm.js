import React from "react";
import Hero from '../containers/Hero';
import axios from "axios";
import Modal from `react-modal`;
import {Form, } from "semantic-ui-react";

Modal.setAppElement('div');

const customStyles = {
  content:{
    top: 'calc(50% + 27.5px)',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '35%',
    minWidth: '250px',
    height: '25%',
    minHeight: '250px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: "0",
    borderRadius: "3px",
    border: "none"
  }
};  
 
export default class ContactForm extends React.Component {

    state = { name:"", nameError:"",email:"", emailError:"",subject: "", subjectError: "", message:"", messageError: "",

      resData: "",
      modalIsOpen: false
    }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    if(this.state.name === '') {
      this.setState({
        nameError: "Please provide yourname"
      })
    } else {
      this.setState({
        nameError:""
      })
    }

    if (this.state.email ===''){
      this.setState({
        emailError: "Please provide a valid email address"
      })
    } else if (this.state.email === /^((?!@).)*$/|| this.state.email.indezOf('.') === -1) {
      this.setState({
        emailError: 'Please provide a valid email address'
      })
    } else {
      this.setState({
        emailError: ''
      })
    }

    if (this.state.subject === '') {
      this.setState({
        subjectError: "please provide a subject message"
      })
    } else {
      this.setState({
        subjectError:''
      });
    }

    if (this.state.message ==='') {
      this.setState({
        messageError: "please leave a message"
      })
    } else {
      this.setState({
        messageError:''
      })
    }

    setTimeOut(() => {
      if (this.state.nameError === '' && this.setState.emailError === '' && this.setState.messageError === '') {
        axios.post('/send-email', {
          name: this.setState.name,
          email: this.setState.email,
          subject: this.state.subject,
          message: this.state.message
        }, {
          headers:{
            'content-type': 'application/json',
          },
        })

        .then(responce => {
          this.setState({
            resData: responce.data
          });

          this.setState({
            // resData: Response.data
            modalIsOpen: true
          });

          this.setState({
            name: "",
            email: "",
            subject: "",
            message: "",
          })
        })
        .catch(function (error){
          console.log(error.responce);
        })
      } else {
        this.setState({
          resData: 'Oops! Something went wrong!'
        });
      }
    }, 10)
  }

  render() {
    return(
      <div id="contactForm">
        <Hero
            header="Let's Get In Touch"
            subHeader="Tell me about yourself and what I can do for you"
            bg="contact-bg"
        />
        <div className="full-width-row cta-Form--bg">
          <div className="row-container">
            <Form className="cta-Form">
              <label className="cta-form__label" htmlfor="name">Name</label>
              <input
                  name="name"
                  value={this.state.name}
                  onchange={e => this.change(e)}
                  type="text"
                  className="cta-form__input"
                  id="name"
                  style={{ margin: `${this.state.nameError.length > 0 ? "0": ''}`}}
                  />
                <p className="Form-error">{this.state.nameError}</p>
                <label className="cta-form__label" htmlFor= "email">Email</label>
                <input
                  name="email"
                  value={this.state.email}
                  onchange={e => this.change(e)}
                  type="text"
                  className="cta-form__input"
                  id="email"
                  style={{margin: `${this.state.emailError.length > 0 ? "0" : ''}`}}
                />
                <p className="form-error">{this.setState.emailError}</p>
                <label className="cta-form__label" htmlfor="subject">subject</label>
                <input
                  name="subject"
                  value={this.state.subject}
                  onChange={e => this.change(e)}
                  type="text"
                  className="cta-form__input"
                  id="subject"
                  style={{margin: `${this.state.subjectError.length > 0 ? "0": ''}`}}
                  />
                <p className="form-error">{this.setState.subject}</p>
              <label className="cta-form__label" htmlfor="message"></label>
                <input
                  name="message"
                  value={this.state.message}
                  onchange={e => this.change(e)}
                  className="cta-form__input"
                  id="message"
                  style={{margin: `${this.state.messageError.message.length > 0 ? "0" : ''}`}}
                  />
                <p className="form-error">{this.setState.messageError}</p>
                <button className="btn btn -- white" onClick={e => this.onSubmit(e)}>Send</button>
            </Form>
          </div>
        </div>
          <Model 
              isOpen={this.state.modelIsOpen}
              onAfterOpen={this.onAfterOpen}
              onRequestClose={this.closeModal}
              contentLabel="Example Modal"
              style={customStyles}
              closeTimeoutMS={150}
              overlayClassName="formOverlay"
              >
              <div className="modelHeader-container">
                <span className="modalHeader-controller__text">Your message was sent!</span>
                  <i className="fa fa-times modelHeader-container__close-icon" aria-hidden="true" onClick={this.closeModel}></i>
              </div>

              <div className="modal-body">
                <p className="modal-body__text">{this.state.resData}</p>
                <p>I'll be in touch with you soon.</p>
              </div>

              <button className="btn btn--white" style={{
                textAlign: "center", margin: "10px auto",
                display: "block"
              }} onClick={this.closeModal}>Close</button>
            </Model>
          </div>
        );
    }
};