import React from "react";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import { makeStyles } from "@material-ui/core";

interface IProps {
  date: string[];
  val: number[];
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const Graph: React.FC<IProps> = ({ date, val }: IProps) => {
  const classes = useStyles();
  const getDate = (value: string) => {
    const chunks = value.split("/");
    return chunks[0] + "." + chunks[1];
  };

  const data: [] = Object.assign(
    date.map((i, n) => ({
      x: getDate(i),
      y: val[n],
    }))
  );

  return (
    <>
      <div className={classes.root}>
        <VictoryChart
          theme={VictoryTheme.material}
          width={1000}
          animate={{
            duration: 1000,
            onLoad: { duration: 500 },
          }}
          scale={{ x: "time", y: "linear" }}
        >
          <VictoryLine
            style={{
              data: { stroke: "tomato" },
            }}
            data={data}
          />
        </VictoryChart>
      </div>
    </>
  );
};

export default Graph;
