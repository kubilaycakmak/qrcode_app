import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core';
import {
    Button,
    TextField,
    Select,
    Input,
    MenuItem,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';

import { useDispatch } from 'react-redux'
import FileBase64 from 'react-file-base64';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { createPerson } from '../actions/person'

const useStyles = makeStyles((theme) => 
    ({
        root:{
            // padding: theme.spacing(2)
        },
        paper:{
            padding: theme.spacing(2)
        },
        textField:{
            marginBottom:theme.spacing(2),
        }
    })
);

const personSchema = yup.object().shape(
    {
        fullName:yup.string().required(),
        username:yup.string().required(),
        title:yup.string().required(),
        email:yup.string().required(),
        phoneNumber:yup.string().required(),
        // dateofBirth:yup.string().required(),
        shortSummary:yup.string().required(),
        summary:yup.string().min(20).required(),
        githubLink: yup.string().required()
    }
);

export const PersonAdd = ({open, handleClose}) => {

    const dispatch = useDispatch();

    const [ file, setFile ] = useState(null);    
    const [qrCode, setQrCode ] = useState(null);
    const { register, handleSubmit, control, errors, reset } = useForm({
        resolver: yupResolver(personSchema)
    });

    const onSubmit = (data) => {
        dispatch(createPerson(
            {
                ...data, 
                image:file,
                qrCode:qrCode
            }
        ));
        clearForm();
        
    };

    const clearForm = () => {
        reset();
        setFile(null);
        handleClose();
    };

    const generateQR = (id) => {
        setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=http://localhost:3000/persons/${id}&size=120x120`);
    }   

    const classes = useStyles();

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                New Person Form
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please fill the form for add a new person
                </DialogContentText>
                <div className={classes.root}>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            id="fullName"
                            label="Full Name"
                            name='fullName'
                            variant='outlined'
                            className={classes.textField}
                            size='small'
                            inputRef={register}
                            error={errors.fullName ? true : false}
                            fullWidth
                        />
                         <TextField
                            id="username"
                            label="User Name"
                            name='username'
                            variant='outlined'
                            className={classes.textField}
                            size='small'
                            inputRef={register}
                            error={errors.username ? true : false}
                            fullWidth
                        />
                        <TextField
                            id="title"
                            label="Title"
                            name='title'
                            variant='outlined'
                            className={classes.textField}
                            size='small'
                            inputRef={register}
                            error={errors.title ? true : false}
                            fullWidth
                        />
                        <TextField
                            id="email"
                            label="Email Adress"
                            name="email"
                            variant='outlined'
                            type="email"
                            className={classes.textField}
                            size='small'
                            inputRef={register}
                            error={errors.email ? true : false}
                            fullWidth
                        />
                        <TextField
                            id="phoneNumber"
                            label="Phone Number"
                            name='phoneNumber'
                            variant='outlined'
                            className={classes.textField}
                            size='small'
                            inputRef={register}
                            error={errors.phoneNumber ? true : false}
                            fullWidth
                        />
                        {/* <TextField
                            id="dateofBirth"
                            label="Birthday"
                            variant='outlined'
                            type="date"
                            className={classes.textField}
                            defaultValue="1996-03-18"
                            size='small'
                            inputRef={register}
                            error={errors.dateofBirth ? true : false}
                            fullWidth
                        /> */}
                        <TextField
                            id="shortSummary"
                            label="Short Summary"
                            name='shortSummary'
                            multiline
                            rows={2}
                            variant='outlined'
                            className={classes.textField}
                            size='small'
                            inputRef={register}
                            error={errors.shortSummary ? true : false}
                            fullWidth
                        />
                        <TextField
                            id="summary"
                            label="Summary"
                            name='summary'
                            multiline
                            rows={4}
                            variant='outlined'
                            className={classes.textField}
                            size='small'
                            inputRef={register}
                            error={errors.summary ? true : false}
                            fullWidth
                        />
                        <TextField
                            id="githubLink"
                            label="Github Link"
                            name='githubLink'
                            variant='outlined'
                            className={classes.textField}
                            size='small'
                            inputRef={register}
                            error={errors.githubLink ? true : false}
                            fullWidth
                        />
                        <Button 
                            // disabled={errors.username ? true : false}
                            variant='outlined' 
                            color="primary"
                            onClick={() => generateQR(control.getValues().username)}
                            >Generate QR-Code
                        </Button>
                        <br />
                        <br />
                        <FileBase64 multiple={false} onDone={({base64}) => setFile(base64)} />
                    </form>
                </div>
            </DialogContent>
            <DialogActions className={classes.paper}>
                <Button 
                 color='inherit' 
                 onClick={clearForm}
                 >Cancel</Button>
                <Button 
                 type='submit'
                 variant='outlined' 
                 color="primary"
                 onClick={() => handleSubmit(onSubmit)()}
                 >Submit</Button>
            </DialogActions>
        </Dialog>
    )
}

export default PersonAdd