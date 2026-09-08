import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import { Main } from '@styles';

const NotesPage = ({ location }) => (
  <Layout location={location}>
    <Helmet>
      <title>My notes | Danyal Ali Asghar</title>
      <meta name="robots" content="noindex, follow" />
    </Helmet>
    <Main>
      <h1 className="medium-title">My engineering work</h1>
      <p>I share the systems I have built and the work behind them in my portfolio.</p>
      <p>
        <Link to="/#ai-projects">Explore my projects &rarr;</Link>
      </p>
    </Main>
  </Layout>
);
NotesPage.propTypes = { location: PropTypes.object.isRequired };
export default NotesPage;
