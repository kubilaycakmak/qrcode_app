import React from 'react'
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import PersonCard from './PersonCard';
import ClipLoader from "react-spinners/ClipLoader";


const PersonList = () => {

    const persons = useSelector(state => state.persons.persons)

    // const calculateMd = () => {
    //     // return layout === "gridThree" ? 4 : 3;
    // }

    if(persons.length === 0){
        return (
            <>
              <ClipLoader size={50} css={`
                display: block;
                margin: 120px auto;
                `} />  
            </>
        )
    }
    else
        return (
            <>
            { /*  */}
                <Grid container spacing={2} alignContent="stretch">
                    {
                        persons.length > 0 &&
                        persons.map((person) => (
                            <Grid item key={person?._id} xs={12} >
                                {/* md={calculateMd()} */}
                                <PersonCard {...person} />
                            </Grid>
                        ))
                    }
                </Grid>
            </>
        )
}

export default PersonList