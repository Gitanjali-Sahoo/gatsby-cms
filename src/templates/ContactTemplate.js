import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ContactTemplate = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLinks {
        edges {
          node {
            title
            url
            image {
              gatsbyImageData(width: 30)
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Content className="content mx-3 mx-sm-5 contactTemplate">
        <h2>{title}</h2>
        <div className="d-flex flex-column flex-sm-row">
          <div>
            {data.allContentfulLinks.edges.map(edge => {
              const imageData = getImage(edge.node.image)
              return (
                <div className="link mb-2" key={edge.node.title}>
                  {/* {imageData && (
                    <GatsbyImage
                      className="my-3 justify-self-center me-0"
                      id="AboutImage"
                      alt={title}
                      image={imageData}
                    />
                  )} */}
                  <a
                    href={edge.node.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {imageData && (
                      <GatsbyImage
                        className="my-3 justify-self-center me-0"
                        id="AboutImage"
                        alt={title}
                        image={imageData}
                      />
                    )}
                    {edge.node.title}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </Content>
    </div>
  )
}

export default ContactTemplate

const Content = styled.section`
  .contactTemplate {
    width: 100vw;
  }
  #AboutImage {
    height: 20px;
    width: 20px;
  }
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 992px) {
    .contactTemplate {
      width: 50vw;
    }
  }
  a.link {
    color: black;
    text-decoration: none;
    height: 34px;
    padding-top: 20px;
  }
  .contact-content {
    transform: rotate(-10deg);
    font-size: 1.6em;
  }
`
