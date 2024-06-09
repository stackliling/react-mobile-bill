import { Link, Outlet } from "react-router-dom";
import './index.css'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBillList } from "@/store/modules/bill";

export default function Layout() {

  const dispatch = useDispatch()
  
  // 相当于mounted钩子函数，组件加载完成时调用
  useEffect(() => {
    dispatch(getBillList())
  }, [dispatch])

  return (
    <>
      <div className="page-layout">
        <h1>我是layout</h1>
        <Outlet></Outlet>

        <div className="menu-list">
          <Link to="/">月度账单</Link>
          <Link to="/yearly-bill">年度账单</Link>
          <Link to="/bookkeeping">记一笔</Link>
        </div>
      </div>
    </>
  );
}
