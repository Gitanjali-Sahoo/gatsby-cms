import React from "react"
import Layout from "../components/layout"


import { GatsbyImage } from "gatsby-plugin-image"


const DefaultTemplate = ({ title, image }) => {

  return(
  <Layout>
    <div className="content mx-2 mx-sm-5 defaultTemplate mt-auto">
      <div>
        <div>{title}</div>
      </div>
      <div className="defaultContent">
        <GatsbyImage
          className="my-3"
          id="AboutImage"
          alt={title}
          image={image.gatsbyImage}
        ></GatsbyImage>
      </div>
    </div>
  </Layout>
  )
}

export default DefaultTemplate
