import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	total: {
		[theme.breakpoints.down('xs')]: {
			fontSize: '1rem',
			marginTop: '30px',
			marginLeft: 'auto',
			fontWeight: 'bold',
		},
		[theme.breakpoints.up('xs')]: {
			fontSize: '1.5rem',
			marginTop: '30px',
			marginLeft: 'auto',
			fontWeight: 'bold',
		},
	},
}));
