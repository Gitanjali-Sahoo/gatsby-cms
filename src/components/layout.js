import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/style.css"
import { Link } from "gatsby"
import useNavigation from "../hooks/use-navigation"
import { graphql, useStaticQuery } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import styled from "styled-components"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `)

  const { allContentfulPages } = useNavigation()

 
  return (
    <>
      <Navbar  id="nav-color"  expand="lg">
        <Navbar.Brand as={Link} to="/">
          {data.site.siteMetadata.title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {allContentfulPages.edges.map(edge => (
              <div key={edge.node.template}>
                {edge.node.template !== "home" && (
                  <Nav.Link
                    as={Link}
                    to={`/${edge.node.url}`}
                    key={edge.node.url}
                  >
                    {edge.node.title}
                  </Nav.Link>
                )}
              </div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main>{children}</main>
      <Footer>
        <p className="footer">
          © {new Date().getFullYear()}, {data.site.siteMetadata.author}
        </p>
      </Footer>
    </>
  )
}

export default Layout

const Footer = styled.section`
background-color: skyblue;
text-align: center;
font-weight: 500;
padding: 20px;
margin-top:20px;
`
