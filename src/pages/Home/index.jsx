import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav className="-mt-10 z-50 justify-between py-4 xl:px-10 md:px-10 flex flex-col md:flex-row items-center fixed w-full bg-white shadow-lg">
        <div className="mr-5 md:text-left">
          <p className="text-2xl">
            <span className="text-[#37517E] font-bold">Simple</span> Header
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex gap-4 md:gap-3">
            <li>
              <Link
                to="#"
                className="text-[#0D6EFD] hover:text-white transition duration-300 hover:bg-[#37517E] px-4 py-3 hover:transition hover:duration-300 rounded-full"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-[#0D6EFD] hover:text-white transition duration-300 hover:bg-[#37517E] px-4 py-3 hover:transition hover:duration-300 rounded-full"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-[#0D6EFD] hover:text-white transition duration-300 hover:bg-[#37517E] px-4 py-3 hover:transition hover:duration-300 rounded-full"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-[#0D6EFD] hover:text-white transition duration-300 hover:bg-[#37517E] px-4 py-3 hover:transition hover:duration-300 rounded-full"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-[#0D6EFD] hover:text-white transition duration-300 hover:bg-[#37517E] px-4 py-3 hover:transition hover:duration-300 rounded-full"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <section className="mt-10 justify-center w-full">
        <div className="bg-[#37517E] pt-[153px] pb-[80px] px-[82px] xl:flex lg:flex md:flex justify-center">
          <div className="max-h-[527px] max-w-[615px] xl:py-[114px] items-center">
            <p className="text-[48px] max-w-[540.5px] max-h-[125px] text-white font-bold md:text-[34px] xl:text-start lg:text-start md:text-start sm:text-[36px] sm:text-center">
              Better Solutions For Your Business
            </p>
            <p className="text-white opacity-60 text-[24px] md:text-[20px] xl:text-start lg:text-start md:text-start sm:text-[20px] sm:text-center">
              We are team of talented designers making websites with Tailwind
            </p>

            <div className="flex xl:justify-start lg:justify-start md:justify-start sm:justify-center mt-5 gap-5">
              <div className=" bg-[#47B2E4] hover:bg-sky-600 transition duration-300 text-white max-w-[147.5px] w-full rounded-[50px] px-7 py-3 cursor-pointer">
                <Link to="/product">
                  <p className="text-[16px] text-center py-3">Product</p>
                </Link>
              </div>

              <div className="text-white max-w-[150px] w-full rounded-[50px] px-7 py-3 border border-[#37517E] hover:border hover:border-sky-600 transition duration-300 cursor-pointer group">
                <p className="text-[16px] text-end transition duration-300 group-hover:text-[#47B2E4] py-3">
                  Watch Video
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-[636px] max-h-[527px]">
            <img src="img/hero-img.png.png" alt="" />
          </div>
        </div>

        <div className="bg-[#F3F5FA] mb-5 py-14">
          <div className="max-w-[660px] max-h-[139px] mx-auto px-5">
            <div className="text-center mb-5">
              <p className="text-[#37517E] text-[24px] font-bold mb-3">
                Join Our Newsletter
              </p>
              <p className="text-[15px]">
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
            </div>
            <div className="bg-white p-0 shadow-md rounded-full flex justify-end">
              <div className="text-end items-center bg-[#47B2E4] rounded-full px-[20px] py-[9px] hover:bg-sky-600 transition duration-300 cursor-pointer">
                <p className="text-white text-[16px] ">Subscribe</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-white xl:flex lg:flex text-[#5E5E5E] xl:justify-center xl:gap-36 lg:m-32 md:gap-28 sm:gap-20 py-10 px-5">
          <div className="xl:mb-0 lg:mb-5 md:mb-10 sm:mb-10">
            <p className="pb-3 text-[28px] font-bold xl:text-start lg:text-start md:text-center sm:text-center text-[#37517E]">
              ARSHA
            </p>
            <div className="xl:text-justify lg:text-start md:text-center sm:text-center mx-auto max-w-[400px] text-sm">
              <ul className="text-[14px]">
                <li>A108 Adam Street</li>
                <li>New York, NY 535022</li>
                <li>United States</li>
                <br />
                <li>
                  <span className="font-bold">Phone: </span>+1 5589 55488 55
                </li>
                <li>
                  <span className="font-bold">Email: </span>info@example.com
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center xl:gap-36 lg:gap-20 md:gap-20 sm:gap-5">
            <div className="">
              <p className="text-[#37517E] mb-3 text-[16px] font-bold xl:text-start lg:text-start md:text-center sm:text-center">
                Useful Links
              </p>
              <ul className="text-[14px] xl:text-start lg:text-start md:text-center sm:text-center px-3 text-[#777777]">
                <li className="my-3">Home</li>
                <li className="my-3">About</li>
                <li className="my-3">Services</li>
                <li className="my-3">Terms of service</li>
                <li className="my-3">Privacy Policy</li>
              </ul>
            </div>

            <div className="">
              <p className="text-[#37517E] mb-3 text-[16px] font-bold xl:text-start lg:text-start md:text-center sm:text-center">
                Our Services
              </p>
              <ul className="text-[14px] xl:text-start lg:text-start md:text-center sm:text-center px-3 text-[#777777]">
                <li className="my-3">Web Design</li>
                <li className="my-3">Web Development</li>
                <li className="my-3">Product Management</li>
                <li className="my-3">Marketing</li>
                <li className="my-3">Grapich Design</li>
              </ul>
            </div>

            <div className="flex justify-center">
              <div className="">
                <p className="text-[#37517E] mb-3 text-[16px] font-bold xl:text-start lg:text-start md:text-center sm:text-center">
                  Our Social Networks
                </p>

                <p className="text-[14px] xl:text-start lg:text-start md:text-center sm:text-center w-[278px] mb-3 text-[#444444]">
                  Cras fermentum odio eu feugiat lide par naso tierra videa
                  magna derita valies
                </p>
                <div className="flex gap-2 xl:justify-start lg:justify-start md:justify-center sm:justify-center">
                  <div className="bg-[#47B2E4] p-[18px] rounded-full"></div>
                  <div className="bg-[#47B2E4] p-[18px] rounded-full"></div>
                  <div className="bg-[#47B2E4] p-[18px] rounded-full"></div>
                  <div className="bg-[#47B2E4] p-[18px] rounded-full"></div>
                  <div className="bg-[#47B2E4] p-[18px] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}
