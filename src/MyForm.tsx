import { Button, TextField } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import * as React from "react";
import { MyField } from "./MyField";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ values }) => (
        <Form>
          <div>
            <Field
              name="firstName"
              placeholder="First name"
              component={MyField}
              label="First Name"
            />
          </div>
          <div>
            <Field
              name="lastName"
              placeholder="Last name"
              component={MyField}
              label="Last Name"
            />{" "}
          </div>
          <div>
            <Field
              name="email"
              placeholder="Email"
              component={MyField}
              label="Email"
            />
          </div>
          <Button type="submit">Submit</Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};
