import { yupResolver } from "@hookform/resolvers/yup";
import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { formSchemaTwo } from "../../schema/schema";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addDataTwo } from "../../store/reducer";
import { useNavigate } from "react-router-dom";

function FormComponentTwo() {
  const navigate = useNavigate();
  const formValue = useSelector((state: any) => state.formData.formItems);
  // console.log(formValue);

  const dispatch = useDispatch();
  const schema = formSchemaTwo;
  type FormData = {
    address: string;
    state: string;
    city: string;
    country: string;
    pincode: string;
  };

  const [country, setCountry] = useState<string>("");
  const [countries, setCountries] = useState<any[]>([]);

  const loadOptions = async (inputValue: string) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${inputValue}`
      );

      const countriesData = response.data;
      setCountries(countriesData);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    loadOptions("");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema) as any,
  });
  const onSubmit = (data: FormData) => {
    // console.log(data);
    const index = formValue.length - 1;
    const fullFormData = { ...formValue[index], ...data };
    dispatch(addDataTwo(fullFormData));
    navigate("/form_details");
  };

  const formData = useSelector((state: any) => state.formData.fullFormData);
  console.log(formData);

  return (
    <Container fixed sx={{ paddingTop: "10rem" }}>
      <Typography variant="h5">Step 2</Typography>
      <Card variant="outlined">
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="address"
              label="Address"
              {...register("address")}
              error={!!errors.address}
              helperText={errors.address?.message}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="state"
              label="State"
              {...register("state")}
              error={!!errors.state}
              helperText={errors.state?.message}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="city"
              label="City"
              {...register("city")}
              error={!!errors.city}
              helperText={errors.city?.message}
            />

            <Stack>
              <Autocomplete
                freeSolo
                id="country"
                {...register("country")}
                options={countries.map((country: any) => country.name.common)}
                inputValue={country}
                onInputChange={async (_, selectedOption) => {
                  await loadOptions(selectedOption);
                  setCountry(selectedOption || "");
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search Country"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              />
            </Stack>

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="pincode"
              label="Pincode"
              {...register("pincode")}
              error={!!errors.pincode}
              helperText={errors.pincode?.message}
            />

            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default FormComponentTwo;
