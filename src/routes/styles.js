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

    midContainer : {
    width: '100%',
    height: 'max-content',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '15px',
    paddingTop: '15px',
    position: 'relative',
    },

    bottomContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        justifyContent: 'space-between',
    },

    preFooter: {
        width: '80',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        marginBottom: '15px',
        gap: '10px',
        borderTop: '1px solid gray',
        padding: '10px 0 0 0',
    },

    ban3: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        border: 'solid 1px gray',
    },

    abLeft: {
        position: 'relative',
        textAlign: 'center',
        width: '66.7%',
    },

    abRight: {
        width: '33.3%',
    },

    abUs :{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '80%',
        transform: 'translate(-50%, -50%)',
    },


}));