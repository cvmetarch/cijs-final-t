import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    title: {
        marginTop: '5%',
        textAlign: 'center',
        fontSize: '32px',
        fontWeight: 'bold',
    },
    title2: {
        marginTop: '5%',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
    },

    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    },
}));