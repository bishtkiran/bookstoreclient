import React from 'react';
import renderWithRedux from '../../../util/testUtil';
import Login from '../Login';
import { fireEvent } from '@testing-library/dom';
import { loginAction } from '../../..//module/user/userActions';
import { waitFor } from '@testing-library/react';

jest.mock('../../..//module/user/userActions');

describe('Login', () => {
    it('should show error message for email and password', async () => {
        const { findByText } = renderWithRedux(<Login />, {});

        const submitBtn = await findByText("Login");
        fireEvent.submit(submitBtn);

        expect(await findByText('Email is required')).toBeInTheDocument;
        expect(await findByText('Password is required')).toBeInTheDocument;
    });


    it('should show invalid error message for email and password', async () => {
        const { findByText, getByLabelText } = renderWithRedux(<Login />, {});

        const passwordField = getByLabelText('Enter your password');
        const emailField = getByLabelText('Enter your email');

        fireEvent.change(passwordField, { target : { value : 'pass'}});
        fireEvent.change(emailField, { target : { value : 'peter'}})

        const submitBtn = await findByText("Login");
        fireEvent.submit(submitBtn);

        expect(await findByText('Enter a valid email')).toBeInTheDocument;
        expect(await findByText('Password should be minimum 8 characters in length')).toBeInTheDocument;
    });
    

    it('should allow to login successfully when email and password are correct', async () => {
        const { findByText, getByLabelText } = renderWithRedux(<Login />, {});

        loginAction.mockImplementation(() => (dispatch) => {});

        const passwordField = getByLabelText('Enter your password');
        const emailField = getByLabelText('Enter your email');

        fireEvent.change(passwordField, { target : { value : 'password'}});
        fireEvent.change(emailField, { target : { value : 'example@gmail.com'}})

        const submitBtn = await findByText("Login");
        fireEvent.submit(submitBtn);

       await waitFor(() => {
        expect(loginAction).toHaveBeenCalledWith('example@gmail.com','password');
       });
    })
})