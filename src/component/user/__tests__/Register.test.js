import { fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import renderWithRedux from '../../../util/testUtil';
import { registerAction } from '../../..//module/user/userActions';
import Register from "../Register";

jest.mock('../../..//module/user/userActions');

describe('User Register', () => {
    it('should verify name, email,password field and register button are present', () => {
        const { getByLabelText, getByText} = renderWithRedux(<Register />, {});

        expect(getByLabelText('Enter your username')).toBeInTheDocument;
        expect(getByLabelText('Enter your email')).toBeInTheDocument;
        expect(getByLabelText('Enter your password')).toBeInTheDocument;

        expect(getByText('Register')).toBeInTheDocument;
    });

    it('should display error message for required fields', async () => {
        const { findByText, getByText} = renderWithRedux(<Register />, {});

        fireEvent.submit(getByText('Register'));

        expect(await findByText('Email is required')).toBeInTheDocument;
        expect(await findByText('Username is required')).toBeInTheDocument;
        expect(await findByText('Password is required')).toBeInTheDocument;
    });

    it('should display error message for invalid inputs', () => {
        const { findByText, getByText, getByLabelText} = renderWithRedux(<Register />, {});

        fireEvent.change(getByLabelText('Enter your username'), { target: { value: 'username'}});
        fireEvent.change(getByLabelText('Enter your email'), { target: { value: 'Invalid email'}});
        fireEvent.change(getByLabelText('Enter your password'), { target: { value: 'pass'}});

        fireEvent.submit(getByText('Register'));

        expect(findByText('Enter a valid email')).toBeInTheDocument;
        expect(findByText('Password should be minimum 8 characters in length')).toBeInTheDocument;
    });

    it('should call register action with user data', async () => {
        const { getByText, getByLabelText} = renderWithRedux(<Register />, {});
        registerAction.mockImplementation(() => (dispatch) => {});

   
        fireEvent.change(getByLabelText('Enter your email'), { target: { value: 'example@gmail.com'}});
        fireEvent.change(getByLabelText('Enter your password'), { target: { value: 'password'}});
        fireEvent.change(getByLabelText('Enter your username'), { target: { value: 'username'}});

        fireEvent.submit(getByText('Register'));

        await waitFor(() => {
            expect(registerAction).toHaveBeenCalledWith({
                email: 'example@gmail.com',
                password: 'password',
                name: 'username'
            })
        })
    });

})