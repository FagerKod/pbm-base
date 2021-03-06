import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <>
    <div
      className='image-container'
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}>
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}>
        <h1 className='bg-gray-100 sm:bg-blue-600 md:bg-gray-400'>
          {title}HEJ HEJ HEJ!!!!
        </h1>
        <button className='bg-red-400 hover:bg-blue-100'>KLick</button>
        <h3 className='bg-gray-100 sm:bg-blue-600 md:bg-gray-400'>
          {subheading}
        </h3>
      </div>
    </div>
    <section className='section section--gradient'>
      <div className='bg-pink-700'>
        <h1 className='title'>{mainpitch.title}</h1>

        <h3 className='subtitle'>{mainpitch.description}</h3>
      </div>
      <div className='bg-white md:bg-pink-500 hover:bg-red-200'>
        <h3 className='has-text-weight-semibold is-size-2'>{heading}</h3>
        <p>{description}</p>
      </div>
      <Features gridItems={intro.blurbs} />

      <Link className='btn' to='/products'>
        See all products
      </Link>

      <div className='column is-12'>
        <h3 className='has-text-weight-semibold is-size-2'>Latest stories</h3>
        <BlogRoll />

        <Link className='btn' to='/blog'>
          Read more
        </Link>
      </div>
    </section>
  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

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
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
