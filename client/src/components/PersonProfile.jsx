import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Paper, Divider, Button, Chip } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
// import noImage from '../images/noimage.jpg'
import { fetchSinglePerson } from '../actions/person'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        marginBottom: theme.spacing(8),
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
    },
    summary: {
        marginTop: theme.spacing(3),
    },
    image: {
        width: "100%",
        borderRadius: 5,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(4),
    },
    chip: {
        marginTop: theme.spacing(1),
    },
}));

const PersonProfile = ({ history, location, match }) => {

    const { id } = match.params;

    const dispatch = useDispatch();

    const selectedPerson = useSelector(state => state.persons.selectedPerson);

    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        dispatch(fetchSinglePerson(id));
    }, [dispatch, id])

    const convertRelativeTime = date => {
        return moment(date).fromNow();
    }

    const openEditMode = () => {
        setEditMode(true);
    }

    const closeEditMode = () => {
        setEditMode(false);
    }

    const classes = useStyles();
    return (
        <Paper className={classes.paper} elevation={0}>
             {
                 (
                    <div>
                        <div>
                            <div className={classes.header}>
                                <Typography variant="h5" gutterBottom>
                                    {selectedPerson?.title}
                                </Typography>
                            </div>
                        </div>
        
                        <Divider />
        
                        <Typography variant="overline" gutterBottom>
                            {selectedPerson?.shortSummary}
                        </Typography>
        
                        <Typography variant="caption" component='p'>
                            {convertRelativeTime(selectedPerson?.createdAt)}
                        </Typography>
                        <Chip label={`# ${selectedPerson?.tag}`} variant="outlined" className={classes.chip} />
                        <div className={classes.summary}>
                            {/* <img src={selectedPerson?.image || noImage} alt="post" className={classes.image}></img> */}
                            <Typography variant="body1">
                                {selectedPerson?.summary}
                            </Typography>
                        </div>
                    </div>
                    )
             }
        </Paper>
    )
}

export default PersonProfile