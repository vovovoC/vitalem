import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import RecovePassword from './layers/signin/RecovePassword';
import Signin from './layers/signin/Signin'
import Main from './layers/signin/Main'
import InfoAboutRecove from './layers/signin/InfoAboutRecove'
import InfoAboutSavedPassword from './layers/signin/InfoAboutSavedPassword'
import SaveRecovedPassword from './layers/signin/SaveRecovedPassword'
import Step1 from './layers/register/Step1';
import Step2 from './layers/register/Step2';
import Step3 from './layers/register/Step3';
import Step4 from './layers/register/Step4';
import Step5 from './layers/register/Step5';
import Step7 from './layers/register/Step7';
import Step8 from './layers/register/Step8';
import Step9 from './layers/register/Step9';
import Step10 from './layers/register/Step10';
import Step11 from './layers/register/Step11';
import Step12 from './layers/register/Step12';
import Step13 from './layers/register/Step13';
import Step6 from './layers/register/Step6';
import Step14 from './layers/register/Step14';
import PageH1 from './layers/health/PageH1';
import PageSearch from './layers/health/PageSearch';
import ShareNews from './layers/health/ShareNews';
import Profile from './layers/profile/Profile';
import Recommendation from './layers/profile/Recommendation';
import Purpose from './layers/profile/Purpose';
import Passport from './layers/profile/Passport';
function App() {
  
  return (
    <Router>
      <Switch>
            <Route path='/signin' component={Signin}/>
            <Route path='/recovePassword' component={RecovePassword}/>
            <Route path='/' exact component={Main}/>
            <Route path='/inforecove' component={InfoAboutRecove}/>
            <Route path='/savenewpassword' component={SaveRecovedPassword}/>
            <Route path='/infosaved' component={InfoAboutSavedPassword}/>
            <Route path='/register_step_1' component={Step1}/>
            <Route path='/register_step_2' component={Step2}/>
            <Route path='/register_step_3' component={Step3}/>
            <Route path='/register_step_4' component={Step4}/>
            <Route path='/register_step_5' component={Step5}/>
            <Route path='/register_step_6' component={Step6}/>
            <Route path='/register_step_7' component={Step7}/>
            <Route path='/register_step_8' component={Step8}/>
            <Route path='/register_step_9' component={Step9}/>
            <Route path='/register_step_10' component={Step10}/>
            <Route path='/register_step_11' component={Step11}/>
            <Route path='/register_step_12' component={Step12}/>
            <Route path='/register_step_13' component={Step13}/>
            <Route path='/register_step_14' component={Step14}/>
            <Route path='/health' component={PageH1}/>
            <Route path='/searchInfo' component={PageSearch}/>
            <Route path='/sharenews' component={ShareNews}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/recommendation' component={Recommendation}/>
            <Route path='/purpose' component={Purpose}/>
            <Route path='/passport' component={Passport}/>
      </Switch>
    </Router>
  );
}

export default App;
