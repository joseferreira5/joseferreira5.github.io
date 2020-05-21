import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
`

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <Container>
        <Title>Contact Me</Title>
        <Form method="post" action="#">
          <label>
            Name
            <input type="text" name="name" id="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" id="email" />
          </label>
          <label>
            Subject
            <input type="text" name="subject" id="subject" />
          </label>
          <label>
            Message
            <textarea name="message" id="message" rows="5" />
          </label>
          <button type="submit">Send</button>
          <input type="reset" value="Clear" />
        </Form>
      </Container>
    </Layout>
  )
}
