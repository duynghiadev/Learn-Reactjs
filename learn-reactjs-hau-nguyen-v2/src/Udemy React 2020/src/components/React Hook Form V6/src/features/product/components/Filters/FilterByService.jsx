import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Checkbox, FormControlLabel, makeStyles, TextField, Typography } from '@material-ui/core';
import { BorderTop } from '@material-ui/icons';

FilterByService.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

const useStyle = makeStyles( theme => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]}`
    },

    list: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        '& > li' : {
            margin: 0
        }
    }
}))

function FilterByService({ filters = {}, onChange }) {
    const classes = useStyle()

    const handleChange = (e) => {
        if(!onChange) return
        const {name, checked} = e.target
        onChange({
            [name] : checked
        })
    }

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">DỊCH VỤ</Typography>
            <ul className={classes.list}>
                {[{value: 'isPromotion', label: 'Có khuyến mãi'},{value: 'isFreeShip', label: 'Miễn phí vận chuyển'}]
                .map(service => (
                    <li key={service.value}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Boolean(filters[service.value])}
                                    onChange={handleChange}
                                    name={service.value}
                                    color="primary"
                                />
                            }
                            label={service.label}
                        />
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByService;