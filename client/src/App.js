import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Jobs from './pages/Jobs';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import EditProfile from './pages/EditProfile';
import MyJobs from './pages/MyJobs';
import JobApply from './pages/JobApply';
import JobApplyPage1 from './components/JobApplyPage1';
import JobApplyPage2 from './components/JobApplyPage2';
import JobApplyPage3 from './components/JobApplyPage3';
import JobApplyPage4 from './components/JobApplyPage4';
import JobApplyPage5 from './components/JobApplyPage5';
import PostJob from './pages/PostJob';
import PostJobPage2 from './components/PostJobPage2';
import PostJobPage1 from './components/PostJobPage1';
import CreateAccount from './components/CreateAccount';
import { AccountInfo } from './components/AccountInfo';
import EmployerNotification from './components/EmployerNotification';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/signup'
          element={<SignUp />}
        />
        <Route
          path='/job'
          element={<Jobs />}
        />
        <Route
          path='/profile'
          element={<Profile />}
        />

        <Route
          path='/notification'
          element={<Notifications />}
        />
        <Route
          path='/edit-profile'
          element={<EditProfile />}
        />

        <Route
          path='/my-jobs'
          element={<MyJobs />}
        />
        
        <Route
          path='/employer/create-account'
          element= {<CreateAccount/>}
        />

        <Route
          path='/employer/account'
          element= {<AccountInfo/>}
        />
        <Route
          path='/employer/notification'
          element= {<EmployerNotification/>}
        />


      </Routes>
      <Routes>
        <Route path='/job-apply/*' element={<JobApply />}>

          <Route index element={<JobApplyPage1 />} />
          <Route path="page-2" element={<JobApplyPage2 />} />
          <Route path="page-3" element={<JobApplyPage3 />} />
          <Route path="page-4" element={<JobApplyPage4 />} />
          <Route path="page-5" element={<JobApplyPage5 />} />

        </Route>

      </Routes>

      <Routes>
        <Route path='/job-post/*' element={<PostJob />}>
          <Route index element={<PostJobPage1 />} />
          <Route path="page-2" element={<PostJobPage2 />} />
        
        </Route>

      </Routes>



    </>
  );
}

export default App;
