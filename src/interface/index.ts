export interface INameByISIN {
  id: string;
  isin: string;
  name: string;
}

export interface IState {
  quotes: IBondsData[];
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
  price: {
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
  spread: {
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
  yield: {
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
}
