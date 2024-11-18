import React, { useState } from "react";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import HideIcon from "../components/icons/HideIcon";
import ShowIcon from "../components/icons/ShowIcon";

interface Props {
  className?: string;
}
interface Values {
  password: string;
  email: string;
}

const LoginPage: React.FC<Props> = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .trim()
      .min(
        6,
        "Password must be at least 6 characters \n and cannot contain only spaces"
      )
      .required("Password is required"),
  });

  return (
    <div className="h-screen  flex  justify-center items-center ">
      <div className=" rounded-2xl w-72  border  p-6 border-elements-main h-fit md:w-96">
        <h1 className="text-2xl mb-5 dark:text-dt-text-main">Log in</h1>
        <Formik
          initialValues={{
            password: "",
            email: "",
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
          validationSchema={validationSchema}
        >
          <Form className=" flex flex-col">
            <label htmlFor="email" className="text-sm dark:text-dt-text-main">
              Email
            </label>

            <Field
              id="email"
              name="email"
              placeholder="Email"
              className="border rounded-xl border-elements-main  p-1 mb-4 bg-transparent focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-accent-color"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-negative-color text-sm mb-4"
            />

            <label
              htmlFor="password"
              className="text-sm dark:text-dt-text-main"
            >
              Password
            </label>
            <div className="relative mb-4 ">
              <Field
                id="password"
                name="password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                className="border w-full rounded-xl border-elements-main  p-1 bg-transparent focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-accent-color"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-1 text-sm focus:outline-none"
              >
                {showPassword ? (
                  <HideIcon svgStyles="size-6 fill-none stroke-elements-main stroke-2" />
                ) : (
                  <ShowIcon svgStyles="size-6 fill-none stroke-elements-main stroke-2" />
                )}
              </button>
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className="text-negative-color text-sm mb-4"
            />

            <button
              type="submit"
              className="mb-4 p-2 bg-accent-color rounded-xl focus:bg-active-accent-color hover:bg-active-accent-color"
            >
              Submit
            </button>
            <Link
              to="/register"
              className="text-sm text-center  underline underline-offset-1 focus:text-accent-color hover:text-accent-color dark:text-dt-text-main dark:focus:text-accent-color dark:hover:text-accent-color"
            >
              Create a CryptoHUB Account
            </Link>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
