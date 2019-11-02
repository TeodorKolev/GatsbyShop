import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { formSpaceID } from "../utils/constants"

class Contact extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Contact Us" keywords={[`gatsby`, `application`, `react`]} />
        <div className="Contact-us">
          <div className="container">
            <form
              action={'https://formspree.io/' + formSpaceID}
              method="POST"
              name="contact"
            >
              <div>
                <label>Your Name: </label>
                <input type="text" name="name" />
              </div>
              <div>
                <label>Your Email: </label>
                <input type="email" name="email" />
              </div>
              <div>
                <label>Message: </label>
                <textarea name="message"></textarea>
              </div>
              <div>
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact
