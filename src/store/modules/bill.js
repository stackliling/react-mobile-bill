import { createSlice } from "@reduxjs/toolkit";

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

// 导出action函数生成器
export const { setBillList } = billSlice.actions

// 默认导出reducer
export default billSlice.reducer