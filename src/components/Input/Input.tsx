import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { INameByISIN } from "../../interface";
import { useDispatch } from "react-redux";
import { changeTitle } from "../../actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  title: INameByISIN[];
  addCard: (name: string) => void;
}

const Input: React.FC<IPropsInput> = ({ title, addCard }: IPropsInput) => {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
    dispatch(changeTitle(event.target.value as string));
    addCard(event.target.value as string);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select id="quote-select" value={value} onChange={handleChange}>
          {title.length &&
            title.map((item: INameByISIN) => (
              <MenuItem key={item.id} value={item.isin}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Input;
