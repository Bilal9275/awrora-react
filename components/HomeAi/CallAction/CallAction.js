import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import link from '~/public/text/link';
import { useText } from '~/theme/common';
import useStyles from './action-style';
import pandaAI from "../../../public/images/pandaAI.jpeg"
function CallAction() {
  // Translation Function
  const { t } = useTranslation('common');
  const { classes: text } = useText();
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const { classes } = useStyles();

  return (
    <Container fixed={isDesktop} maxWidth="lg">
      <ScrollAnimation
        animateOnce
        animateIn="fadeInUpShort"
        offset={100}
        delay={500}
        duration={0.5}
      >
        <div className={classes.action}>
          <div className={classes.wrap}>
            <h4 className={text.title}>
              {t('ai-landing.cta_title')}
            </h4>
            <p className={text.subtitle2}>
              {t('ai-landing.cta_desc')}
            </p>
            <div className={classes.btnArea}>
              <Button size="large" color="black" variant="contained" onClick={() => window.location.href = "https://ted-ai.netlify.app"} className={classes.button}>
                {t('btn_get')}
              </Button>
              <Button size="large" color="black" variant="outlined" href={link.about} className={classes.button}
              onClick={()=>window.open("https://drive.google.com/file/d/14yx4rbA_JerYkWAsXb6W2oTzbIgzjOt-/view", "_blank")}
              >
                {t('btn_detail')}
              </Button>
            </div>
            <img  src={pandaAI} alt="pandaAI" className='img-fluid' width="100%" style={{borderRadius: "15px"}}/>
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  );
}

CallAction.propTypes = {

};

export default CallAction;
