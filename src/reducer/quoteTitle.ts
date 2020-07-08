import { IState, IAction } from "../interface";
import { QuoteTypes } from "../actions/actionType";

const initialState: IState = {
  name: [],
};

export const quoteTitle = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    case QuoteTypes.QUOTE_NAME_ADD:
      return {
        ...state,
        name: [...state.name, action.payload],
      };

    default:
      return state;
  }
};
