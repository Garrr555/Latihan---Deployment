import { useState } from "react";
import Tab from "../../components/Tabel/index";
import { Link } from "react-router-dom";
import { data } from "../../store/counter/counterSlice.js";
import { useSelector, useDispatch } from "react-redux";

function CreateProduct() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const delet = (e) => {
    const confirmation = confirm(
      "Apakah Anda yakin ingin menghapus elemen ini?"
    );
    if (confirmation) {
      const newData = [...count];
      newData.splice(e, 1);
      dispatch(data(newData));
      console.log("Elemen berhasil dihapus.");
    } else {
      console.log("Penghapusan dibatalkan.");
    }
  };

  const [nama, setNama] = useState();
  const [produk, setProduk] = useState();
  const [category, setCategory] = useState();
  const [Price, setPrice] = useState();
  const [Description, setDescription] = useState();
  const [error, setError] = useState("");
  const [image, setImage] = useState();

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const isValidPrice = (e) => {
    const regex = /^\d+(\.\d{1,2})?$/;
    return regex.test(e);
  };

  const isValidProducts = (e) => {
    const regex = /^[a-zA-Z0-9\s-]+$/;
    return regex.test(e);
  };

  const postData = (e) => {
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
    dispatch(data([...count, e]));
  };

  const handleImageChange = (e) => {
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

  return (
    <section className="justify-center w-full">
      <div className="max-w-[936px] text-center mx-auto">
        <img
          className="max-w-[72px] h-auto mx-auto"
          src="img/bootstrap-logo.svg.png"
          alt=""
        />
        <p className="font-semibold text-[31px] my-3 text-[#212529]">
          Create Product
        </p>
        <div className="flex items-center">
          <Link to="/">
            <p className="-ml-20 mr-20"> {`<Back`} </p>
          </Link>
          <p className="text-[20px] text-[#212529]">
            Below is an example form built entirely with Tailwind form controls.
            Each required form group has a validation state that can be
            triggered by attempting to submit the form without completing it.
          </p>
        </div>
      </div>

      <div className="max-w-[608px] max-h-[984px] pt-12 text-start mx-auto mb-3">
        <p className="text-[23px] font-semibold text-[#212529] mb-4">
          Detail Product
        </p>

        <form id="productForm">
          <label htmlFor="productName">Product Name:</label>
          <br></br>
          <input
            id="productName"
            className="w-[282px] h-[36px] border border-[#CED4DA] rounded-md mb-5 px-2"
            type="text"
            name="productName"
            onChange={(e) => setNama(e.target.value)}
            required
          />
          <br></br>
          <label htmlFor="productImage">Product Image:</label> <br></br>
          <input
            id="productImage"
            name="productImage"
            className="w-[282px] h-[36px] border border-[#CED4DA] rounded-md mb-5 px-2"
            type="file"
            onChange={handleImageChange}
            required
          />
          <label className="text-[16px] mb-2 text-[#212529]">
            <br></br>
            Product Category
            <br></br>
            <select
              className="w-[224px] pr-14 py-2 items-center h-[38px] border border-[#CED4DA] rounded-md mb-5 text-[#212529]"
              id="cars"
              name="productCategory"
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" className="text-[16px] text-[#212529]">
                Choose...
              </option>
              <option value="Volvo">Volvo</option>
              <option value="Saab">Saab</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Audi">Audi</option>
            </select>
          </label>
          <p className="text-[#212529] text-[16px]">Product Freshness:</p>
          <label>
            <input
              className="text-[16px]"
              type="radio"
              name="Brand New"
              value="Brand New"
              id="New"
              onClick={(e) => setProduk(e.target.value)}
            />
            Brand New
          </label>
          <br />
          <label>
            <input
              className="text-[16px]"
              type="radio"
              name="Second Hand"
              value="Second Hand"
              id="Second Hand"
              onClick={(e) => setProduk(e.target.value)}
            />
            Second Hand
          </label>
          <br />
          <label>
            <input
              className="text-[16px] mb-3"
              type="radio"
              name="Refurbished"
              value="Refurbished"
              id="Refurbished"
              onClick={(e) => setProduk(e.target.value)}
            />
            Refurbished
          </label>
          <br />
          <label
            htmlFor="productDescription"
            className="text-[#212529] text-[16px]"
          >
            Additional Description:
          </label>
          <br />
          <textarea
            className="text-[#212529] text-[16px] w-[603px] h-[116px] border border-[#CED4DA] rounded-md mt-2 px-3 py-[5px] mb-5"
            id="productDescription"
            name="productDescription"
            rows="4"
            cols="50"
            required
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />
          <label htmlFor="productPrice">Product Price:</label>
          <br />
          <input
            className="text-[#212529] text-[16px] w-[603px] h-9 border border-[#CED4DA] rounded-md mt-2 px-5 py-[5px] mb-5"
            type="text"
            id="productPrice"
            name="productPrice"
            placeholder="$ 1"
            pattern="[0-9]+"
            required
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
        </form>
        <button
          className="w-[557px] h-[48px] bg-[#0D6EFD] rounded-md text-white mx-[26px]"
          onClick={() =>
            postData({
              id: generateRandomNumber(1, 1000),
              productName: nama,
              productCategory: category,
              productFreshness: produk,
              productPrice: Price,
              image: image,
              additionalDescription: Description,
            })
          }
        >
          submit
        </button>
      </div>
      {error && <p>{error}</p>}
      <Tab data2={count} func={delet} imagehandler={handleImageChange}></Tab>
    </section>
  );
}
export default CreateProduct;
