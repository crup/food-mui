import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

export default function Sidebar({
    categories
}) {
    const classes = useStyles();
    const [activeCategory, setActiveCategory] = React.useState();

    const handleChange = (event) => {
        setActiveCategory(event.target.value);
    };

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Filter by category</FormLabel>
                <FormGroup>
                    <RadioGroup aria-label="category" value={activeCategory} onChange={handleChange}>
                        {categories.map((item, index) => <FormControlLabel key={index} value={item.slug} control={<Radio />} label={item.name} />)}
                    </RadioGroup>
                </FormGroup>
            </FormControl>
        </div>
    );
}