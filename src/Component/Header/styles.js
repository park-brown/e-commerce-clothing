import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	header: {
		flexGrow: 1,
		marginBottom: '1rem',
	},
	root: {
		backgroundColor: 'white',
	},
	toolbar: {
		justifyContent: 'space-between',
	},
	button: {
		fontSize: '1.1rem',
		fontWeight: 700,
	},
}));
