export const TxHistory = ({
   Txdata
}) => {
    return <div className="  w-11/12 m-auto shadow-lg border-1 border-gray-500 h-auto rounded-[30px] flex flex-col" >
        <div className="flex justify-between items-center ">
            <div className="search-bar border-solid border-2 border-gray-300 rounded  w-80 flex items-center p-2 justify-center m-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-500 font-bold mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

                <input type="text" placeholder="OrderId or TransactionId" className=" w-30 border-none focus:outline-none  bg-transparent" />
            </div>
            <div className="rightButtons flex justify-center">
                <div className="first flex items-center border-solid border-2 border-gray-300 rounded h-11 p-2 mr-2">
                    <button className="mr-3 text-sm font-light">Sort
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>
                </div>
                <div className="first flex items-center border-solid border-2 border-gray-300 rounded h-11 p-2 mr-5">

               

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>

                </div>
            </div>
        </div>






    {/* Tx Table */}
    <div>
    <table className="table-fixed w-full">
  <thead>
    <tr className="bg-navbar-Search">
      <th className="font-medium p-2 text-sm text-left text-[#4D4D4D] py-4">Order Id</th>
      <th className="font-medium p-2 text-sm text-left  text-[#4D4D4D]">Status</th>
      <th className="font-medium p-2 text-sm text-left  text-[#4D4D4D]">Transaction ID</th>
      <th className="font-medium p-2 text-sm text-left  text-[#4D4D4D]">Refund Date</th>
      <th className="font-medium p-2 text-sm text-left  text-[#4D4D4D]">Order Amount</th>
    </tr>
  </thead>
  <tbody className="m-5 divide-y">
    {Txdata.map((data,index)=>{
        return <tr key={index}>
            <td className="text-blue-600 px-3 py-[10px] whitespace-nowrap text-xs">{data.orderId}</td>
            <td className="text-xs">
                
                {data.Status == "Successfull" ? (<span className="bg-green-500 h-[10px] w-[10px] rounded-full inline-block mr-2">
                    </span>) : null}
                {data.Status == "Failed" ? (<span className="bg-red-700 h-[10px] w-[10px] rounded-full inline-block mr-2">
                    </span>) : null}
                {data.Status == "Pending" ? (<span className="bg-gray-600 h-[10px] w-[10px] rounded-full inline-block mr-2">
                    </span>) : null}
                {data.Status}</td>
            <td className="text-xs">{data.TransactionId}</td>
            <td className="text-xs">{data.RefundDate}</td>
            <td className="text-xs">{data.OrderAmount}</td>
        </tr>
    })}
  </tbody>
</table>
    </div>


    </div>
}

