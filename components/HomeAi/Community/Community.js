import React from 'react';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@mui/material/Container';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import ParallaxTitle from '../../Title/ParallaxTitle';
import { useText, useTextAlign } from '~/theme/common';
import useStyles from './community-style';
import Grid from '@mui/material/Grid';
import roadmap from "../../../public/images/roadmap.jpeg"
import useMediaQuery from '@mui/material/useMediaQuery';
function Business() {
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));
  const { t } = useTranslation('common');
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();

  return (
    <Container className={classes.root}>
      <ParallaxTitle
        bgTitle={t('ai-landing.community_bgtitle')}
        mainTitle={t('ai-landing.cta_title')}
        color={theme.palette.mode === 'dark' ? 'tripleDark' : 'tripleLight'}
      />
      <Box px={5}>
        <p className={cx(text.subtitle2, align.textCenter)}>
          {t('ai-landing.community_desc')}
        </p>
      </Box>
      <Grid container className={classes.step} spacing={isDesktop ? 6 : 0}>
      <img src={roadmap} alt='roadmap' width="100%"/>
        {/* {businessData.map((item, index) => (
          <div key={index.toString()}>
            <ScrollAnimation
              animateOnce
              offset={150}
              delay={200 * index}
              animateIn="zoomInShort"
              duration={0.5}
            >
              <div
                className={cx(classes.circle, classes['fill' + item.color], classes[item.type])}
                style={{ top: item.y + 'px', left: item.x + 'px' }}
              >
                
                <svg style={{ transform: `rotate(${item.rotate}deg)` }}>
                  <use xlinkHref={'/images/decoration/circle-' + item.type + '.svg#main'} />
                </svg>
                <ButtonBase href="javascipt:void(0)" className={classes.paper}>
                  <i className={item.icon} />
                  <h6>
                    {item.name}
                  </h6>
                </ButtonBase>
              </div>
            </ScrollAnimation>
          </div>
        ))} */}
      </Grid>
    </Container>
  );
}

export default Business;
