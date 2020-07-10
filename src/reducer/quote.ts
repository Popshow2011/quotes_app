import {IBondsData, IQuotes} from "../interface";
import {QuoteTypes} from "../actions/actionType";
import {TAddQuotes} from "../actions";

const initialState: IQuotes = {
    cardTitle: "",
}

export const quote = (state = initialState, action: TAddQuotes) => {
    switch (action.type) {
        case QuoteTypes.QUOTE_ADD:
            return {
                ...state,
                card: action.payload as IBondsData
            };
        case QuoteTypes.QUOTE_CHANGE:
            return {
                ...state,
                cardTitle: action.payload.toString()
            };

        default:
            return state;
    }
};
