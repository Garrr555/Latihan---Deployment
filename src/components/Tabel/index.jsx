/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useState } from "react";
import { data } from "../../store/counter/counterSlice.js";
import { useSelector, useDispatch } from "react-redux";

export default function Tab({ data2, func }) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [update, setUpdate] = useState();
  const [nama, setNama] = useState();
  const [produk, setProduk] = useState();
  const [category, setCategory] = useState();
  const [Price, setPrice] = useState();
  const [Description, setDescription] = useState();
  const [image, setImage] = useState();
  const [error, setError] = useState("");

  const imagehandler = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        console.log(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Pilih file gambar (jpg, jpeg, atau png)!");
    }
  };

  const isValidPrice = (e) => {
    const regex = /^\d+(\.\d{1,2})?$/;
    return regex.test(e);
  };

  const isValidProducts = (e) => {
    const regex = /^[a-zA-Z0-9\s-]+$/;
    return regex.test(e);
  };

  const Dataupdate = (e, index) => {
    if (!e.productName) {
      alert("Nama tidak boleh kosong!");
      return;
    }
    if (!isValidProducts(e.productName)) {
      setError("Nama is not valid");
      return;
    }
    if (!e.productFreshness) {
      alert("Produk tidak boleh kosong!");
      return;
    }
    if (!isValidProducts(e.productFreshness)) {
      setError("Product is not valid");
      return;
    }
    if (!e.productCategory) {
      alert("Category tidak boleh kosong!");
      return;
    }
    if (!isValidProducts(e.productCategory)) {
      setError("Category is not valid");
      return;
    }
    if (!e.productPrice) {
      alert("Price tidak boleh kosong!");
      return;
    }
    if (!isValidPrice(e.productPrice)) {
      setError("price is not valid");
      return;
    }
    const updatedProducts = [...count];
    updatedProducts[index] = e;
    dispatch(data(updatedProducts));
    setUpdate(false);
  };
  console.log(count);
  return (
    <div className="tabel mx-auto px-5">
      <p className="text-[31px] font-semibold mb-3 text-center">List Product</p>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Product Category</th>
            <th>Product of Freshness</th>
            <th>Additional Desciption</th>
            <th>Price</th>
            <th className="text-center">Button</th>
          </tr>
        </thead>

        <tbody>
          {data2?.map((e, i) => (
            <tr key={i}>
              <td>
                <p>{e.id}</p>
              </td>
              <td>
                {!update ? <p>{e.productName}</p> : ""}
                {update ? (
                  <input
                    id="productName"
                    className="w-full h-[36px] border border-[#CED4DA] rounded-md px-2"
                    type="text"
                    name="productName"
                    onChange={(e) => setNama(e.target.value)}
                    required
                  />
                ) : (
                  ""
                )}
              </td>

              <td>
                {!update ? (
                  <img
                    src={e.image}
                    alt="Preview"
                    style={{ maxWidth: "100%" }}
                  />
                ) : (
                  ""
                )}
                {update ? (
                  <input
                    id="productImage"
                    className="w-auto h-[36px] border border-[#CED4DA] rounded-md px-2"
                    type="file"
                    accept="image/*"
                    onChange={imagehandler}
                    required
                  />
                ) : (
                  ""
                )}
              </td>
              <td>
                {!update ? <p>{e.productCategory}</p> : ""}
                {update ? (
                  <select
                    className="w-auto pr-14 py-2 items-center h-[38px] border border-[#CED4DA] rounded-md text-[#212529]"
                    id="cars"
                    name="productCategory"
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option value="" className="text-[16px] text-[#212529]">
                      Choose...
                    </option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                ) : (
                  ""
                )}
              </td>
              <td>
                {!update ? <p>{e.productFreshness}</p> : ""}
                {update ? (
                  <select
                    className="w-auto pr-14 py-2 items-center h-[38px] border border-[#CED4DA] rounded-md text-[#212529]"
                    id="cars"
                    name="productCategory"
                    onChange={(e) => setProduk(e.target.value)}
                    required
                  >
                    <option value="" className="text-[16px] text-[#212529]">
                      Choose...
                    </option>
                    <option value="Brand New">Brand New </option>
                    <option value="Second Hand">Second Hand </option>
                    <option value="Refurbished">Refurbished </option>
                  </select>
                ) : (
                  ""
                )}
              </td>
              <td>
                {!update ? <p>{e.additionalDescription}</p> : ""}
                {update ? (
                  <input
                    id="productName"
                    className="w-full h-[36px] border border-[#CED4DA] rounded-md px-2"
                    type="text"
                    name="productName"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                ) : (
                  ""
                )}
              </td>
              <td>
                {!update ? <p>{e.productPrice}</p> : ""}
                {update ? (
                  <input
                    className="text-[#212529] text-[16px] w-full h-9 border border-[#CED4DA] rounded-md px-5 py-[5px]"
                    type="text"
                    id="Price"
                    name="productPrice"
                    placeholder="$ 1"
                    pattern="[0-9]+"
                    required
                    onChange={(e) => setPrice(e.target.value)}
                  />
                ) : (
                  ""
                )}
              </td>
              <td>
                <div className="flex">
                  <p className="m-auto cursor-pointer" onClick={() => func(i)}>
                    Hapus
                  </p>
                  {update ? (
                    <p
                      className="m-auto cursor-pointer"
                      onClick={() => {
                        Dataupdate(
                          {
                            id: e.id,
                            productName: nama,
                            productCategory: category,
                            productFreshness: produk,
                            productPrice: Price,
                            image: image,
                            additionalDescription: Description,
                          },
                          i
                        );
                      }}
                    >
                      Save
                    </p>
                  ) : (
                    <p
                      className="m-auto cursor-pointer"
                      onClick={() => setUpdate(true)}
                    >
                      Edit
                    </p>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <p>{error}</p>}
      <div className="border border-[#DEE2E6] w-[194px] h-[31px] rounded-md">
        <input
          className="w-full text-[13px] text-[#222529] h-full mb-5 px-2"
          placeholder="Search by Product Name"
          type="input"
          name="productName"
          required
        />
      </div>

      <div className="flex border-y border-r border-[#0D6EFD] rounded-r-md w-[135px] h-[31px] text-[13px] mb-96">
        <div className="bg-[#0D6EFD]">
          <p className="my-auto text-white text-center px-3 pt-1">Deletion</p>
        </div>

        <div>
          <p className="text-[#0D6EFD] text-center px-3 pt-1">Search</p>
        </div>
      </div>
    </div>
  );
}
