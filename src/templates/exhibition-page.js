import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const ExhibitionPageTemplate = ({
  title,
  image,
  artist,
  description,
  objkts
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          backgroundColor: '#f40',
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">By {artist}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

ExhibitionPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  artist: PropTypes.string,
  objkts: PropTypes.object,
}

const ExhibitionPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ExhibitionPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
        artist={frontmatter.artist}
        objkts={frontmatter.objkts}
      />
    </Layout>
  )
}

ExhibitionPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ExhibitionPage

export const exhibitionPageQuery = graphql`
  query ExhibitionPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        objkts
        artist
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