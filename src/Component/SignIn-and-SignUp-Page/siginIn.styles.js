import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	signIn: {
		[theme.breakpoints.down('xs')]: {
			width: '70vw',
			display: 'flex',
			flexDirection: 'column',
			marginRight: '20px',
		},
		[theme.breakpoints.up('md')]: {
			width: '35vw',
			display: 'flex',
			flexDirection: 'column',
			marginRight: '20px',
		},
	},
	buttonGroup: {
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
			justifyContent: 'space-between',
		},
		[theme.breakpoints.up('xs')]: {
			display: 'flex',

			justifyContent: 'space-between',
		},
		[theme.breakpoints.up('md')]: {
			display: 'flex',
			justifyContent: 'space-around',
		},
	},
	h2: {
		[theme.breakpoints.down('xs')]: {
			fontSize: '19px',
		},
	},
	signInButton: {
		[theme.breakpoints.down('xs')]: {
			marginRight: '4px',
		},
	},
}));
