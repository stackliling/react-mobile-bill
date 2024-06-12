import { NavBar, DatePicker, Toast } from "antd-mobile";
import { DownOutline } from "antd-mobile-icons";
import "./index.css";
import { useState } from "react";

export default function MonthBill() {

  const [visible, setVisible] = useState(true)

  const handleClickArrow = () => {
    console.log(1);
    setVisible((state) => {
      state.visible = !state.visible
    })
  }

  return (
    <>
      <div className="monthly-bill">
        <NavBar>月度账单</NavBar>
        <div className="content">
          <div className="header">
            {/* 时间切换区域 */}
            <div className="date">
              <span className="text">2023 | 3月账单</span>
              <span className="arrow" onClick={() => handleClickArrow}>
                <DownOutline />
              </span>
            </div>
            {/* 统计区域 */}
            <div className="overview">
              <div className="item">
                <span className="money">(100)</span>
                <span className="type">支出</span>
              </div>
              <div className="item">
                <span className="money">(200)</span>
                <span className="type">收入</span>
              </div>
              <div className="item">
                <span className="money">(200)</span>
                <span className="type">结余</span>
              </div>
            </div>
          </div>
        </div>
        {/* 时间选择 */}
        <DatePicker
          visible={visible}
          onClose={() => {
            setVisible(false)
          }}
          precision='month'
          onConfirm={val => {
            Toast.show(val.toString())
          }}
        />
      </div>
    </>
  );
}
