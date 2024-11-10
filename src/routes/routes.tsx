import { Route, Routes } from "react-router";
import RegisterForm from "../pages/RegistrationPage";
import LoginForm from "../pages/LoginPage";
import PostPage from "../pages/PostPage";
import ProfilePage from "../pages/ProfilePage";
import AddPostPage from "../pages/addPostPage";
function AppRouter() {
  return (
    <Routes>
      <Route path="/registration" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/addpost" element={<AddPostPage />} />
      <Route
        path="/"
        element={
          <>
            <PostPage />
          </>
        }
      />
    </Routes>
  );
}

export default AppRouter;
