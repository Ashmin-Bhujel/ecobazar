import { Bag, Heart, Logo, Search } from "@/assets/icons";

export default function NavigationMiddle() {
  return (
    <div className="border-b border-gray-100">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo />
            <p className="text-h5 text-green-gray-900 font-500">Ecobazar</p>
          </div>

          {/* Search */}
          <div className="flex items-center text-sm">
            {/* Search Box */}
            <div className="w-[25rem] flex items-center gap-2 border border-gray-100 rounded-l-md border-r-0 px-4 py-3">
              <Search />
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                autoFocus
                className="outline-none border-none font-400"
              />
            </div>
            {/* Search Button */}
            <button className="bg-primary active:bg-primary-dark text-white border border-primary rounded-r-md font-600 px-6 py-3">
              Search
            </button>
          </div>

          {/* Cart */}
          <div>
            <div className="flex items-center">
              {/* Heart */}
              <div className="pr-4 border-r border-gray-200">
                <Heart />
              </div>

              {/* Shopping Cart */}
              <div className="flex items-center gap-4 pl-4">
                {/* Bag */}
                <div className="relative">
                  <Bag />
                  <p className="absolute -top-2 -right-2 bg-primary-dark text-white border border-white rounded-full text-tiny px-2 py-1">
                    2
                  </p>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1">
                  <p className="text-gray-700 text-tiny font-400">
                    Shopping cart:
                  </p>
                  <p className="text-gray-900 text-sm font-500">$57.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
