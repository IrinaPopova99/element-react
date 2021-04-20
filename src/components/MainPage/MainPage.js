import React from 'react';
import ArrowUp from '../Common/ArrowUp/ArrowUp';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProgramList from '../Program/ProgramList';
import ScheduleList from '../Schedule/ScheduleList';
import TeacherList from '../Teacher/TeacherList/TeacherList';

function MainPage() {
    return (
        <>
            <div id="header"><Header /></div>
            <div className="main">
                <div className="wrapper">
                    <div id="programs"><ProgramList /></div>
                    <div id="teachers"><TeacherList /></div>
                    <div id="schedule"><ScheduleList /></div>
                </div>
            </div>
            <Footer />
            <ArrowUp />
        </>
    )
}

export default MainPage;
