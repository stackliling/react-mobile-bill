import { createBrowserRouter } from "react-router-dom"

import MonthBill from "@/pages/MonthBill"
import YearBill from "@/pages/YearBill"
import Bookkeeping from "@/pages/Bookkeeping"
import Layout from "@/pages/Layout"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        // 不写path，设置该二级路由为默认路由
        index: true,
        // path: 'monthly-bill',
        element: <MonthBill/> 
      },
      {
        path: 'yearly-bill',
        element: <YearBill/> 
      }
    ]
  },

  {
    path: '/bookkeeping',
    element: <Bookkeeping/> 
  },
  
])

export default router