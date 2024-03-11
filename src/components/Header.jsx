import React from "react";
// import app from '../assets/app-debug.apk'
const Header = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            width={130}
            src="https://img.freepik.com/premium-vector/cooking-logo-design_636083-140.jpg"
            alt=""
          />
          <span class="ml-3 text-xl" style={{ fontFamily: "cursive" }}>
            Cooking
          </span>
        </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a
            href="index.html"
            class="mr-5 hover:text-gray-900"
            style={{ cursor: "pointer", fontFamily: "cursive" }}
          >
            Home
          </a>
          <a
            class="mr-5 hover:text-gray-900"
            style={{ cursor: "pointer", fontFamily: "cursive" }}
          >
            Contact
          </a>
          <a class="mr-5 hover:text-gray-900" style={{ cursor: "pointer" }}
              style={{ cursor: "pointer", fontFamily: "cursive" }}
            >
            About
          </a>
          {/* <a class="mr-5 hover:text-gray-900"></a> */}
        </nav>
        <a
          href="https://github.com/prabhjot-arora31/Food_Recipe_Website/blob/main/src/assets/app-debug.apk"
          class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          style={{ fontFamily: "cursive", cursor: "pointer" }}
          download={true}
        >
          Download Android App &nbsp; <i class="fa-solid fa-download"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
