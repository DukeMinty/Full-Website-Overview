import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory} from "react-router-dom"; 

function CreatePost(){
    let history = useHistory();

    //Ensure aspects of posts
    const validationSchema = Yup.object().shape({
        

    // Content requirements
    postText: Yup.string()
      .min(20, "Content too short")
      .max(800, "Post content cannot exceed 800 characters")
      .required("Post content is required"),

    // Username requirements
    username: Yup.string()
      .min(3, "Username too short")
      .max(20, "Username cannot exceed 20 characters")
      .required("Username is required"),
  });

  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts", data).then((response) => {
            history.push("/");
          });

  
    }

  return (
    <div className="createPostPage">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className="formContainer">
          <label>Title Your Recipe: </label>
          <ErrorMessage name="title" component="span" id="warning" />
          <Field id="inputCreatePost" name="title" />

          <label>Tell Us About It: </label>
          <ErrorMessage name="postText" component="span" id="warning" />
          <Field as="textarea" id="inputCreatePost" name="postText" rows={1} />

          <label>Username: </label>
          <ErrorMessage name="username" component="span" id="warning" />
          <Field id="inputCreatePost" name="username" />

          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateUpload;
