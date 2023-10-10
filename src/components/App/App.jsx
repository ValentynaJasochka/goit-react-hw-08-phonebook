import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { fetchCurrentUser } from 'redux/auth/AuthThunk';
import { selectІsRefreshing } from 'redux/auth/selectors';
import { PrivateRoute } from 'components/UserMenu/PrivateRoute';
import { PublicRoute } from 'components/UserMenu/PublicRoute';

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
const Home = lazy(() => import('pages/Home/Home'));
const RegisterView = lazy(() => import('components/RegisterView/RegisterView'));
const LoginView = lazy(() => import('components/LoginView/LoginView'));
const PhoneBook = lazy(() => import('pages/PhoneBook/PhoneBook'));
const NotFound = lazy(() => import('components/NotFound/NotFound'));

export const App = () => {
  const isRefreshing = useSelector(selectІsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <PublicRoute redirectTo="/login" component={<RegisterView />} />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute redirectTo="/contacts" component={<LoginView />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<PhoneBook />} />
              }
            />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </>
    )
  );
};
