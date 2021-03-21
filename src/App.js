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
      </Switch>
    </Router>
  );
}

export default App;
