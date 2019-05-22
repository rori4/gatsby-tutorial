import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import { Form, Button } from "react-bootstrap"

export default () => (
  <div>
    <Header />
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-10">
          <div className="pt-5">
            <h1>Contact Us</h1>
            <Form>
              <Form.Group controlId="contactFoerm.Email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email..." />
              </Form.Group>
              <Form.Group controlId="contactFoerm.Subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject..." />
              </Form.Group>
              <Form.Group controlId="contactFoerm.Message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Button>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)
