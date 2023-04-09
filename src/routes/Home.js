import useStyles from "../components/Products/styles";
import { Typography } from "@material-ui/core";

const Home = () => {
    const classes = useStyles(); 

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>
                TRANG CHỦ
            </Typography>
        </main >
        );
};

export default Home;