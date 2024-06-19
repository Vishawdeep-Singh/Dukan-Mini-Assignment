import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './Components/RevenueCard'
import { RevenueCard2 } from './Components/RevenueCard2'
import { RevenueCard3 } from './Components/RevenueCard3'
import { Navbar } from './Components/Navbar'
import { TxHistory } from './Components/TransactionHistory'
import { Sidebar } from './Components/Sidebar'

function App() {
  const data = [
    {
      orderId: "#281209",
      Status: "Successfull",
      TransactionId: "131634495747",
      RefundDate: "Today, 08:45 PM",
      OrderAmount: "₹1,125.00"
    },
    {
      orderId: "#281210",
      Status: "Pending",
      TransactionId: "131634495748",
      RefundDate: "Tomorrow, 09:00 AM",
      OrderAmount: "₹2,350.50"
    },
    {
      orderId: "#281211",
      Status: "Failed",
      TransactionId: "131634495749",
      RefundDate: "Next week, 10:30 AM",
      OrderAmount: "₹750.75"
    },
    {
      orderId: "#281212",
      Status: "Successfull",
      TransactionId: "131634495750",
      RefundDate: "Yesterday, 02:15 PM",
      OrderAmount: "₹3,500.00"
    },
    {
      orderId: "#281213",
      Status: "Pending",
      TransactionId: "131634495751",
      RefundDate: "Today, 11:20 AM",
      OrderAmount: "₹1,000.00"
    },
    {
      orderId: "#281214",
      Status: "Failed",
      TransactionId: "131634495752",
      RefundDate: "Tomorrow, 01:00 PM",
      OrderAmount: "₹625.50"
    },
    {
      orderId: "#281215",
      Status: "Successfull",
      TransactionId: "131634495753",
      RefundDate: "Next month, 09:30 AM",
      OrderAmount: "₹4,800.00"
    },
    {
      orderId: "#281216",
      Status: "Pending",
      TransactionId: "131634495754",
      RefundDate: "Today, 05:45 PM",
      OrderAmount: "₹2,200.75"
    },
    {
      orderId: "#281217",
      Status: "Failed",
      TransactionId: "131634495755",
      RefundDate: "Next week, 11:00 AM",
      OrderAmount: "₹875.25"
    },
    {
      orderId: "#281218",
      Status: "Successfull",
      TransactionId: "131634495756",
      RefundDate: "Yesterday, 04:00 PM",
      OrderAmount: "₹3,250.00"
    }
  ];
  
 
  
  return (
   
 
    
    <div className="flex items-center" >
       <Sidebar></Sidebar>
       <header className='w-full ml-[220px]'>
        
        <Navbar></Navbar>
        <section className='flex flex-col bg-[#fafafa]'>
            <div className="flex justify-between items-center m-10 bg-[#fafafa]">
              <h5 className="font-medium text-xl">Overview</h5>
              <button className="flex items-center gap-3 border rounded px-[14px] py-[6px] bg-white text-[#4D4D4D]">This Month
               <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg>
              </button>
              </div>
              <div className='flex flex-wrap gap-5 m-10 bg-[#fafafa]'>
                <RevenueCard3 title={"Next Payout"} amount={"2,312.23"} orderCount={23} date={"Today,4:00 PM"}></RevenueCard3>
               
               <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}></RevenueCard>
               <RevenueCard2 title={"Amount Processed"} amount={"23,92,312.19"}></RevenueCard2>
              </div>
               
            </section>
            <section className='flex flex-col gap-6 bg-[#fafafa]'>
            <div className="flex flex-col gap-6 m-10 bg-[#fafafa]">
              <h5 className="font-medium text-[#1A181E] text-xl">Transactions | This Month</h5>
              <div className="flex gap-3"><button className="px-4 py-[6px] bg-[#E6E6E6] text-[#808080] rounded-full">Payouts (22)</button>
              <button className="px-4 py-[6px] bg-[#146EB4] text-[#FFFFFF] rounded-full">Refunds (6)</button>
              </div>
              </div>
              
              <TxHistory Txdata={data}></TxHistory>  
              
              
            </section>
       
       </header>
       
       
    
    
    </div>
    
         

   
    
  )
}


export default App
