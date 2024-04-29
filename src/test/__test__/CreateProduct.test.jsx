import { render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CreateProduct from "../../pages/Product/CreateProduct.jsx";
import { Provider } from "react-redux";
import store from "../../store/counterSlice.js";

describe("CreateProduct component", () => {
  test("input Product Name", () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateProduct />
        </BrowserRouter>
      </Provider>
    );

    const productNameInput = getByLabelText("Product Name:");
    fireEvent.change(productNameInput, { target: { value: "Sample Product" } });

    expect(productNameInput.value).toBe("Sample Product");
  });

  test("input Product Image", async () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateProduct />
        </BrowserRouter>
      </Provider>
    );
    const imageInput = getByLabelText("Product Image:");

    await waitFor(() =>
      fireEvent.change(imageInput, {
        target: {
          files: [
            new File(["sample.png"], "sample.png", { type: "image/png" }),
          ],
        },
      })
    );
    expect(imageInput.files[0].name).toBe("sample.png");
  });

  test("input Product Freshness", async () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateProduct />
        </BrowserRouter>
      </Provider>
    );
    const brandNewRadio = getByLabelText("Brand New");
    const secondHandRadio = getByLabelText("Second Hand");
    const refurbishedRadio = getByLabelText("Refurbished");

    fireEvent.click(secondHandRadio);

    expect(brandNewRadio.checked).toBe(false);
    expect(secondHandRadio.checked).toBe(true);
    expect(refurbishedRadio.checked).toBe(false);
  });

  test("input Product Additional", async () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateProduct />
        </BrowserRouter>
      </Provider>
    );
    const productNameInput = getByLabelText("Additional Description:");
    fireEvent.change(productNameInput, {
      target: { value: "sdfsdfsdfsdfsdf" },
    });
    expect(productNameInput.value).toBe("sdfsdfsdfsdfsdf");
  });

  test("input Product Price", async () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateProduct />
        </BrowserRouter>
      </Provider>
    );

    const productPriceInput = getByLabelText("Product Price:");
    await waitFor(() =>
      fireEvent.change(productPriceInput, { target: { value: "123" } })
    );

    expect(productPriceInput.value).toBe("123");
  });

  test("input Product Category", async () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CreateProduct />
        </BrowserRouter>
      </Provider>
    );

    const productCategorySelect = getByLabelText("Product Category");

    fireEvent.change(productCategorySelect, { target: { value: "Saab" } });

    expect(productCategorySelect.value).toBe("Saab");
  });
});
