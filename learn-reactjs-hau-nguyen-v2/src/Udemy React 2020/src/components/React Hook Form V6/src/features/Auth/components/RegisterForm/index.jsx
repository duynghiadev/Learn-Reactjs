import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from 'components/form-control/PasswordField';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(4),
    },
    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },
    title: {
        textAlign: 'center',
        margin: theme.spacing(2,0,3,0),
    },
    submit: {
        margin: theme.spacing(2,0,3),
    },
    progress: {
        position: 'absolute',
        top: theme.spacing(1),
        left: 0,
        right: 0
    }
}));


RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const classes = useStyles();

    const schema = yup.object().shape({
        fullName: yup.string()
            .required('Please enter your full name.')
            .test('Should has at least two words.','Please enter at least two words.', value => {
                return value.split(' ').length >= 2
            }),
        email: yup.string()
            .required('Please enter your email.')
            .email('Please enter an valid email address.'),
        password: yup.string()
            .required('Please enter your password.')
            .min(6,'Please enter at least six characters.'),
        retypePassword: yup.string()
            .required('Please retype your password.')
            .oneOf([yup.ref('password')],'Password does not match.')
      });
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        reValidateMode: 'onSubmit',
        resolver: yupResolver(schema)
    })
    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
          await onSubmit(values);  
        }
    }

    const {isSubmitting} = form.formState

    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.progress} />}
            <Avatar className={classes.avatar}>
                <LockOutlined/>
            </Avatar>

            <Typography className={classes.title} component="h3" variant="h5">
                Create An Account
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullName" label="Full Name" form={form}></InputField>
                <InputField name="email" label="Email" form={form}></InputField>
                <PasswordField name="password" label="Password" form={form}></PasswordField>
                <PasswordField name="retypePassword" label="Retype Password" form={form}></PasswordField>

                <Button
                    disabled={isSubmitting}
                    type="submit"
                    className={classes.submit}
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                >
                    Create an account 
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;