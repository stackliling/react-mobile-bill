import { Link, Outlet, useNavigate } from "react-router-dom";
import { NavBar, TabBar } from "antd-mobile";
import "./index.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBillList } from "@/store/modules/bill";

export default function Layout() {
  const tabs = [
    {
      key: "/",
      title: "月度账单",
      icon: "",
    },
    {
      key: "/bookkeeping",
      title: "记一笔",
      icon: "",
    },
    {
      key: "/yearly-bill",
      title: "年度账单",
      icon: "",
    },
  ];

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // 相当于mounted钩子函数，组件加载完成时调用
  useEffect(() => {
    dispatch(getBillList());
  }, [dispatch]);

  const setRouteActive = (value) => {
    console.log(value);
    navigate(value)
  }

  return (
    <>
      <div className="page-layout">
        <div className="page-content">
          <Outlet></Outlet>
        </div>

        <div className="footer">
          <TabBar onChange={value => setRouteActive(value)}>
            {tabs.map((item) => (
              <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
          </TabBar>
        </div>
      </div>
    </>
  );
}
