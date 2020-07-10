import { QuoteTypes } from "./actionType";
import { IBondsData, INameByISIN } from "../interface";

export const addName = (name: INameByISIN) => {
  return {
    type: QuoteTypes.QUOTE_NAME_ADD,
    payload: name,
  };
};

export const addQuotes = (item: IBondsData) => {
  return {
    type: QuoteTypes.QUOTE_ADD,
    payload: item,
  };
};

export const changeTitle = (data: string) => {
  return {
    type: QuoteTypes.QUOTE_CHANGE,
    payload: data,

  };
};

export type TAddQuotes = ReturnType<typeof addQuotes | typeof changeTitle>;


