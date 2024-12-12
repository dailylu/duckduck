import React, { useState } from 'react';
import Header from '../include/Header'
import Footer from '../include/Footer'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap'; // 부트스트랩 플러그인
//import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 CSS
import './CalendarPage.css'; // 사용자 정의 CSS 파일

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  
  return (
    <>
      <Header />
      <div className="calendar-page">
      <h1 className="calendar-title">Insert Your Schedule</h1>
      <p className="calendar-subtitle">이미지와 함께 일정을 추가하세요.</p>
      {/* FullCalendar 컴포넌트 */}
      <FullCalendar
        plugins={[dayGridPlugin, bootstrapPlugin]} // 플러그인 추가
        initialView="dayGridMonth"
        //themeSystem="bootstrap" // 부트스트랩 테마 활성화
        events={events}
        headerToolbar={{
          left: 'title,prev,next today', // 타이틀을 버튼 옆으로 이동
          center: '', // 중앙은 비움
          right: 'dayGridMonth,dayGridWeek', /* ,dayGridDay */
        }} // 헤더 버튼 레이아웃
        titleFormat={{month: 'long'}}
      />
      </div>
      <Footer />
    </>
  )
}

export default CalendarPage