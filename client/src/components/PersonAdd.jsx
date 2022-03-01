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
        age:yup.string().required(),
        phoneNumber:yup.string().required(),
        dateofBirth:yup.date().required(),
        shortSummary:yup.string().max(20).required(),
        summary:yup.string().min(20).required(),
    }
);

export const PersonAdd = ({open, handleClose}) => {

    const dispatch = useDispatch();

    const [ file, setFile ] = useState(null);    
    const { register, handleSubmit, control, errors, reset } = useForm({
        resolver: yupResolver(personSchema)
    });

    const onSubmit = (data) => {
        dispatch(createPerson(
            {
                ...data, 
                image:file
            }
        ));
        clearForm();
        
    };

    const clearForm = () => {
        reset();
        setFile(null);
        handleClose();
    };

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

                        {/* <TextField
                            id="subtitle"
                            label=""
                            name='subtitle'
                            variant='outlined'
                            className={classes.textField}
                            size='small'
                            inputRef={register}
                            error={errors.subtitle ? true : false}
                            fullWidth
                        /> */}

                        {/* <Controller 
                            as={
                                <Select
                                input={<Input />}
                                className={classes.textField}
                                fullWidth
                                >
                                    {
                                        tags.map((tag, index) => (
                                            <MenuItem
                                            key={index}
                                            value={tag}
                                            >
                                                {tag}
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                            }

                            name='tag'
                            control={control}
                            error={errors.tag ? true : false}
                            defaultValue={tags[0]}
                        /> */}

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