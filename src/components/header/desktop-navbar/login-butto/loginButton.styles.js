import { makeStyles } from '@mui/styles';

export const loginButtonStyles = makeStyles((theme) => ({
	login_button: {
		boxSizing: 'border-box',

		padding: '0',

		display: 'flex',
		flexDirection: 'column',

	},
	lb_button: {
		width: '10rem',
		height: '2.5rem',
	},
	lb_close_button: {
		position: 'absolute !important',
		inset: 'auto !important'
	},
	lb_menu: {
		width: '40vw',
		height: '100%',
		boxSizing: 'border-box',
		padding: '1rem',

		background: theme.palette.primary.main,

		position: 'relative',

		[theme.breakpoints.down('sm')]: {
			width: '100vw'
		},
	},
	lb_txt_wrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		boxSizing: 'border-box',
		padding: '22%',

		width: '100%',
		height: '100%',

		gap: '40px'
	},
	lb_title: {
		textAlign: 'center'
	},
	lb_txt: {

	},
	lb_form: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: '20px',
		gap: '1rem',

	},
	lb_login_button: {
		width: '100%',
		height: '38px',
		marginLeft: '20px',
	},
	phone_registration: {
		border: `2px solid`,
		borderColor: theme.palette.primary.main,
		borderRadius: `5px`,
	},

}))