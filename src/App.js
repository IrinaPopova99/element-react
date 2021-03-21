import './App.css';
import ArrowUp from './components/ArrowUp/ArrowUp';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProgramList from './components/Program/ProgramList';
import ScheduleList from './components/Schedule/ScheduleList';
import TeacherList from './components/Teacher/TeacherList/TeacherList';

function App() {
  return (
    <div className="App">
      <div id="header"><Header /></div>
      <div id="programs"><ProgramList /></div>
      <div id="teachers"><TeacherList /></div>
      <div id="schedule"><ScheduleList /></div>
      <Footer />
      <ArrowUp />
    </div>
  );
}

export default App;
