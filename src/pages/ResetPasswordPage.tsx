import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { resetPassword } from "../redux/auth/authOperations";
import useNotification from "../hooks/useNotification";
import useTimer from "../hooks/useTimer";

interface ResetPasswordValues {
  email: string;
}

const ResetPasswordPage = () => {
  const initialValues = {
    email: "",
  };

  const { time, start, isRunning } = useTimer(5);

  const displayNotification = useNotification();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const handleSubmit = async (values: ResetPasswordValues) => {
    try {
      await resetPassword(values.email);
      displayNotification({
        message: "Email with reset link sent successfully",
        type: "success",
      });

      start();
    } catch (error) {
      if (error instanceof Error) {
        displayNotification({
          message: error.message,
          type: "error",
        });
      } else {
        displayNotification({
          message: "An unknown error occurred",
          type: "error",
        });
      }
    }
  };

  return (
    <div className=" mx-auto w-1/2    rounded-2xl  border  p-6 border-elements-main h-fit md:w-96">
      <h1 className="text-2xl mb-5 dark:text-dt-text-main">Reset Password</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty }) => (
          <Form className=" flex flex-col">
            <div className="mb-4 flex flex-col">
              <label htmlFor="email" className="text-sm dark:text-dt-text-main">
                Email
              </label>

              <Field
                id="email"
                name="email"
                placeholder="Email"
                className="border rounded-xl border-elements-main  p-1 bg-transparent focus:outline-none focus:ring-2 focus:ring-accent-color focus:border-accent-color dark:text-dt-text-main"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-negative-color text-sm"
              />
            </div>
            <button
              disabled={isRunning || !isValid || !dirty}
              type="submit"
              className={`mb-4 p-2 rounded-xl focus:outline-none ${
                isRunning || !isValid || !dirty
                  ? "bg-elements-main cursor-not-allowed"
                  : "bg-accent-color hover:bg-active-accent-color"
              }`}
            >
              Send Reset Email
            </button>
            {isRunning && (
              <p className="text-sm text-lt-text-main dark:text-dt-text-main">
                You can send another email in {time} seconds.
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResetPasswordPage;
