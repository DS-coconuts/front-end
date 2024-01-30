import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from './pages/MainPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import RankingPage from './pages/RankingPage';
import TypingPage from './pages/TypingPage';
import ResultsPage from './pages/ResultsPage';
import MyPage from './pages/MyPage';
import HistoryPage from './pages/HistoryPage';
import EditProfilePage from './pages/EditProfilePage';
import FriendListPage from './pages/FriendListPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/ranking" element={<RankingPage/>} />
          <Route path="/typing" element={<TypingPage/>} />
          <Route path="/results" element={<ResultsPage/>} />
          <Route path="/my" element={<MyPage/>} />
          <Route path="/history" element={<HistoryPage/>} />
          <Route path="/editprofile" element={<EditProfilePage/>} />
          <Route path="/friendlist" element={<FriendListPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
