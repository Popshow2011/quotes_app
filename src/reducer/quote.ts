import { IQuotes } from "../interface";
import { QuoteTypes } from "../actions/actionType";
import { TAddQuotes } from "../actions";

const initialState: IQuotes = {
  cardTitle: "",
  card: {},
};

export const quote = (state: IQuotes = initialState, action: TAddQuotes) => {
  switch (action.type) {
    case QuoteTypes.QUOTE_ADD:
      return { ...state, card: action.payload };
    case QuoteTypes.QUOTE_CHANGE:
      return { ...state, cardTitle: action.payload.toString() };

    default:
      return state;
  }
};
