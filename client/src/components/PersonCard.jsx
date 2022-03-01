import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Card,
    Chip,
    Button,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
} from '@material-ui/core';
// import noImage from '../images/noimage.jpg';

const useStyles = makeStyles(
    (theme) => ({
        root: {
            maxWidth: 374,
            position: "relative",
        },
        media: {
            height: 0,
            paddingTop: "56.25%", // 16:9
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backgroundBlendMode: "darken",
        },
        
        overlay: {
            position: "absolute",
            top: "20px",
            left: "20px",
            color: "white",
        },
        chip: {
            marginTop: theme.spacing(1),
        },
    })
)

const PersonCard = ({ _id, fullName, shortSummary, createdAt }) => {
    
    const convertRelativeTime = date => {
        return moment(date).fromNow();
    }

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Link to={`/persons/${_id}`}>
                <CardMedia 
                    className={classes.media} 
                    // image={image || noImage} 
                    title="Image"
                ></CardMedia>
            </Link>
            <div className={classes.overlay}>
                <Typography variant="h6">Mr/Mrs</Typography>
                <Typography variant="body2">{convertRelativeTime(createdAt)}</Typography>
            </div>

            <CardContent>
                <Typography variant="h6" component="p" gutterBottom>
                    {fullName}
                </Typography>{" "}
                <Typography variant="overline" component="p" gutterBottom>
                    {shortSummary}
                </Typography>{" "}
                {/* <Typography variant="body2" component="p">
                    {content?.substring(0, 250) + "..."}
                </Typography> */}
                {/* <Chip label={`# ${tag}`} variant="outlined" className={classes.chip} /> */}
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                <Link to={`/persons/${_id}`}>See more..</Link>
                </Button>
            </CardActions>
        </Card>
    )
}

export default PersonCard