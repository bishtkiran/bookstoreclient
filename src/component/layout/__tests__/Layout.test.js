import { render } from "@testing-library/react";
import React from "react";
import Layout from "../Layout";

describe('Layout', () => {
    it('should render Layout component', () => {
        const {getByText} = render(
            <Layout>
                <div>Test Component</div>
            </Layout>
        );
        expect(getByText('Test Component')).toBeInTheDocument
        
    })
})