export const RevenueCard3 = ({
    title,
    showWarning,
    orderCount,
    amount,
    date

})=>{
    return <div className="rounded-md shadow-md  bg-blue1 flex flex-col justify-between  h-40 w-mywidth flex-grow">
        <div className="mb-5 text-neutral-50 text-sm flex items-center px-7 pt-3">
        {title}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ml-2.5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>

        </div>
        <div className="flex justify-between px-7">
            <div className="text-2xl text-white font-semibold">
            ₹{amount}
            </div>
            {orderCount ? <div className="flex items-center text-sm text-white">
                <div className="underline text-white">
                    {orderCount} orders 
                </div>
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

                </div> : null}
        </div>

        <div className="lowerSection flex justify-between h-10 text-white text-sm bg-blue2 rounded-md p-0 items-center px-7">
            <div>
                Next Payout Date
            </div>
         {date}
        </div>
       
    </div>
}