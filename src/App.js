import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import RecovePassword from './layers/signin/RecovePassword';
import Signin from './layers/signin/Signin'
import Main from './layers/signin/Main'
import InfoAboutRecove from './layers/signin/InfoAboutRecove'
import InfoAboutSavedPassword from './layers/signin/InfoAboutSavedPassword'
import SaveRecovedPassword from './layers/signin/SaveRecovedPassword'
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
            <Route/>
            <Route/>
            <Route/>
      </Switch>
    </Router>
  );
}

export default App;
