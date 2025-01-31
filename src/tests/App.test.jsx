import { vi, describe, it, expect } from "vitest";
import { render, screen, renderHook, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from '../App';
import Shopping from '../components/Shopping'
import useProducts from "../components/useProducts";
import useFetchedData from "../components/useFetchedData";
import Products from '../components/Products'

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


describe("App component", () => {
    it("renders homepage", () => {
        const { container } = render(<App />);
        expect( container ).toMatchSnapshot();
    });
});

describe("Shopping page", () => {
  const mockProducts = [{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}},{"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":{"rate":4.7,"count":500}}];
  
  vi.mock('../components/useFetchedData', () => ({
    default: vi.fn(() => {
      const mockProducts = [{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}},{"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":{"rate":4.7,"count":500}}];
      return {data:mockProducts, loading:false, error:null};
    })
  })); 

  it("Fetch products", () => {
    const products = renderHook(() => useProducts()).result.current;
    
    expect(JSON.stringify(products)).toMatch(JSON.stringify(mockProducts));
  });

  it("Product display", () => {
    render(<Products />);

    expect(screen.getByRole("heading", {name:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"})).toBeInTheDocument();
  });

  it("Products displayed on Shopping Page", () => {
    render(<Shopping />);

    expect(screen.getByRole("heading", {name:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"})).toBeInTheDocument();
  })


  it("product cards have add to cart buttons", () => {
    render(<Shopping />)
    const buttons = screen.getAllByRole("button", {name:"Add To Cart"});
    expect(buttons).length(3);
  })


  it("should call addToCart function when button clicked", async () => {
    const addToCart = vi.fn();
    const user = userEvent.setup();

    render(<Products addToCart={addToCart} />);
    const button = screen.getAllByRole("button", {name:"Add To Cart"})[0];

    await user.click(button);

    expect(addToCart).toHaveBeenCalled();
  });
});

it("item added to cart", async () => {
  const user = userEvent.setup();
})

describe("Order quantity", () => {
    it("Test setting order quantity", () => {

    });

    it("Increment order quantity", () => {

    });

    it("decrement order quantity", () => {

    });
});