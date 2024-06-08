import { createBrowserRouter } from "react-router-dom"

import MonthBill from "@/pages/MonthBill"
import YearBill from "@/pages/YearBill"
import Bookkeeping from "@/pages/Bookkeeping"

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>默认页面</div> 
  },
  {
    path: '/monthly-bill',
    element: <MonthBill/> 
  },
  {
    path: '/yearly-bill',
    element: <YearBill/> 
  },
  {
    path: '/bookkeeping',
    element: <Bookkeeping/> 
  },
  
])

export default router