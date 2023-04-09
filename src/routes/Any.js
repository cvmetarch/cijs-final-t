import useStyles from "../components/Products/styles";
import { Typography } from "@material-ui/core";

const Any = ({routingPage, routingLevel}) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography className={routingLevel==='1' ? classes.title : classes.title2} variant="h3" gutterBottom>
                { routingPage }
            </Typography>
        </main >
    );
};

export default Any;