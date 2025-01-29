import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App.jsx";

describe("App component", () => {
    it("renders homepage", () => {
        const { container } = render(<App />);
        expect( container ).toMatchSnapshot();
    });
    

    
});