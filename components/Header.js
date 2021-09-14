import tw from "twin.macro";

// This is an example of the "raw html" method with `tw` attributes for tailwind classNames.
const Header = () => (
  <nav tw="px-10 py-8 bg-gray-500">
    <div tw="flex justify-between items-center">
      <a tw="text-white text-2xl leading-none" href="#">
        <img
          tw="h-8"
          src="mockup-assets/logos/shuffle-ux-light.svg"
          alt=""
          width="auto"
        />
      </a>
      <div tw="lg:hidden">
        <button tw="block text-gray-50 hover:text-gray-200 focus:outline-none">
          <svg
            tw="h-4 w-4"
            fill="currentColor "
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <ul tw="hidden lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-10">
        <li>
          <a tw="text-sm text-gray-50 hover:text-gray-200" href="#">
            About
          </a>
        </li>
        <li>
          <a tw="text-sm text-gray-50 hover:text-gray-200" href="#">
            Company
          </a>
        </li>
        <li>
          <a tw="text-sm text-gray-50 hover:text-gray-200" href="#">
            Services
          </a>
        </li>
        <li>
          <a tw="text-sm text-gray-50 hover:text-gray-200" href="#">
            Testimonials
          </a>
        </li>
      </ul>
      <div tw="hidden lg:flex">
        <input
          tw="inline-block px-4 py-3 text-sm text-gray-50 placeholder-gray-50 font-semibold bg-gray-400 border border-transparent rounded-l"
          placeholder="Search"
        />
        <button tw="px-2 rounded-r bg-gray-400">
          <svg
            tw="text-gray-50 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
    <div tw="hidden relative z-50">
      <div tw="fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav tw="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
        <div tw="flex items-center mb-8">
          <a tw="mr-auto text-2xl font-semibold leading-none" href="#">
            <img
              tw="h-8"
              src="mockup-assets/logos/shuffle-ux.svg"
              alt=""
              width="auto"
            />
          </a>
          <button>
            <svg
              tw="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li tw="mb-1">
              <a
                tw="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded"
                href="#"
              >
                About
              </a>
            </li>
            <li tw="mb-1">
              <a
                tw="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded"
                href="#"
              >
                Company
              </a>
            </li>
            <li tw="mb-1">
              <a
                tw="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded"
                href="#"
              >
                Services
              </a>
            </li>
            <li tw="mb-1">
              <a
                tw="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded"
                href="#"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div tw="mt-auto">
          <p tw="mt-6 mb-4 text-sm text-center text-gray-400">
            <span>© 2021 All rights reserved.</span>
          </p>
        </div>
      </nav>
    </div>
  </nav>
);

export default Header;
