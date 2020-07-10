import React, {useEffect, useState} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import {INameByISIN} from "../../interface";
import {useDispatch} from "react-redux";
import {changeTitle} from "../../actions";
import {NativeSelect} from "@material-ui/core";

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

const Input: React.FC<IPropsInput> = ({title, addCard}: IPropsInput) => {
    const classes = useStyles();
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (title.length && !value) {
            setValue(title[0]?.isin);
            dispatch(changeTitle(title[0]?.isin));
            addCard(title[0]?.isin);
        }
    }, [addCard, dispatch, title, value])

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setValue(event.target.value as string);
        dispatch(changeTitle(event.target.value as string));
        addCard(event.target.value as string);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <NativeSelect id="quote-select" value={value} onChange={handleChange}>
                    {title.length &&
                    title.map((item: INameByISIN) => (
                        <option key={item.id} value={item.isin}>
                            {item.name}
                        </option>
                    ))}
                </NativeSelect>
            </FormControl>
        </div>
    );
};

export default Input;
