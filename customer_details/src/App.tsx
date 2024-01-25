import { Container } from "@mui/material";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import FormComponent from "./component/stepOneForm/FormComponent ";
import FormComponentTwo from "./component/stepTwoForm/FormComponentTwo";
import FormDetail from "./component/formDetails/FormDetail";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<FormComponent />} />
          <Route path="/step_two" element={<FormComponentTwo />} />
          <Route path="/form_details" element={<FormDetail />} />
        
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
