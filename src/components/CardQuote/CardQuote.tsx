import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import { IBondsData } from "../../interface";

interface IProps {
  data: IBondsData | {};
}

const CardQuote: React.FC<IProps> = ({ data }: IProps) => {
  return (
    <Grid container>
      <Grid item>
        <Typography>{data?.name}</Typography>
      </Grid>
    </Grid>
  );
};

export default CardQuote;
