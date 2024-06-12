import { NavBar, DatePicker, Toast } from "antd-mobile";
import { DownOutline, UpOutline } from "antd-mobile-icons";
import "./index.css";
import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import _ from "lodash";

export default function MonthBill() {
  const [visible, setVisible] = useState(false);

  const [currDate, setCurrDate] = useState(dayjs(new Date()).format("YYYY-MM"));

  const { billList } = useSelector((state) => state.bill);


  const currentCost = useMemo(() => {
    // 对账单数据进行分组，以月份为分组条件
    // const group = _.groupBy(billList,(item) => dayjs(item.date).format('YYYY/MM'))
    // console.log(group);

    console.log(billList);

    const thisMonth = dayjs(currDate).format("YYYY/MM");
    console.log(thisMonth);

    const incomeList = _.groupBy(
      billList.filter((a) => !a.isPay),
      (item) => dayjs(item.date).format("YYYY/MM")
    )[thisMonth];

    console.log(incomeList);

    const payList = _.groupBy(
      billList.filter((a) => a.isPay),
      (item) => dayjs(item.date).format("YYYY/MM")
    )[thisMonth];

    let income,
      pay = 0;

    if (incomeList) {
      income = incomeList.reduce((a, c) => {
        return a + c.amount;
      }, 0);
    }

    if (payList) {
      pay = payList.reduce((a, c) => {
        return a + c.amount;
      }, 0);
    }

    console.log(income);

    return {
      income: income,
      pay: pay,
      total: income + pay,
    };
  }, [billList, currDate]);


  const handleClickArrow = () => {
    setVisible(true);
  };

  const onConfirm = (val) => {
    setCurrDate(dayjs(val).format("YYYY-MM"));
  };

  return (
    <>
      <div className="monthly-bill">
        <NavBar>月度账单</NavBar>
        <div className="content">
          <div className="header">
            {/* 时间切换区域 */}
            <div className="date">
              <span className="text">{currDate} 月账单</span>
              <span className="arrow" onClick={handleClickArrow}>
                {!visible && <DownOutline />}
                {visible && <UpOutline />}
              </span>
            </div>
            {/* 统计区域 */}
            <div className="overview">
              <div className="item">
                <span className="money">({currentCost.pay})</span>
                <span className="type">支出</span>
              </div>
              <div className="item">
                <span className="money">({currentCost.income})</span>
                <span className="type">收入</span>
              </div>
              <div className="item">
                <span className="money">({currentCost.total})</span>
                <span className="type">结余</span>
              </div>
            </div>
          </div>
        </div>
        {/* 时间选择 */}
        <DatePicker
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          precision="month"
          onConfirm={(val) => onConfirm(val)}
        />
      </div>
    </>
  );
}
