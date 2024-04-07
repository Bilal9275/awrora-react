import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import link from '~/public/text/link';
import { useText } from '~/theme/common';
import useStyles from "./presale-style"

function PreSale() {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const { classes } = useStyles();
  return (
    <div>PreSale</div>
  )
}

export default PreSale