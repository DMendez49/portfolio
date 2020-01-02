import React from 'react'
import Conection from './Conection'
import {Header, Segment, Button, Icon, } from 'semantic-ui-react'

class Text extends React.Component{
  state = { text: false, }

  toggle = () => this.setState({ text: !this.state.text })

  render() {
    return(
      <Segment style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        {
          this.state.text ?
          <Conection {...this.props} toggle={this.toggle}/>
          :
          <div>
            <Header as='h3'>Im a call Away</Header>
            <p>phone number</p>
          </div>
        }
        <button icon color='red' onClick={this.toggle}>
          <Icon name='phone'/>
        </button>
      </Segment>
    )
  }
}

export default Text;