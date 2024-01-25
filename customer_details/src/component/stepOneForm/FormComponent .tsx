import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
} from "@mui/material";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { formSchemaOne } from "../../schema/schema";
import { useDispatch } from "react-redux";
import { add } from "../../store/reducer";

type FormData = {
  name: string;
  age: number;
  gender: string;
  mobile: number;
  idType: string;
  govtIssuedId: string;
};

function FormComponent() {
  const dispatch = useDispatch();
  const schema = formSchemaOne;

  const navigate = useNavigate();

  const [gender, setGender] = useState("");
  const [idType, setIdType] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    if (data) {
      dispatch(add(data));
      navigate("/step_two");
    }
  };

  return (
    <Container fixed sx={{ paddingTop: "10rem" }}>
      <Typography variant="h3">Step 1</Typography>

      <Card variant="outlined">
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="age"
              label="Age"
              {...register("age")}
              error={!!errors.age}
              helperText={errors.age?.message}
            />

            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-standard-label">
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                {...register("gender")}
                value={gender}
                onChange={(e) => setGender(e.target.value as string)}
                label="Gender"
              >
                <MenuItem value="">
                  <em>select your gender</em>
                </MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="mobile"
              label="Mobile"
              {...register("mobile")}
              error={!!errors.mobile}
              helperText={errors.mobile?.message}
            />

            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-standard-label">
                Govt Issued ID Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                {...register("idType")}
                value={idType}
                onChange={(e) => setIdType(e.target.value as string)}
                label="Govt Issued ID Type"
              >
                <MenuItem value="">
                  <em>select your govt issued id type</em>
                </MenuItem>
                <MenuItem value="Aadhar">Aadhar</MenuItem>
                <MenuItem value="Pan">Pan</MenuItem>
              </Select>
            </FormControl>

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="govtIssuedId"
              label="Govt Issued Id"
              {...register("govtIssuedId")}
              error={!!errors.govtIssuedId}
              helperText={errors.govtIssuedId?.message}
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

export default FormComponent;
