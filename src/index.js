import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form } from "formik";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";

import { cities } from "../data/cities";

import "./styles.css";

const initialValues = {
  city_id: { name: "", id: null, state: "" }
};

const submit = values => {
  alert(`Value for city_id is: ${JSON.stringify(values.city_id)}`);
};

function App() {
  return (
    <Formik initialValues={initialValues} onSubmit={submit}>
      {({ handleChange, values, setFieldValue }) => (
        <Form>
          <Autocomplete
            id="city_id"
            name="city_id"
            options={cities}
            getOptionLabel={option => option.name}
            style={{ width: 300 }}
            onChange={(e, value) => {
              console.log(value);
              setFieldValue(
                "city_id",
                value !== null ? value : initialValues.city_id
              );
            }}
            renderInput={params => (
              <TextField
                margin="normal"
                label="Cities"
                fullWidth
                name="city_id"
                {...params}
              />
            )}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
