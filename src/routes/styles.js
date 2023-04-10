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
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
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
        justifyContent: 'center',        
    },

    preFooter: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        marginBottom: '15px',
        gap: '10px',
        borderTop: '1px solid gray',
        padding: '10px 0 0 0',
    },

    newsReview: {
        width: '100%',
        marginBottom: '15px',
        borderTop: '1px solid gray',
        padding: '15px 0 15px 0',
        position: 'relative',        
    },

    overLay: {
        position: 'absolute',        
        opacity: '0%',
        bottom: '5%',
        backgroundColor: 'white',
        border: '1px solid darkblue',
        color: 'darkblue',
        fontWeight: 'bold',
        borderRadius: '5px',
        padding: '5px',
        textAlign: 'center',
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