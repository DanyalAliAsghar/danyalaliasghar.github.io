import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Layout, AIProjects } from '@components';
import { Main } from '@styles';

const ArchivePage = ({ location, data }) => (
  <Layout location={location}>
    <Helmet>
      <title>My work | Danyal Ali Asghar</title>
    </Helmet>
    <Main>
      <h1 className="medium-title">My selected work</h1>
      <AIProjects data={data.allMarkdownRemark.edges} />
    </Main>
  </Layout>
);
ArchivePage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};
export default ArchivePage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/ai-projects/" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            context
            summary
            tech
          }
          html
        }
      }
    }
  }
`;
