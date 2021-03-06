import React from "react"

// Import typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import { rhythm } from "../utils/typography"

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        Created as a POC for using Gatsby to dynamically create static documentation.
      </p>
    )
  }
}

export default Bio
