import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import { PostsPage } from './pages/posts';
import { Root } from './components/Root';
import { DetailPostPage } from './pages/posts/detail';
import {EditPostPage } from './pages/posts/edit';
import { AddPostPage } from './pages/posts/add';
import { AuthPage } from './pages/auth';
import { RegistrationPage } from './pages/registration';
import { store } from './redux/store'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index: true,
        element: <App/>,
      },
      {
        path: "posts",
        element: <PostsPage/>,
      },
      {
        path: "posts/:id",
        element: <DetailPostPage/>,
      },
      {
        path: "posts/:id/edit",
        element: <EditPostPage/>,
      },
      {
        path: "posts/add",
        element: <AddPostPage/>,
      },
      {
        path: "auth",
        element: <AuthPage/>,
      },
      {
        path: "registration",
        element: <RegistrationPage/>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root')  as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);



