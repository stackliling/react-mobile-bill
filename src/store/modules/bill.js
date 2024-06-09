import { createSlice } from "@reduxjs/toolkit";
import axios from "@/axios";

export const billSlice = createSlice({
  name: 'bill',
  initialState: {
    billList: [{
      id: 1001,
      name: '张三'
    }],
  },
  reducers: {
    setBillList: (state, action) => {
      state.billList = action.payload
    }
  }
})

// 异步方法
const getBillList = () => {
  return async (dispatch) => {
    const res = await axios.get("/get_bill")
    dispatch(setBillList(res.data))
  }
}

// 导出action函数生成器
export const { setBillList } = billSlice.actions

export { getBillList }

// 默认导出reducer
export default billSlice.reducer