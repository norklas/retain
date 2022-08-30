export default function Hero() {
  return (
    <div className="mx-auto max-w-6xl p-12 flex items-center justify-center">
      <div className="flex flex-col md:flex-row justify-center mx-auto md:space-x-60">
        <div className="md:w-1/2 max-w-md flex flex-col justify-center">
          <h1 className="md:text-4xl text-xl font-black uppercase">
            Welcome to <span className="text-green-700">retain</span>!
          </h1>
          <div className="text-xl mt-4">
            Save, keep track, and update the status of all the jobs you have
            applied to!
          </div>
          <p className="text-xl mt-4">Please create an account to continue.</p>
        </div>
        <div className="md:w-1/2 flex justify-start mt-5 md:justify-end w-full">
          <div className="shadow-md flex-auto max-w-sm p-10 pb-20">
            <div className="w-full">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                <span className="text-red-400 mr-1">*</span> Username
              </div>
              <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                {" "}
                <input
                  placeholder="Enter username"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />{" "}
              </div>
            </div>
            <div className="w-full">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                <span className="text-red-400 mr-1">*</span> Email
              </div>
              <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                {" "}
                <input
                  placeholder="Enter email"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  type="email"
                />{" "}
              </div>
            </div>
            <div className="w-full">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                <span className="text-red-400 mr-1">*</span> Password
              </div>
              <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                {" "}
                <input
                  placeholder="Enter password"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  type="password"
                />{" "}
              </div>
            </div>
            <div className="w-full">
              <div className="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
                <span className="text-red-400 mr-1">*</span> Confirm Password
              </div>
              <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                {" "}
                <input
                  placeholder="Enter password"
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  type="password"
                />{" "}
              </div>
            </div>
            <div className="mt-6 relative">
              <button
                className="shadow-md font-medium py-2 px-4 text-green-100
                 bg-green-700 rounded text-lg tr-mt  absolute text-center w-full"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
