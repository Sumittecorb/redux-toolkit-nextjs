
const Details = () => {
    return (
        <>
            <div className="container mx-auto px-4 py-9">
                <div class="grid grid-cols-6 gap-4">
                    <div className="col-start-0 col-span-2 lg:col-span-2 max-[640px]:col-span-6">
                        <div>
                            <img src="/asset/img1.jpg" className="w-auto m-auto h-96" />
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="bg-orange-400 text-white w-32 mt-5 py-2 mr-3 ">Add to Cart</button>
                            <button className="bg-orange-500 text-white w-32 mt-5 py-2">Buy Now</button>
                        </div>
                    </div>
                    <div class="col-start-2 col-span-4 lg:col-span-3 md:col-span-4 sm:col-span-4 max-[640px]:col-span-6 py-5 px-5">
                        <h5 className="font-bold text-xl mb-2">Vibez by Lifelong Smartwatch for Women|1.85" HD Display|One Watch .Two Straps|Bluetooth Calling, Multiple Watch Faces,Health Tracker,7-Day Battery (VBSWW801,Hype Series)</h5>
                        <a className="hover:underline cursor-pointer text-cyan-600">Brand: Vibez</a>
                        <hr />
                        <p className="py-3 text-rose-700 font-bold">Deal of the Day</p>
                        <h5 className="text-black text-left text-2xl"><span className="text-red-600">-76% </span> ₹1,799</h5>
                        <small>M.R.P: <span className="line-through">₹7400</span></small>
                        <p className="text-sm mt-3">Inclusive of all taxes</p>
                        <p className="mb-4"><span className="font-bold">EMI</span> starts at ₹87. No Cost EMI available. </p>
                        <hr />
                    </div>
                    <div className="col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 max-[640px]:col-span-3 max-[425px]:col-span-6 border-2 border-slate-400 p-2">
                        <h5 className="text-black text-left text-2xl"> ₹1,799</h5>
                        <p className="mt-2"><span className="hover:underline cursor-pointer text-cyan-600"> FREE delivery </span><span>Thursday, 13 April.</span><span className="hover:underline cursor-pointer text-cyan-600"> Details</span></p>
                        <p className="mt-2">Or fastest delivery <span className="font-bold">Tomorrow, April 12.</span> Order within <span className="text-green-700">7 hrs 46 mins.</span><span className="hover:underline cursor-pointer text-cyan-600"> Details</span></p>
                        <div className="flex py-4">
                            <img src='/asset/location.svg' className="w-4 mr-2" />
                            <small>Select delivery location</small>
                        </div>
                        <h2 className=" text-green-600 text-xl">In stock</h2>
                        <p className="text-sm mt-3">Sold by <span className="hover:underline cursor-pointer text-cyan-600">VRP Telematics</span> and <span className="hover:underline cursor-pointer text-cyan-600">Fulfilled by Amazon.</span></p>
                        <div>
                            <button className="bg-yellow-400 text-white w-full rounded-3xl mt-5 py-2 mr-3 ">Add to Cart</button>
                            <button className="bg-orange-500 text-white w-full rounded-3xl mt-5 py-2">Buy Now</button>
                        </div>
                        <div className="flex py-4">
                            <img src='/asset/location.svg' className="w-4 mr-2" />
                            <small>Secure transaction</small>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add gift options</label>
                        </div>
                        <hr />
                        <button className=" border-2 border-slate-400 w-full rounded-xl mt-5 py-2">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details
