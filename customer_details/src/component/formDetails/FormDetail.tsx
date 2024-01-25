import { useEffect } from "react";
import { useSelector } from "react-redux";
import DataTable from "datatables.net-dt";
import "datatables.net-dt/css/jquery.dataTables.css";
import { Box, Container, Typography } from "@mui/material";

function FormDetail() {
  const formData = useSelector((state: any) => state.formData.fullFormData);
  useEffect(() => {
    new DataTable("#myTable", {
      data: formData,
      columns: [
        { title: "Name", data: "name" },
        { title: "Age", data: "age" },
        { title: "Gender", data: "gender" },
        { title: "Mobile", data: "mobile" },
        { title: "IdType", data: "idType" },
        { title: "GovtIssuedId", data: "govtIssuedId" },
        { title: "Address", data: "address" },
        { title: "State", data: "state" },
        { title: "City", data: "city" },
        { title: "Country", data: "country" },
        { title: "Pincode", data: "pincode" },
      ],
    });
  }, [formData]);

  return (
    <Container fixed sx={{ paddingTop: "10rem" }}>
      <Typography variant="h5">Form Details</Typography>
      <Box>
        <table id="myTable"></table>
      </Box>
    </Container>
  );
}

export default FormDetail;
