import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import BlueGradient from '~/components/Artworks/BlurGradient';
import Header from '~/components/Header/BlogHeader';
import Article from '~/components/Company/Blog/Article';
import Sidebar from '~/components/Company/Blog/Sidebar';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';

function BlogDetail(props) {
  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Blog'}
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={cx(classes.mainWrap, classes.higherTop)}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <BlueGradient />
        <div className={classes.innerPage}>
          <div className={classes.spaceBottom}>
            <Container>
              <Grid container spacing={4}>
                <Grid item md={12} xs={12}>
                  <Article />
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
        <div id="footer" className={classes.spaceTop}>
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

BlogDetail.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default BlogDetail;
