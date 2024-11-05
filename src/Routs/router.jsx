import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import React from "react";
import Welcome from "../Pages/Welcome/Welcome";
import OtpInput from "../Components/OtpInput";
import Login from "../Pages/Login/Login";
import Applying from "../Components/Applying";
import QuizQuestion from "../Pages/quiz/components/QuizQuestion";
import QuizPage from "../Pages/quiz/QuizPage";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Welcome/>
        },
        {
            path: "/egconversation",
            element: <Login/>
        },
        {
            path: "/otpverification",
            element: <OtpInput/>
        },
        {
            path: "/progress",
            element: <QuizPage/>
        }
        ,
        {
            path: "/applying",
            element: <Applying/>
        }
      ]
    },
  ]);

