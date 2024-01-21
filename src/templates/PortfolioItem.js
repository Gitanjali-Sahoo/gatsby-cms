// import React from "react"
// import { graphql, Link } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
// import Layout from "../components/layout"
// import styled from "styled-components"

// export const query = graphql`
//   query ($slug: String!) {
//     contentfulPortfolio(slug: { eq: $slug }) {
//       title
//       text {
//         text
//       }
//       images {
//         gatsbyImage(width: 500)
//       }
//     }
//   }
// `

// const PortfolioItem = props => {
//   const { title, text, images } = props.data.contentfulPortfolio
//   return (
//     <Layout>
//       <div className="mx-4 h-100">
//         <div className="content">
//           <h2 className="mt-3">{title}</h2>
//           <GatsbyImage
//             className="my-3"
//             id="AboutImage"
//             alt={title}
//             image={images.gatsbyImage}
//             style={{alignItems:"center"}}
//           ></GatsbyImage>
//           <p className="mt-5">{text.text}</p>

//         </div>
//         <Link to="/portfolio/">Back to the Portfolio Page</Link>
//       </div>
//     </Layout>
//   )
// }

// export default PortfolioItem

import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import styled from "styled-components"

export const query = graphql`
  query ($slug: String!) {
    contentfulPortfolio(slug: { eq: $slug }) {
      title
      text {
        text
      }
      images {
        gatsbyImage(width: 500)
      }
    }
  }
`

const PortfolioItem = props => {
  const { title, text, images } = props.data.contentfulPortfolio
  return (
    <Layout>
      <div className="mx-4 h-100">
        <div className="content">
          <h2 className="mt-3">{title}</h2>

          <p className="mt-2">{text.text}</p>
          <CenteredImage>
            <GatsbyImage
              className="my-3"
              id="AboutImage"
              alt={title}
              image={images.gatsbyImage}
            />
          </CenteredImage>
        </div>
        <Link to="/portfolio/">Back to the Portfolio Page</Link>
      </div>
    </Layout>
  )
}

const CenteredImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Optional: Set a specific height if needed */
`

export default PortfolioItem
