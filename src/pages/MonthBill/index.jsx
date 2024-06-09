import { Button } from "antd-mobile"
import { useSelector, useDispatch } from "react-redux"
import { setBillList } from '@/store/modules/bill'
 
export default function MonthBill() {
  const { billList } = useSelector(state => state.bill)

  const dispatch = useDispatch()

  return (
    <>
      月度账单
      <ul>{billList.map(c => <li key={c.id}>{c.name}</li>)}</ul>
      <Button color="primary" onClick={() => dispatch(setBillList([{
        id: 1002,
        name: '李四'
      }]))}>我是按钮</Button>
    </>
  )
}