import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AboutTemplate from "../templates/AboutTemplate"
import ContactTemplate from "../templates/ContactTemplate"
import PortfolioTemplate from "../templates/PortfolioTemplate"
import DefaultTemplate from "../templates/DefaultTemplate"
import NotFoundTemplate from "../templates/404Template"


export const query = graphql`
  query ($id: String) {
    contentfulPages(id: { eq: $id }) {
      id
      title
      url
      template
      text1
      text {
        text
      }
      content {
        raw
      }
      image {
        gatsbyImage(width: 500, height: 400)
      }
    }
  }
`


const Page = props => {
    const { data } = props
    const { contentfulPages } = data

    const getTemplate = contentfulPages => {
      if (!contentfulPages) {
        return <NotFoundTemplate />; // or handle accordingly
      }

      switch (contentfulPages.template) {
        case "about":
          return <AboutTemplate {...contentfulPages} />;
        case "404":
          return <NotFoundTemplate />;
        case "contact":
          return <ContactTemplate {...contentfulPages} />;
        case "portfolio":
          return <PortfolioTemplate {...contentfulPages} />;
        default:
          return <DefaultTemplate {...contentfulPages} />;
      }
    }

    return <Layout>{getTemplate(contentfulPages)}</Layout>;
  }

  export default Page;
