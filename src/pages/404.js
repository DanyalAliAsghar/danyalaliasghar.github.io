import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import styled from 'styled-components';
import { theme, mixins, Main } from '@styles';

const StyledMain = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
  text-align: center;
  h1 {
    color: ${theme.colors.green};
    font-size: 100px;
    line-height: 1;
  }
  p {
    font-size: 28px;
  }
  a {
    ${mixins.bigButton};
    margin-top: 20px;
  }
`;
const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <Helmet>
      <title>Page not found | Danyal Ali Asghar</title>
      <meta name="robots" content="noindex, follow" />
    </Helmet>
    <StyledMain>
      <h1>404</h1>
      <p>I couldn’t find that page.</p>
      <Link to="/">Back to my portfolio</Link>
    </StyledMain>
  </Layout>
);
NotFoundPage.propTypes = { location: PropTypes.object.isRequired };
export default NotFoundPage;
