import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Card,
    CardMedia,
    CardContent,
    Typography,
} from '@material-ui/core';
import noImage from '../images/noImage.jpg';
import noQrCode from '../images/noQrCode.jpg';

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
        qr:{
            marginTop:"32px",
            width:"100px",
            height:"100px",
            margin:"auto auto"
        }
    })
)

const PersonCard = ({ _id, fullName, username, title, email, phoneNumber, dateofBirth, shortSummary, summary, createdAt, image, qrCode, githubLink  }) => {

    const convertRelativeTime = date => {
        return moment(date).fromNow();
    }

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Link to={`/persons/${username}`}>
                <CardMedia 
                    className={classes.media} 
                    image={image || noImage} 
                    title="Image"
                ></CardMedia>
            </Link>
            <div className={classes.overlay}>
                <Typography variant="h6">{fullName}</Typography>
                <Typography variant="body2">{convertRelativeTime(createdAt)}</Typography>
            </div>

            <CardContent>
                <Typography variant="h6" component="p" gutterBottom>
                    {title}
                </Typography>{" "}
                <Typography variant="h6" component="p" gutterBottom>
                    {githubLink}
                </Typography>{" "}
                <Typography variant="overline" component="p" gutterBottom>
                    {shortSummary}
                </Typography>{" "}
                <CardMedia 
                    className={classes.qr} 
                    image={qrCode || noQrCode} 
                    title="Image"
                ></CardMedia>
            </CardContent>
        </Card>
    )
}

export default PersonCard