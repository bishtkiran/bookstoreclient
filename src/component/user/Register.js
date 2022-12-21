import { Box, Button, Paper, TextField, Typography, Link } from "@material-ui/core";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from 'yup';
import { registerAction } from "../../module/user/userActions";
import { getUserRegisterPromise } from "../../module/user/userSelector";
import makeStyle from "./RegisterStyle";

const validationSchema = yup.object({
  name: yup.string().required('Username is required'),
  email: yup.string().required('Email is required').email('Enter a valid email'),
  password: yup.string().required('Password is required').min(8,'Password should be minimum 8 characters in length')
})

const Register = () => {
  const classes = makeStyle();
  const dispatch = useDispatch();
  const registerPromise = useSelector(getUserRegisterPromise);
  const { enqueueSnackbar} = useSnackbar();
  const history = useHistory();

  useEffect(() => {
    if(registerPromise.isAnyError){
      enqueueSnackbar('Server Error!!', {
          variant: 'error'
      })
     
  } else if(registerPromise.isFulfilled){
      enqueueSnackbar('User added Successfully!!', {
          variant: 'success'
      });
      history.push('/login');
  }

  }, [registerPromise, enqueueSnackbar, history])
  

  const registerForm = useFormik({
    validationSchema,
    initialValues: { email: '', password: '', name: ''},
    onSubmit : (values) => {
     dispatch(registerAction(values));
    }
  });

  const handleLogin = () => {
    history.push('/login');
  }
    return (
        <Box className={classes.wrapper}>
            <Typography className={classes.heading}>User Registration</Typography>
            <form autoComplete="off" noValidate onSubmit={registerForm.handleSubmit}>
            <Paper className={classes.paper}>
                <TextField 
                  className={classes.margin12}
                  name="name"
                  id="name"
                  label="Enter your username"
                  variant="outlined"
                  value={registerForm.values.name}
                  onChange={registerForm.handleChange}
                  helperText={registerForm.touched.name && registerForm.errors.name}
                  error={registerForm.touched.name && Boolean(registerForm.errors.name)}
                 />
                 <TextField 
                 className={classes.margin12}
                   name="email"
                   id="email"
                   label="Enter your email"
                   variant="outlined"
                   value={registerForm.values.email}
                   onChange={registerForm.handleChange}
                   helperText={registerForm.touched.email && registerForm.errors.email}
                   error={registerForm.touched.email && Boolean(registerForm.errors.email)}
                 />
                 <TextField 
                 className={classes.margin12}
                   name="password"
                   id="password"
                   label="Enter your password"
                   variant="outlined"
                   value={registerForm.values.password}
                   onChange={registerForm.handleChange}
                   helperText={registerForm.touched.password && registerForm.errors.password}
                   error={registerForm.touched.password && Boolean(registerForm.errors.password)}
                   />
                   <Button className={classes.button} type="submit" variant="contained" color="primary">Register</Button>
                   <br/>
                   <Link component="button" variant="body2" onClick={handleLogin}>Login</Link>
            </Paper>
            </form>
        </Box>
    )

}

export default Register;