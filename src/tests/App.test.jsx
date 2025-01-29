import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("../components/NavBar", () => ({
    default: () => (
      <nav>
        <ul>
          <li>Homepage</li>
          <li>Shopping</li>
        </ul>
      </nav>
    ),
  }));

import App from "../App.jsx";

describe("App component", () => {
    it("renders homepage", () => {


        const { container } = render(<App />);
        expect( container ).toMatchSnapshot();
    });
});

describe("Shopping page", () => {
    it("Product displayed", () => {

    });

    it("Add item to cart", () => {

    });
});

describe("Order quantity", () => {
    it("Test setting order quantity", () => {

    });

    it("Increment order quantity", () => {

    });

    it("decrement order quantity", () => {

    });
});