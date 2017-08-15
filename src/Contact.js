import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, FormControl, ControlLabel, Checkbox, Button, FormGroup, Form} from 'react-bootstrap';



class Contact extends Component {




  render() {
    return (
        <div className="col-md-12">
        
        <div id="ContactPage">
        <h1>Contact Us</h1> 

        <Row>
          <Col sm="6">  
    <br></br>     
    <h4>If you have an issues please bring them to the attenion of an admin: </h4>
    <h4><ListGroup>
        <ListGroupItem>Shannan Riley</ListGroupItem>
<ListGroupItem>Sasha Terfous</ListGroupItem>
<ListGroupItem>Shannon Keane</ListGroupItem>
<ListGroupItem>Kate Jasper</ListGroupItem>
<ListGroupItem>Rhea Carroll</ListGroupItem>
<ListGroupItem>Orla Walsh</ListGroupItem>
<ListGroupItem>Megan Sims</ListGroupItem>
<ListGroupItem>Leah Stundon</ListGroupItem>
<ListGroupItem>Rebekah Daly</ListGroupItem>
</ListGroup>

<br></br>
    </h4></Col>

          <Col sm="6"> <br></br> <h4>Or Fill out or contact form!</h4>
         
  <Form horizontal>
    
    <FormGroup controlId="formControlsText">
      <Col componentClass={ControlLabel} sm={2}>
        Name
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Name" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>


    <FormGroup controlId="formControlsTextarea">
      <Col componentClass={ControlLabel} sm={2}>
      Message
      </Col>
       <Col sm={10}>
      <FormControl componentClass="textarea" placeholder="Enter message here" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit">
          Submit
        </Button>
      </Col>
    </FormGroup>
  </Form>
          </Col>
        </Row>

        



   

    <h4>If you experience problems with this website please bring them to the attenion of the developer by <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">Email</a>  </h4>
    <br></br>
        
    <h4>Don't forget to join our <a href="https://www.facebook.com/groups/861997640563323/">Facebook Group</a> or just search "Beauty Boxx" on Facebook!  </h4>
    
     
        </div>
        </div>
    );
  }
}

export default Contact;