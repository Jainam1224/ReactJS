import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";
// import PageNotFound from "./pages/PageNotFound";

const HomePage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// Without lazyLoading all code inside 1 JS file
// dist/index.html                   0.46 kB │ gzip:   0.30 kB
// dist/assets/index-C-RGDIt9.css   29.77 kB │ gzip:   4.95 kB
// dist/assets/index-DvP4LNXn.js   566.49 kB │ gzip: 166.28 kB

// With lazyLoading Pages
// dist/index.html                           0.46 kB │ gzip:   0.29 kB
// dist/assets/Logo-BYigXoGP.css             0.03 kB │ gzip:   0.05 kB
// dist/assets/Login-B5O0XBJ4.css            0.35 kB │ gzip:   0.22 kB
// dist/assets/Product-ftt4lYil.css          0.47 kB │ gzip:   0.27 kB
// dist/assets/Homepage-DU-CjQIG.css         0.50 kB │ gzip:   0.30 kB
// dist/assets/PageNav-CcPXYRy9.css          0.51 kB │ gzip:   0.28 kB
// dist/assets/AppLayout-CNeo0IHn.css        1.91 kB │ gzip:   0.70 kB
// dist/assets/index-Xmnty0Hl.css           26.58 kB │ gzip:   4.37 kB
// dist/assets/Product.module-Be8LLB42.js    0.06 kB │ gzip:   0.07 kB
// dist/assets/PageNotFound-BXxcnkYD.js      0.15 kB │ gzip:   0.15 kB
// dist/assets/Logo-B4eE-x-H.js              0.21 kB │ gzip:   0.19 kB
// dist/assets/PageNav-JgaKSJLl.js           0.49 kB │ gzip:   0.27 kB
// dist/assets/Pricing-Fafsn2O4.js           0.65 kB │ gzip:   0.41 kB
// dist/assets/Homepage-BLmIODLE.js          0.67 kB │ gzip:   0.41 kB
// dist/assets/Product-BLb-Vhjd.js           0.86 kB │ gzip:   0.49 kB
// dist/assets/Login-D6keDrVq.js             1.01 kB │ gzip:   0.53 kB
// dist/assets/AppLayout-BC2yAycz.js       156.80 kB │ gzip:  46.04 kB
// dist/assets/index-BEVwSfP1.js           408.55 kB │ gzip: 119.94 kB

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                {/* Index route is the default route to be renderend when we land to /app page */}
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              {/* The * path matches for the route which didn't match to any other route - PageNotFound */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
