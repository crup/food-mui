import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        width: "100%"
    },
    wrap: {
        display: 'flex',
        justifyContent: "space-between"
    },
    label: {
        marginTop: 10
    }
}));

export default function Sidebar({
    categories,
    activeCategory,
    setActiveCategory
}) {
    const classes = useStyles();
    const handleChange = (event) => {
        setActiveCategory(event.target.value);
    };
    const onClickClear = () => {
        setActiveCategory(null);
    }

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <div className={classes.wrap}>
                <FormLabel className={classes.label} component="legend">Filter by category</FormLabel>
                { activeCategory && <Button onClick={onClickClear} color="primary">Clear</Button> }
                </div>
                <FormGroup>
                    <RadioGroup aria-label="category" value={activeCategory} onChange={handleChange}>
                        {categories.map((item, index) => <FormControlLabel key={index} value={item.slug} control={<Radio />} label={item.name} />)}
                    </RadioGroup>
                </FormGroup>
            </FormControl>
        </div>
    );
}