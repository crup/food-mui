import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({});

  const filters = [{"name":"Desserts","slug":"desserts"},{"name":"Happy Meals","slug":"happy-meals"},{"name":"Extra Value Meal - Medium","slug":"extra-value-meal---medium"},{"name":"Beverages","slug":"beverages"},{"name":"Burgers","slug":"burgers"},{"name":"Sides and Wraps","slug":"sides-and-wraps"},{"name":"Meal For Two","slug":"meal-for-two"}];

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Filter by category</FormLabel>
        <FormGroup>
          { filters.map((item, index) => <FormControlLabel
            key={index}
            control={<Checkbox checked={state[item.slug] === undefined ? true : state[item.slug] } onChange={handleChange} name={item.slug} />}
            label={item.name}
          />) }
        </FormGroup>
      </FormControl>
    </div>
  );
}