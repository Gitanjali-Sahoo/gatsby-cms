// import React from "react"
// import { GatsbyImage } from "gatsby-plugin-image"

// const AboutTemplate = ({ title, image, text }) => {
//   return (
//     <div id="">
//       <h1>{title}</h1>
//       <div className="about-class">
//         <p className="about-text">{text.text}</p>
//         <GatsbyImage
//           className="about-image"
//           id="AboutImage"
//           alt={title}
//           image={image.gatsbyImage}
//         />
//       </div>
//     </div>
//   )
// }

// export default AboutTemplate
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const AboutTemplate = ({ title, image, text }) => {
  return (
    <AboutContainer>
      <h1>{title}</h1>
      <AboutContent>
        <AboutText>{text.text}</AboutText>
        <AboutImage
          id="AboutImage"
          alt={title}
          image={image.gatsbyImage}
          className="about-image"
        />
      </AboutContent>
    </AboutContainer>
  )
}

export default AboutTemplate

const AboutContainer = styled.div`
  text-align: center;
  padding: 20px;
 
`

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

const AboutText = styled.p`
  text-align: left;
  margin-bottom: 20px;
  flex: 1; /* Equal flex distribution */

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`

const AboutImage = styled(GatsbyImage)`
  max-width: 100%;
  height: auto;
  flex: 1; /* Equal flex distribution */
  border-radius: 50%;
`
