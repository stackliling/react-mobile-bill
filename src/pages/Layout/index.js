import { Link, Outlet } from "react-router-dom";
import './index.css'

export default function Layout() {
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
