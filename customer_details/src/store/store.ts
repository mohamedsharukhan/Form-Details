import { configureStore } from "@reduxjs/toolkit";

import formList from "./reducer";

export default configureStore({
  reducer: {
    formData: formList,
  },
});
