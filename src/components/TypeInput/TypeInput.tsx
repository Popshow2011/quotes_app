import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import { NativeSelect } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      bottom: 20,
      right: 50,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

interface IPropsInput {
  changeType: (value: string) => void;
}

const TypeInput: React.FC<IPropsInput> = ({ changeType }) => {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const variant: Array<string> = ["price", "spread", "yield"];

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
    changeType(event.target.value as string);
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <NativeSelect id="quote-select" value={value} onChange={handleChange}>
          {variant.map((item: string) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default TypeInput;
