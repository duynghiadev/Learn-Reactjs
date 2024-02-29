import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import categoryApi from 'api/categoryApi';
import CategorySkeletonList from './CategorySkeletonList';

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    },
    menu: {
        padding: "0",
        margin: "0",
        '& > li': {
            marginTop: theme.spacing(1),
            listStyle: "none",
            transition: "all .25s",
            '&:hover': {
                color: theme.palette.primary.dark,
                cursor: "pointer"
            }
        }
    }
}))

function FilterByCategory({onChange}) {
    const classes = useStyles()
    const [categoryList, setCategoryList] = useState([])
    const [Loading,setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const list = await categoryApi.getAll()
                setCategoryList(list.map(x => ({
                    id: x.id,
                    name: x.name
                })))
            } catch (error) {
                console.log('Failed to fetch category id: ',error)
            }
            setLoading(false)
        })()
    },[])

    const handleCategoryClick = (category) => {
        if(onChange) onChange(category)
    }

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
                {Loading 
                    ? <CategorySkeletonList length={categoryList.length} /> 
                    : <ul className={classes.menu}>
                            {categoryList.map(category => (
                                <li
                                    key={category.id}
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    <Typography variant="body2">{category.name}</Typography>
                                </li>
                            ))}
                        </ul>
                }
        </Box>
    );
}

export default FilterByCategory;