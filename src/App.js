import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import RecovePassword from './layers/signin/RecovePassword';
import Signin from './layers/signin/Signin'
import Main from './layers/signin/Main'
import InfoAboutRecove from './layers/signin/InfoAboutRecove'
import InfoAboutSavedPassword from './layers/signin/InfoAboutSavedPassword'
import SaveRecovedPassword from './layers/signin/SaveRecovedPassword'
import PageH1 from './layers/health/PageH1';
import PageSearch from './layers/health/PageSearch';
import ShareNews from './layers/health/ShareNews';
import Profile from './layers/profile/Profile';
import Recommendation from './layers/profile/Recommendation';
import Purpose from './layers/profile/Purpose';
import Passport from './layers/profile/Passport';
import DisPage from './layers/disease/DisPage';
import Anketa from './layers/disease/Anketa';
import Register from './layers/register/Register';
import Clinic from './layers/doctor/Clinic';
import Clinic2 from './layers/doctor/Clinic2';
import Clinic3 from './layers/doctor/Clinic3';
// import ClinicDetail from './layers/doctor/ClinicDetail';
// import {RouterProvider} from './contextProviders/context'
// import { useHistory } from 'react-router-dom';

function App() {
  
  return (
      <Router> 
        <Switch>
              <Route path='/' exact component={Main}/>
              <Route path='/signin' component={Signin}/>
              <Route path='/register/:pageId' component={Register}/>
              <Route path='/recovePassword' component={RecovePassword}/>
              <Route path='/inforecove' component={InfoAboutRecove}/>
              <Route path='/savenewpassword' component={SaveRecovedPassword}/>
              <Route path='/infosaved' component={InfoAboutSavedPassword}/>
              <Route path='/health' component={PageH1}/>
              <Route path='/searchInfo' component={PageSearch}/>
              <Route path='/sharenews' component={ShareNews}/>
              <Route path='/profile' component={Profile}/>
              <Route path='/recommendation' component={Recommendation}/>
              <Route path='/purpose' component={Purpose}/>
              <Route path='/passport' component={Passport}/>
              <Route path='/disease' component={DisPage}/>
              <Route path='/anketa' component={Anketa}/>
              <Route path='/doctor' component={Clinic}/>
              <Route path='/clinic/:clinicId' component={Clinic2}/>
              <Route path='/clinic/:name/:clinicId' component={Clinic3}/>
              {/* <Route path='/clinic/:clinicId/:name' component={Clinic3}/> */}
        </Switch>
      </Router>
  );
}

export default App;
