import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content from '../components/Content'
import Logo from '../components/Logo'

import Layout from '../components/Layout'
import ArtistRoll from '../components/ArtistRoll'

export const IndexPageTemplate = ({
  content
}) => (
  <div>
    <div style={{ background: 'black', height: '100vh' }} className="hero">
      <Logo className="logo-text-white"/>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">

                <div className="content">
                  <div className="tile">
                    <h1 className="title"><Logo/></h1>
                  </div>
                  <div className="tile">
                    <Content content={content} className="artist-post-content"/>
                  </div>
                </div>

                <div className="column is-12">
                  <h3 className="side-title">
                    ARTISTS
                  </h3>
                  <ArtistRoll />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  content: PropTypes.string
}

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  console.log(data)

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        content={html}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.string
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
