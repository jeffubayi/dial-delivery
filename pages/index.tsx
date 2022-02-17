import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, LinearProgress, Link } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { TextField, Select } from "formik-mui";
import MenuItem from "@mui/material/MenuItem";

interface Values {
  password: string;
  email: string;
  age: string;
}
const Home: NextPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={8}
        sx={{
          backgroundImage:
            "url(https://media.istockphoto.com/photos/young-cheerful-caucasian-delivery-man-in-red-uniform-sitting-on-and-picture-id1284623175?b=1&k=20&m=1284623175&s=170667a&w=0&h=v5dig2rTzurLxqZd3Yg8orgA23LXxrtvsQgljuzYONg=)",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <Paper
          sx={{
            my: 1,
            mx: 1,
            mt: 8,
            p: 8,
            borderRadius: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image height={70} width={70} src="/logo.png" />
          <Typography component="h1" variant="h5" sx={{ mt: 5 }}>
            Sign In
          </Typography>
          <Formik
            initialValues={{
              email: "",
              password: "",
              age: "",
            }}
            validate={(values) => {
              const errors: Partial<Values> = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                alert(JSON.stringify(values, null, 2));
              }, 500);
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <Form>
                <Field
                  component={TextField}
                  id="email"
                  label="Email Address"
                  name="email"
                  placeholder="jane@acme.com"
                  type="email"
                  fullWidth
                  autoFocus
                  margin="normal"
                  required
                />
                <Field
                  component={TextField}
                  id="password"
                  label="Password"
                  name="password"
                  placeholder="password"
                  type="password"
                  fullWidth
                  autoFocus
                  margin="normal"
                  required
                />
                <Grid lg={12}>
                  <Field
                    component={Select}
                    sx={{ width: "100%" }}
                    formHelperText={{ children: "How old are you?" }}
                    id="age"
                    name="age"
                    labelId="age-simple"
                    label="Age"
                    validate={(age: number) =>
                      !age
                        ? "Please enter your age"
                        : age < 18
                        ? "You must be 21 or older"
                        : undefined
                    }
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Field>
                </Grid>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                {isSubmitting && <LinearProgress />}
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 3, mb: 2 }}
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2" color="secondary">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2" color="secondary">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;
