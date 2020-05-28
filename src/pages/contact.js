import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f8f7f6;
  flex-wrap: wrap;
  min-height: 500px;
  width: 100%;
  padding: 2em;
  border-radius: 1em;
  line-height: 1.6;

  @media (max-width: 480px) {
    padding: 1em;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 22em;
`

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    margin-right: 1em;
  }
`

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <Container>
        <Title>Contact Me</Title>
        <Form
          method="POST"
          action="https://getform.io/f/06139ea0-fac1-44f1-8579-f022d4a83d2f"
        >
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="8" cols="28" />
          <Buttons>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
          </Buttons>
        </Form>
      </Container>
    </Layout>
  )
}
