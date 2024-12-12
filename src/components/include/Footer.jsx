import React from 'react';
import { TwitterIcon, InstaIcon } from '../../icon/icon.jsx';
import { useNavigate } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const navigate = useNavigate(); // React Router의 네비게이션 함수 사용
    /* 캘린더 map */
    const [calendars] = React.useState([ "My calendar", "calendar"])
    const calhandleNav = (calendar) => {
        if(calendar === "My calendar") {
            navigate('/calendar')
        }else if(calendar === "calendar") {
            navigate('/')
        }
    }
    /* 커뮤니티 map */
    const [commus] = React.useState([ "My Community", "Community"])
    const comhandleNav = (commu) => {
        if(commu === "My Community") {
            navigate('/community_list')
        }else if(commu === "Community") {
            navigate('/')
        }
    }
    /* 극장 map */
    const [theaters] = React.useState([ "My theater", "theater"])
    const thhandleNav = (theater) => {
        if(theater === "My theater") {
            navigate('/theater_list')
        }else if(theater === "theater") {
            navigate('/')
        }
    }

    return (
        <>
            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5>Calendar</h5>
                            <ul className="nav flex-column">
                                {calendars.map((calendar, index)=>(
                                    <li key={index} className="nav-item mb-2">
                                        <span 
                                            className="nav-link p-0 text-body-secondary"
                                            onClick={()=>calhandleNav(calendar)}>
                                            {calendars[index]}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-6 col-md-2 mb-3">
                            <h5>Community</h5>
                            <ul className="nav flex-column">
                            {commus.map((commu, index)=>(
                                    <li key={index} className="nav-item mb-2">
                                        <span 
                                            className="nav-link p-0 text-body-secondary"
                                            onClick={() => comhandleNav(commu)}>
                                            {commus[index]}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-6 col-md-2 mb-3">
                            <h5>Theater</h5>
                            <ul className="nav flex-column">
                                {theaters.map((theater, index)=>(
                                    <li key={index} className="nav-item mb-2">
                                        <span 
                                            className="nav-link p-0 text-body-secondary"
                                            onClick={() => thhandleNav(theater)}>
                                            {theaters[index]}
                                        </span>
                                </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-5 offset-md-1 md-3">
                            <form action="">
                                <h5>Fill the space you like</h5>
                                <p className='p'>It doesn’t matter whether it’s a movie, a play, a musical, anything.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label htmlFor="search_text" className="visually-hidden"> 검색어를 입력하세요. </label>
                                    <input id="search_text" type="text" className="form-control" placeholder="검색어를 입력하세요." />
                                    <button 
                                        className="btn btn-dark"
                                        type="button"
                                        onClick={() => navigate('/')} // 검색 버튼 클릭 시 네비게이트
                                    >
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                            <p>Archaive Homepage Copyright&copy;2024</p>
                            <ul className="list-unstyled d-flex">
                                <li className="ms-3">
                                    <div>
                                        <span 
                                            onClick={() => window.open("https://x.com", "_blank")} 
                                            //style={{ cursor: 'pointer' }}
                                        >
                                            <TwitterIcon />
                                        </span>
                                    </div>
                                </li>
                                <li className="ms-3">
                                    <div>
                                        <span 
                                            onClick={() => window.open("https://instagram.com/", "_blank")} 
                                            //style={{ cursor: 'pointer' }}
                                        >
                                            <InstaIcon />
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;
