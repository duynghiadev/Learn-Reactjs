import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

function ProductSort({currentSort, onChange}) {

    const handleSortChange = (e, newValue) => {
        if(onChange) onChange(newValue)
    }
    return (
        <Tabs
            value={currentSort}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleSortChange}
            aria-label="disabled tabs example"
        >
            <Tab label="Tăng dần" value="salePrice:ASC"></Tab>
            <Tab label="Giảm dần" value="salePrice:DESC"></Tab>
        </Tabs>
    );
}

export default ProductSort;