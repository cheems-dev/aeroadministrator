import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
// Config
import { ROL } from '../../config/roles.config';

const PrivateRoute = ({ component, path }) => {
  const { admin } = useSelector((state) => state.authReducer);

  return admin.rol === ROL.ADMIN ? (
    <Route component={component} path={path} />
  ) : (
    <Redirect to='/' />
  );
};

export default PrivateRoute;
