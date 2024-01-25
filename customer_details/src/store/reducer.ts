import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormListState {
  formItems: any[];
  fullFormData: any[];
}

export const formList: any = createSlice({
  name: "formData",
  initialState: {
    formItems: [],
    fullFormData: [],
  } as FormListState,
  reducers: {
    add: (state, action: PayloadAction<any>) => {
      const formVal = action.payload;
      state.formItems.push(formVal);
    },
    addDataTwo: (state, action: PayloadAction<any>) => {
      const formVal = action.payload;
      state.fullFormData.push(formVal);
    },
  },
});

export const { add, addDataTwo } = formList.actions;

export default formList.reducer;
