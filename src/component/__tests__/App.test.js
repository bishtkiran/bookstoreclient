import { render, screen } from '@testing-library/react';
import App from '../App';
import renderWithRedux from '../../util/testUtil';
import React from "react";

test('Application', () => {
    const asFragment = renderWithRedux(<App />, {});
    expect(asFragment).toMatchSnapshot();
});
