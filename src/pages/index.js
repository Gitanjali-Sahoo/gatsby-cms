// import React from "react"
// import Layout from "../components/layout"
// import { graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"

// const IndexPage = ({ data }) => {
//   const { title, image } = data.allContentfulPages.edges[0].node

//   return (
//     <Layout>
//       <div className="content mx-2 mx-sm-5 defaultTemplate mt-auto">
//         <div>
//           <div>{title}</div>

//         </div>
//         <div className="defaultContent">
//           <GatsbyImage
//             className="my-3"
//             id="AboutImage"
//             alt={title}
//             image={image.gatsbyImage}
//           ></GatsbyImage>
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query {
//     allContentfulPages {
//       edges {
//         node {
//           id
//           title
//           image {
//             gatsbyImage(width: 300)
//           }
//         }
//       }
//     }
//   }
// `

// export default IndexPage

import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

export const query = graphql`
  query {
    allContentfulHero {
      edges {
        node {
          id
          title
          text {
            text
          }
          image {
            gatsbyImage(width: 400)
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { allContentfulHero } = data

  return (
    <Layout className="container">
      <div className="content my-4 mx-2 mx-sm-5 portfolioTemplate">
        <div >
          {allContentfulHero.edges.map(edge => {
            const { id, title, text, image } = edge.node

            return (
              <div className="col mb-4" key={id}>
                <div className=" h-100 home-page">
                <div className="card-body">
                    <h4 className="home-title">{title}</h4>
                    <p className="card-text">{text.text}</p>
                  </div>
                  <GatsbyImage
                    className="card-img-top hero-image"
                    alt={title}
                    image={image.gatsbyImage}
                  />

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
