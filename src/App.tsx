import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { TReducers } from "./reducer";
import { INameByISIN, IBondsData } from "./interface";
import { nameByISIN, bondsData } from "./mock/bondsMockData";
import { addName, addQuotes } from "./actions";
import Input from "./components/Input";
import CardQuote from "./components/CardQuote";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100%",
  },
  item: {
    marginRight: 20,
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const state = useSelector((state: TReducers) => state.quoteTitle);
  const quote = useSelector((state: TReducers) => state.quote);


  const addCard = (name: string) => {
    bondsData.map((item: IBondsData) => {
      if (name === item.isin) {
        dispatch(addQuotes(item));
      }
      return null;
    });
  };

  !state.name.length &&
    nameByISIN.length &&
    nameByISIN.map((item: INameByISIN) => dispatch(addName(item)));

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid className={classes.item} item>
          <Input addCard={addCard} title={state.name} />
        </Grid>
        <Grid className={classes.item} item>
          {quote.card && <CardQuote data={quote.card} />}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
