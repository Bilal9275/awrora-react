import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import Settings from './Settings';
import useStyles from '../header-style';
import link from '~/public/text/link';

function UserMenu(props) {
  const { classes } = useStyles();
  const theme = useTheme();
  const { onToggleDark, onToggleDir } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const { t } = useTranslation('common');

  return (
    <div className={classes.userMenu}>
      { isDesktop && (
        <div>
          <Button color="primary" href="https://ted-ai.netlify.app/signin" >{t('login')}</Button>
          <Button variant="contained" color="primaryLight" href="https://ted-ai.netlify.app/signup" >{t('register')}</Button>
          <span className={classes.vDivider} />
        </div>
      )}
      <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} />
    </div>
  );
}

UserMenu.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired
};

export default UserMenu;
