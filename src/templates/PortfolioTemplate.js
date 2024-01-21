

import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { renderRichText } from "gatsby-source-contentful/rich-text"

const PortfolioTemplate = ({ title, content }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolio {
        edges {
          node {
            id
            title
            slug
            text {
              text
            }

            images {
              gatsbyImage(width: 1000)
            }
          }
        }
      }
    }
  `)

  return (
    <div className="container">
      <div className="content my-4 mx-2 mx-sm-5 portfolioTemplate">
        <h2>{title}</h2>
        {content && (
          <div className="portfolio-content">
            <div>{renderRichText(content)}</div>
          </div>
        )}
        <div className="posts row align-items-start justify-content-center mx-4 mx-sm-1">
          {data.allContentfulPortfolio.edges.map(edge => {
            const slug = edge.node.slug
            const truncatedText = edge.node.text.text.slice(0, 60)
            return (
              <div
                className="post col-sm-6 col-md-4 col-lg-3 border m-2 py-3 d-flex flex-column text-center"
                key={edge.node.id}
              >
                <h4 className="pb-3" id="postTitle">
                  {edge.node.title}
                </h4>
                <GatsbyImage
                  className="my-3 postImage mx-auto"
                  id="postImage"
                  alt={edge.node.title}
                  image={edge.node.images.gatsbyImage}
                ></GatsbyImage>
                <p className="mt-auto">{truncatedText}...</p>
                <Link to={`/portfolio/${slug}`} className="" id="postSlug">
                  {" "}
                  Read more..{" "}
                </Link>
              </div>
            )
          })}
        </div>
        <Link className="absolute bottom-0" to="/">
          Go back to the homepage
        </Link>
      </div>
    </div>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default PortfolioTemplate
