import * as React from "react"
import { graphql } from 'gatsby'
import Nav from '../components/Nav/Nav.component';
import Status from '../components/Status/Status.component';
import CaseStudyBTN from "../components/CaseStudy/CaseStudyBTN.component";
import GetInTouch from "../components/GetInTouch/GetInTouch.component";
import './index.styles.scss';
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";

// markup
const IndexPage = ({ data }) => {
  return (
    <main className="page">
      <Nav />
      <Status />
      <div className="intro">
        <h1>
          Hi, I’m Eoin.
        </h1>
        <p className="large">
          I am an enthusiastic, self-motivated UX designer / Product Designer. I possess the mentality of combining user needs with styles designs to curate compelling and engaging products.
        </p>
      </div>
      <div className="case-studies">
        {
          data.allMarkdownRemark.edges.map(({node}) => (
            <CaseStudyBTN
              projectTitle = { node.frontmatter.title }
              projectSubtitle = { node.frontmatter.subtitle }
              projectSlug = { node.frontmatter.slug }
              projectImage = { node.frontmatter.finalDesign.childImageSharp.fluid.originalImg }
            />
          ))
        }
      </div>
      <GetInTouch />
      <div className="page-border" />
    </main>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark (sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            slug
            finalDesign {
              childImageSharp {
                fluid {
                  src
                  originalImg
                }
                gatsbyImageData(
                  width: 1200
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
