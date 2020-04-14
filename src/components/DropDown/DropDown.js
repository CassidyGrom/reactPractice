import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function DropDown(props) {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");

  // const handleChange = (event) => {
  //   setCategory(event.target.value);
  // };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value={category}
          onChange={props.handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            Placeholder
          </MenuItem>
          <MenuItem value={"Name"}>Name</MenuItem>
          <MenuItem value={"Occupation"}>Occupation</MenuItem>
          <MenuItem value={"Location"}>Location</MenuItem>
        </Select>
        <FormHelperText>Placeholder</FormHelperText>
      </FormControl>
    </div>
  );
}
