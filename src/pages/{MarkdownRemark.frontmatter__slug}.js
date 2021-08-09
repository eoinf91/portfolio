import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Nav from '../components/Nav/Nav.component';
import CSHeader from "../components/CSHeader/CSHeader.component";
import CSBody from '../components/CSBody/CSBody.component';

import '../components/CSBody/CSBody.styles.scss'

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter } = markdownRemark
    const iaImage = getImage(data.markdownRemark.frontmatter.iaImage)
    const userFlowsImage = getImage(data.markdownRemark.frontmatter.userFlows)
    const wireframesImg01 = getImage(data.markdownRemark.frontmatter.wireframesImg01)
    const wireframesImg02 = getImage(data.markdownRemark.frontmatter.wireframesImg02)
    const wireframesImg03 = getImage(data.markdownRemark.frontmatter.wireframesImg03)
    const wireframesImg04 = getImage(data.markdownRemark.frontmatter.wireframesImg04)
    const wireframesImg05 = getImage(data.markdownRemark.frontmatter.wireframesImg05)
    const theProcessImage = getImage(data.markdownRemark.frontmatter.theProcess)
    const finalDesignImage = getImage(data.markdownRemark.frontmatter.finalDesign)
    return (
        <div className="template case-study">
            <Nav />
            <CSHeader
                pageTitle = { frontmatter.title }
                pageSubtitle = { frontmatter.subtitle }
                pageCTA = { frontmatter.cta }
                prototypeURL = { frontmatter.prototypeURL }
                featuredImage = { frontmatter.featuredImage.childImageSharp.fluid.originalImg }
                bgColor = { frontmatter.bgColor }
            />
            
            <CSBody
                pageTitle = { frontmatter.title }
                projectOverview = { frontmatter.projectOverview }
                designTeam = { frontmatter.designTeam }
                pageCTA = { frontmatter.cta }
                prototypeURL = { frontmatter.prototypeURL }
                duration = { frontmatter.duration }
                myRole01 = { frontmatter.myRole01 }
                myRole02 = { frontmatter.myRole02 }
                myRole03 = { frontmatter.myRole03 }
                myRole04 = { frontmatter.myRole04 }
                theProcess = { theProcessImage }
                uxResearch01 = { frontmatter.uxResearch01 }
                uxResearch02 = { frontmatter.uxResearch02 }
                iaImage = { iaImage }
                userFlows = { userFlowsImage }
                wireframesImg01 = { wireframesImg01 }
                wireframesImg02 = { wireframesImg02 }
                wireframesImg03 = { wireframesImg03 }
                wireframesImg04 = { wireframesImg04 }
                wireframesImg05 = { wireframesImg05 }
                clientFeedback = { frontmatter.clientFeedback }
                fontsUsed01 = { frontmatter.fontsUsed01 }
                fontsUsed02 = { frontmatter.fontsUsed02 }
                fontsUsed03 = { frontmatter.fontsUsed03 }
                fontsUsed04 = { frontmatter.fontsUsed04 }
                colorsUsed01 = { frontmatter.colorsUsed01 }
                colorsUsed02 = { frontmatter.colorsUsed02 }
                colorsUsed03 = { frontmatter.colorsUsed03 }
                colorsUsed04 = { frontmatter.colorsUsed04 }
                colorsUsed05 = { frontmatter.colorsUsed05 }
                finalDesign = { finalDesignImage }
            />
        </div>
    )
}

export const pageQuery = graphql`
    query($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
                subtitle
                cta
                prototypeURL
                projectOverview
                designTeam
                duration
                myRole01
                myRole02
                myRole03
                myRole04
                featuredImage {
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
                bgColor
                theProcess {
                    childImageSharp {
                        gatsbyImageData(
                            width: 1080
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                uxResearch01
                uxResearch02
                iaImage {
                    childImageSharp {
                        gatsbyImageData(
                            width: 1200
                            placeholder: TRACED_SVG
                            formats: [AUTO, WEBP, AVIF]
                            quality: 100
                        )
                    }
                }
                userFlows {
                    childImageSharp {
                        gatsbyImageData(
                            width: 1080
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                wireframesImg01 {
                    childImageSharp {
                        gatsbyImageData(
                            width: 1080
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                wireframesImg02 {
                    childImageSharp {
                        gatsbyImageData(
                            width: 1080
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                wireframesImg03 {
                    childImageSharp {
                        gatsbyImageData(
                            width: 1080
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                wireframesImg04 {
                    childImageSharp {
                        gatsbyImageData(
                            width: 1080
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                wireframesImg05 {
                    childImageSharp {
                        gatsbyImageData(
                            width: 1080
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                finalDesign {
                    childImageSharp {
                        gatsbyImageData(
                            width: 1080
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                clientFeedback
                fontsUsed01
                fontsUsed02
                fontsUsed03
                fontsUsed04
                colorsUsed01
                colorsUsed02
                colorsUsed03
                colorsUsed04
                colorsUsed05
            }
        }
    }
`