import React from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import { useTranslation } from 'next-i18next';
import Parallax from '../Parallax/ParallaxRight';
import Title from '../../Title';
import useStyles from './faq-style';
import panda from "../../../public/images/panda.png"
const faqData = [
  {
    q: 'What is TedAI and why should I be interested?',
    a: "TedAI is a pioneering platform at the intersection of blockchain and artificial intelligence, designed to make these technologies accessible and enjoyable for everyone. Whether you're a developer, a creator, or simply curious about the future of tech, TedAI offers you a platform to learn, create, and innovate. By participating in our token sale, you're not just investing in a token; you're becoming part of a community set to shape the future of decentralized technology."
  },
  {
    q: 'How does the TedAI token sale work?',
    a: "Our token sale is your opportunity to join the TedAI journey early. The sale is structured in tiers, with the price of tokens increasing as the sale progresses. This incentivizes early participation, offering better prices to our initial supporters. Plus, if less than 60% of tokens are sold initially, we extend the sale, ensuring everyone gets a chance to participate. Unsold tokens will be redistributed to participants, adding value to your early support."
  },
  {
    q: 'How do I participate in the TedAI token sale, and who can join?',
    a: "The TedAI token sale is designed to welcome participants from across the globe, embracing a spirit of inclusivity and innovation. Everyone interested in being at the forefront of blockchain and AI technology is invited to join. To participate, simply visit our website for a step-by-step guide on acquiring your TedAI tokens. Our platform and community are built on the principle that everyone, everywhere, should have the opportunity to contribute to and benefit from the transformative potential of TedAI. Join us, and let’s pioneer the future together, no matter where you are in the world."
  },
  {
    q: 'What makes TedAI different from other blockchain and AI projects?',
    a: "TedAI stands out through its commitment to education, ease of use, and community engagement. Unlike projects that focus solely on technology, TedAI is building an ecosystem where technology serves people. Our AI-powered platforms for education, meme coin creation, and NFT artistry are designed with you in mind—making learning fun, creation accessible, and participation rewarding."
  },
  {
    q: 'How can I stay updated on TedAI developments and join the community?',
    a: "Staying connected with TedAI is easy! Visit our website and sign up for our newsletter for the latest updates. Join our vibrant community on social media platforms like Twitter and Telegram, where you can interact with fellow supporters and our team. We believe in building TedAI with our community's input and enthusiasm, so your voice and ideas are always welcome."
  },
];

function Faq() {
  const { classes } = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const { t } = useTranslation('common');
  const [expanded, setExpanded] = React.useState();
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <div className={classes.parallax}>
        <Parallax />
      </div>
      <Container fixed>
        <Grid container spacing={isTablet ? 2 : 8}>
          <Grid item md={5}>
            <Title text={t('ai-landing.faq_subtitle')} align={isMobile ? 'center' : 'left'} />
            {!isTablet && (
              <ScrollAnimation
                animateOnce
                animateIn="fadeInUpShort"
                offset={100}
                delay={500}
                duration={0.5}
              >
                <div className={classes.illustration}>
                  <img src={panda} alt="illustration" />
                </div>
              </ScrollAnimation>
            )}
          </Grid>
          <Grid item md={7}>
            <div className={classes.accordion}>
              {faqData.map((item, index) => (
                <div className={classes.item} key={index.toString()}>
                  <Accordion
                    classes={{
                      root: classes.paper
                    }}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                  >
                    <AccordionSummary
                      classes={{
                        content: classes.content,
                        expanded: classes.expanded,
                      }}
                    >
                      <Typography className={classes.heading}>{item.q}</Typography>
                      <ExpandMoreIcon className={classes.icon} />
                    </AccordionSummary>
                    <AccordionDetails
                      classes={{
                        root: classes.detail,
                      }}
                    >
                      <Typography>
                        {item.a}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Faq;
