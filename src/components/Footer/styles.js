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
}));