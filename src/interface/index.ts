export interface INameByISIN {
  id: string;
  isin: string;
  name: string;
}

export interface IState {
  name: INameByISIN[];
}

export interface IQuotes {
  cardTitle: string;
  card: IBondsData | {};
}

type TPrices = {
  week: {
    dates: Array<string>;
    values: Array<number>;
  };
  month: {
    dates: Array<string>;
    values: Array<number>;
  };
  quarter: {
    dates: Array<string>;
    values: Array<number>;
  };
  year: {
    dates: Array<string>;
    values: Array<number>;
  };
  max: {
    dates: Array<string>;
    values: Array<number>;
  };
};

export interface IAction {
  type: string;
  payload: IBondsData | INameByISIN;
}

export interface IBondsData {
  id: string;
  isin: string;
  name: string;
  currency: string;
  cap: number;
  addNum: number;
  instrumentName: string;
  sector: string;
  code: string;
  till: string;
  price: TPrices;
  spread: TPrices;
  yield: TPrices;
}
