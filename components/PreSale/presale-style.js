import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'presale' })(theme => ({
    action: {
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        borderRadius: 60,
        color: theme.palette.common.black,
        background: `linear-gradient(to bottom, ${theme.palette.secondary.light} 10%, ${theme.palette.accent.light} 100%)`,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
          margin: theme.spacing(0, 10)
        },
        '&:before': {
          content: '""',
          height: 160,
          position: 'absolute',
          zIndex: -1,
          width: 'calc(100% - 10px)',
          left: 5,
          top: -125,
          clipPath: 'polygon(13% 0%, 0% 100%, 100% 100%, 87% 0)',
          background: `linear-gradient(transparent 35%, ${theme.palette.secondary.light} 80%)`,
          [theme.breakpoints.down('sm')]: {
            display: 'none'
          }
        }
      },
      
}));
export default useStyles;