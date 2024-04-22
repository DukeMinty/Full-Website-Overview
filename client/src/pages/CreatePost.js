import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
function CreatePost() {

    const initial = {
        recipeTitle: "",
        recipeDesc: "",
        username: "",
    }
    const handleSubmit = (post)=>{
        
            axios.post("http://localhost:3050/uploads", post).then((response)=> {
              setListOfPosts(response.post);
            })
        }
    
    const validation = Yup.object().shape({
        recipeTitle: Yup.string().required(),
        recipeDesc: Yup.string().required(),
        userName: Yup.string().required()
    });

  return (
    <div className="createPostPage">
        <Formik initialValues={initial} onSubmit={handleSubmit} validationSchema={validation}>
            <Form>
                <label>Recipe Name: </label>
                <ErrorMessage name="recipeTitle" component="span"></ErrorMessage>
                <Field id="inputPost" name="recipeTitle" placeholder="Recipe Name"></Field>

                <label>Recipe Description: </label>
                <ErrorMessage name="recipeDesc" component="span"></ErrorMessage>
                <Field id="inputPost" name="recipeDesc" placeholder="Recipe Desc."></Field>

                <label>Username: </label>
                <ErrorMessage name="userName" component="span"></ErrorMessage>
                <Field id="inputPost" name="userName" placeholder="Username"></Field>

                <button type="submit">Upload Recipe!</button>
            </Form>
        </Formik>
      
    </div>
  )
}

export default CreatePost





//if we want to use formik:

/*<Formik initialValues={} onSubmit={} validationSchema={}>
            <Form>
                <label>Recipe Name: </label>
                <Field id="inputPost" name="recipeTitle" placeholder="Recipe Name"></Field>

                <label>Recipe Description: </label>
                <Field id="inputPost" name="recipeDesc" placeholder="Recipe Desc."></Field>

                <label>Username: </label>
                <Field id="inputPost" name="userName" placeholder="Username"></Field>

                <button type="submit">Upload Recipe!</button>
            </Form>
        </Formik> */



//if we don't want to use formik:
/*<form onSubmit={handleSubmit} className="formContainer">
            
            <div className="inputPost">
                <label htmlFor="recipeTitle">Recipe Title: </label>
                <input 
                type="text" 
                id="recipeTitle" 
                value={formValues.recipeTitle||""} 
                onChange={handleChange}>
                </input>
            </div>
            
            <div className="inputPost">
                <label htmlFor="recipeDesc">Recipe Description: </label>
                <input 
                type="text" 
                id="recipeDesc"
                value={formValues.recipeDesc||""}
                onChange={handleChange}>
                </input>
            </div>
            
            <div className="inputPost">
                <label htmlFor="userName">Username: </label>
                <input 
                type="text" 
                id="userName"
                value={formValues.userName||""}
                onChange={handleChange}>
                </input>
            </div>
            
            <button type="submit" className="submitBtn">Upload Recipe!</button>
        </form>*/