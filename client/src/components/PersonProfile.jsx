import React, { useState, useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Paper,
  Divider,
  Button,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PersonIcon from "@material-ui/icons/Person";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import SmartphoneOutlinedIcon from "@material-ui/icons/SmartphoneOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import { AiOutlineGithub } from "react-icons/ai";
import noImage from "../images/noImage.jpg";
import { fetchSinglePerson } from "../actions/person";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(6),
    marginBottom: theme.spacing(8),
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  listItem: {
    alignItems: "start",
  },
  summaryIcon: {
    marginTop: theme.spacing(1),
  },
  [theme.breakpoints.down("sm")]: {
    summary: {
      marginTop: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    info: {
      width: "90%",
      maxWidth: "90%",
      maxHeight: "max-content",
    },
    image: {
      width: "200px",
      height: "200px",
      objectFit: "cover",
      borderRadius: 5,
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
  },
  [theme.breakpoints.up("sm")]: {
    summary: {
      marginTop: theme.spacing(3),
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "start",
    },
    info: {
      width: "60%",
      maxWidth: "60%",
      maxHeight: "max-content",
      marginLeft: theme.spacing(2),
    },
    image: {
      width: "300px",
      height: "300px",
      objectFit: "cover",
      borderRadius: 5,
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(4),
    },
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
  }, [dispatch, id]);

  const convertRelativeTime = date => {
    return moment(date).fromNow();
  };

  const openEditMode = () => {
    setEditMode(true);
  };

  const closeEditMode = () => {
    setEditMode(false);
  };

  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={0}>
      {
        <div>
          <div className={classes.header}>
            <Typography variant="h5" gutterBottom>
              {selectedPerson?.fullName}
            </Typography>
          </div>

          <Divider />

          <Typography variant="overline" gutterBottom>
            {selectedPerson?.shortSummary}
          </Typography>

          <Typography variant="caption" component="p">
            {convertRelativeTime(selectedPerson?.createdAt)}
          </Typography>

          <div className={classes.summary}>
            <img
              src={selectedPerson?.image || noImage}
              alt="post"
              className={classes.image}
            ></img>
            <div className={classes.info}>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="title"
                    secondary={selectedPerson?.title}
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <EmailOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="email"
                    secondary={selectedPerson?.email}
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <SmartphoneOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="phone number"
                    secondary={selectedPerson?.phoneNumber}
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AiOutlineGithub />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="github"
                    secondary={selectedPerson?.githubLink}
                  />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemAvatar className={classes.summaryIcon}>
                    <Avatar>
                      <ChatOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="description"
                    secondary={selectedPerson?.summary}
                  />
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      }
    </Paper>
  );
};

export default PersonProfile;
