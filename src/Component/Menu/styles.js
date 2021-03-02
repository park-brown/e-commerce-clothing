import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.only('md')]: {
			display: 'flex',
			padding: '2rem',
			flexGrow: 0,
			flexBasis: '60%',
			maxWidth: '60%',
			margin: 'auto',
		},
		[theme.breakpoints.only('sm')]: {
			flexGrow: 0,
			flexBasis: '85%',
			maxWidth: '85%',
			margin: '0 0 0 4rem',
		},
		[theme.breakpoints.down('sm')]: {
			padding: '2rem',
		},
	},
}));
