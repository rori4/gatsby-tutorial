import React from "react"

import PrimaryLayout from "../layouts/PrimaryLayout"
import { Form, Button } from "react-bootstrap"

export default () => (
  <PrimaryLayout column="col-10">
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
  </PrimaryLayout>
)
