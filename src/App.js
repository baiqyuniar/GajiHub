import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Login = lazy(() => import("./components/Login"));
const BlogMenus = lazy(() => import("./pages/BlogMenu"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const DaftarPaket = lazy(() => import("./pages/DaftarPaket"));
const Harga = lazy(() => import("./pages/Harga"));
const LandingPage = lazy(() => import("./pages/LandingPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={false}>
              <LandingPage />
            </Suspense>
          }
        />
        <Route
          path="/harga"
          element={
            <Suspense fallback={false}>
              <Harga />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={false}>
              <BlogPage />
            </Suspense>
          }
        />
        <Route
          path="/blogs"
          element={
            <Suspense fallback={false}>
              <BlogMenus />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={false}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/daftar"
          element={
            <Suspense fallback={false}>
              <DaftarPaket />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
