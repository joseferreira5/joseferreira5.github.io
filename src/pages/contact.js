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
  align-items: center;
  justify-content: space-around;
  height: 15em;
`

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
`

const Buttons = styled.div`
  display: flex;
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
          <label>
            Name <input type="text" name="name" id="name" />
          </label>
          <label>
            Email <input type="email" name="email" id="email" />
          </label>
          <label>
            Subject <input type="text" name="subject" id="subject" />
          </label>
          <label>Message</label>
          <textarea name="message" id="message" rows="5" />
          <Buttons>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
          </Buttons>
        </Form>
      </Container>
    </Layout>
  )
}
