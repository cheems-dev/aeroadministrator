import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
// Admin Components
import Layout from '../AdministratorScope/Layout/Layout';
import PrivateRoute from '../AdministratorScope/Components/PrivateRouteContainer/PrivateRouteContainer';
// Admin Screens
import CoursesDetails from '../AdministratorScope/Components/Admin/Education/Courses/Active/CoursesDetails';
import CoursesEndDetails from '../AdministratorScope/Components/Admin/Education/Courses/End/CoursesEndDetails';
import FinanceDetails from '../AdministratorScope/Components/Admin/Education/Finances/Details/FinanceDetails';
import ProgramsDetails from '../AdministratorScope/Components/Admin/Education/Programs/Active/ProgramsDetails';
import ProgramsEndDetails from '../AdministratorScope/Components/Admin/Education/Programs/End/ProgramsEndDetails';
import Articles from '../AdministratorScope/Screens/Dashboard/Admin/Articles';
import AdminCourses from '../AdministratorScope/Screens/Dashboard/Admin/Courses';
import Finance from '../AdministratorScope/Screens/Dashboard/Admin/Finance';
import GeneralRegister from '../AdministratorScope/Screens/Dashboard/Admin/GeneralRegister';
import Interviews from '../AdministratorScope/Screens/Dashboard/Admin/Interviews';
import LiveStream from '../AdministratorScope/Screens/Dashboard/Admin/LiveStream';
import LoginAdministrator from '../AdministratorScope/Screens/Login/Login';
// Eventos Components
import LayoutLegal from '../FeriaScope/Components/Legal/Components/Layout/LayoutLegal';
import PartLegal from '../FeriaScope/Screens/PartLegal';
import LayoutFeria from '../FeriaScope/Components/Global/Layout/LayoutFeria';
// Eventos Screens
import Legal from '../FeriaScope/Screens/Legal';
import Home from '../FeriaScope/Screens/Home';
import Delegations from '../FeriaScope/Screens/Delegations';
import GeneralPublic from '../FeriaScope/Screens/GeneralPublic';
import FAQ from '../FeriaScope/Screens/FAQ';
import Exhibitors from '../FeriaScope/Screens/Exhibitors';
import Contact from '../FeriaScope/Screens/Contact';

// History
import history from './history';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        {/* Administrator Routes */}
        <Route exact path='/' component={Home} />
        <Route path='/login' component={LoginAdministrator} />
        {/* Eventos Routes */}
        <Route path='/event/'>
          <LayoutFeria>
            <Route exact path='/event/delegations' component={Delegations} />
            <Route
              exact
              path='/event/general-public'
              component={GeneralPublic}
            />
            <Route exact path='/event/faq' component={FAQ} />
            <Route
              exact
              path='/event/servicios-para-expositores'
              component={Exhibitors}
            />
            <Route exact path='/event/contact' component={Contact} />
          </LayoutFeria>
        </Route>

        <Route path='/admin/'>
          <Layout>
            <PrivateRoute
              exact
              path='/admin/general-register'
              component={GeneralRegister}
            />
            <PrivateRoute
              exact
              path='/admin/interviews'
              component={Interviews}
            />
            <PrivateRoute
              exact
              path='/admin/program/:id'
              component={ProgramsDetails}
            />
            <PrivateRoute
              exact
              path='/admin/program-end/:id'
              component={ProgramsEndDetails}
            />
            <PrivateRoute exact path='/admin/articles' component={Articles} />
            <PrivateRoute
              exact
              path='/admin/courses'
              component={AdminCourses}
            />
            <PrivateRoute
              exact
              path='/admin/course/:id'
              component={CoursesDetails}
            />
            <PrivateRoute
              exact
              path='/admin/course-end/:id'
              component={CoursesEndDetails}
            />
            <PrivateRoute
              exact
              path='/admin/live-streams'
              component={LiveStream}
            />
            <PrivateRoute exact path='/admin/finances' component={Finance} />
            <PrivateRoute
              exact
              path='/admin/finance/:id'
              component={FinanceDetails}
            />
          </Layout>
        </Route>

        {/* Eventos Legal */}
        <Route path='/legal/' exact>
          <LayoutLegal>
            <Route
              exact
              path='/legal/acuerdo-para-instructores'
              component={Legal}
            />
            <Route
              exact
              path='/legal/terminos-y-condiciones'
              component={PartLegal}
            />
          </LayoutLegal>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
