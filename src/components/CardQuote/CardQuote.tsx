import React, { useState } from "react";
import { createStyles, Grid, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Graph from "../Graph";
import TypeInput from "../TypeInput";

interface IProps {
  data: any;
}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      position: "relative",
      flexDirection: "column",
      paddingBottom: 20,
      borderBottom: "2px solid #e3e3e3",
    },
    button: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    cont: {
      display: "flex",
    },
    graph: {
      width: "100%",
    },
  })
);

const CardQuote: React.FC<IProps> = ({ data }: IProps) => {
  const classes = useStyle();
  const [btnValue, setBtnValue] = useState("week");
  const [type, setType] = useState("price");

  const btnClickHandler = (
    event: React.MouseEvent<HTMLSpanElement | HTMLButtonElement>
  ) => {
    setBtnValue(event.currentTarget.innerText.toLowerCase());
  };

  const changeType = (value: string) => {
    setType(value);
  };

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
        <TypeInput changeType={changeType} />
      </Grid>
      <Grid container>
        <Grid className={classes.button} item>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={(
                event: React.MouseEvent<HTMLButtonElement | HTMLSpanElement>
              ) => btnClickHandler(event)}
            >
              Week
            </Button>
            <Button
              onClick={(
                event: React.MouseEvent<HTMLButtonElement | HTMLSpanElement>
              ) => btnClickHandler(event)}
            >
              Month
            </Button>
            <Button
              onClick={(
                event: React.MouseEvent<HTMLButtonElement | HTMLSpanElement>
              ) => btnClickHandler(event)}
            >
              Quarter
            </Button>
            <Button
              onClick={(
                event: React.MouseEvent<HTMLButtonElement | HTMLSpanElement>
              ) => btnClickHandler(event)}
            >
              Year
            </Button>
            <Button
              onClick={(
                event: React.MouseEvent<HTMLButtonElement | HTMLSpanElement>
              ) => btnClickHandler(event)}
            >
              Max
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container>
        <Grid className={classes.graph} item>
          <Graph
            date={data[type][btnValue].dates}
            val={data[type][btnValue].values}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CardQuote;
