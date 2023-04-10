import { makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        alignItems: 'center',
    },   

    image: {
        marginRight: '10px',
    },
    
    ul: {
        listStyle: 'none',
        padding: 0,
        width: '80%',
    },

    footer: {
        width: '80%',      
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        fontSize: 'smaller',        
        alignItems: 'start',
        padding: '25px',
        borderTop: '1px solid gray',
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

    ban3: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        border: 'solid 1px gray',
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
}));