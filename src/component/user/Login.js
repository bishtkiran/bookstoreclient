import { Box, Button, Link, Paper, TextField, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import makeStyle from './LoginStyle';
import * as yup from 'yup';
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginAction }from '../../module/user/userActions';
import { getUserPromise } from "../../module/user/userSelector";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";

const validationSchema = yup.object({
    email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
    password: yup
    .string('Enter your password')
    .min(8, 'Password should be minimum 8 characters in length')
    .required('Password is required')
});



const Login = () => {
    const classes = makeStyle();
    const dispatch = useDispatch();
    const loginPromise = useSelector(getUserPromise);
    const { enqueueSnackbar} = useSnackbar();
    const history = useHistory();

    useEffect(() => {
        if(loginPromise.isAnyError){
            enqueueSnackbar('Incorrect Username or Password!!', {
                variant: 'error'
            })
           
        } else if(loginPromise.isFulfilled){
            enqueueSnackbar('Login Successful!', {
                variant: 'success'
            });
            history.push('/');
        }
    }, [loginPromise, enqueueSnackbar, history])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema : validationSchema,
        onSubmit: (values) => {
            dispatch(loginAction(values.email, values.password))
        }
    });
    
    const handleRegister = () => {
        history.push('/register');
    }

    return (
        <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
            <Box className={classes.wrapper}>
                <Paper className={classes.paper}>
                    <Typography variant="h4">Book Store Login</Typography>
                    <TextField className={classes.topMargin}
                        name="email"
                        id="email"
                        data-testid="email-testid"
                        label="Enter your email"
                        variant="outlined"
                        placeholder="Enter your email" 
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        helperText={formik.touched.email && formik.errors.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}/>
                    <TextField className={classes.topMargin}
                        name="password"
                        id="password"
                        data-testid="password-testid"
                        label="Enter your password"
                        variant="outlined"
                        placeholder="Enter your password" 
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        helperText={formik.touched.password && formik.errors.password}
                        error={formik.touched.password && Boolean(formik.errors.password)}/>
                        <Button className={classes.topMargin} type="submit" variant="contained" color="primary" disabled={loginPromise.isPending}>Login</Button>
                        <br/>
                        <Link component="button" variant="body2" onClick={handleRegister}>Register</Link>
                </Paper>

            </Box>
        </form>
    )
}

export default Login;