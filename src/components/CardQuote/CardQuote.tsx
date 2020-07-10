import React, {useState} from 'react'
import {createStyles, Grid, Theme, Typography} from "@material-ui/core";
import {IBondsData} from "../../interface";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

interface IProps {
    data: IBondsData;
}

const useStyle = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 20,
        borderBottom: '2px solid #e3e3e3'
    },
    button: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    cont: {
        display: 'flex',
    }
}))

const CardQuote: React.FC<IProps> = ({data}: IProps) => {
    const classes = useStyle();
    const [btnValue, setBtnValue] = useState('')

    const btnClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event)
    }
    return (
        <React.Fragment>
            <Grid className={classes.root} container>
                <Grid className={classes.cont} item>
                    <Typography>{data.name}</Typography>
                    <Typography>{data.cap}</Typography>
                    <Typography>{data.currency}</Typography>
                </Grid>
                <Grid item>
                    <Typography>{data.isin}</Typography>
                </Grid>
                <Grid className={classes.cont} item>
                    <Typography>{data.instrumentName}</Typography>
                    <Typography>{data.sector}</Typography>
                    <Typography>{data.code}</Typography>
                    <Typography>{data.till}</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid className={classes.button} item>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Button onClick={(event) => btnClickHandler(event)}>Week</Button>
                        <Button onClick={(event) => btnClickHandler(event)}>Month</Button>
                        <Button onClick={(event) => btnClickHandler(event)}>Quarter</Button>
                        <Button onClick={(event) => btnClickHandler(event)}>Year</Button>
                        <Button onClick={(event) => btnClickHandler(event)}>Max</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default CardQuote;
