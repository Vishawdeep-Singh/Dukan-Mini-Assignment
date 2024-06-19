export const Navbar=()=>{
  
return <div className="nav flex justify-between border-b-2 border-gray-300 p-3 shadow-sm">
<div className="logo flex items-center">
    <div className="text-2xl mr-6">
       Payouts  
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
<div className=" text-black font-light text-xs ml-2"> How it Works</div>

</div>
<div className="search-bar border-solid border-1 rounded-lg w-2/6 flex items-center bg-navbar-Search">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-500 font-bold mx-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

    <input type="text" placeholder=" Search features,tutorials,etc" className=" w-11/12 border-none focus:outline-none  bg-inherit"/>
</div>
<div className="buttons flex">
 
<button class="text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-2 sm:flex w-8 sm:w-10 sm:h-10 items-center justify-center mx-3">
  </button>
<button class="text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-2 sm:flex w-8 sm:w-10 sm:h-10 items-center justify-center">
  </button>
</div>
</div>
}