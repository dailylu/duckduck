import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
// URL이 바뀌지 않게 하기 위해서 필요한 라이브러리 >> 제일 하단 내용 참고
import { Link } from 'react-router-dom'
import logo from "../../images/logo.jpg"
import './Header.css'

const Header = () => {
    //아래 부분이 화면 처리부
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container className='container' >
                    <Navbar.Brand href="/" >
                        <img src={ logo } alt="" width="30" height="24" />
                        Archaive
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/calendar" className="nav-link">Calendar</Link>
                        <Link to="/community_list" className="nav-link">Community</Link>
                        <Link to="/theater_list" className="nav-link">Theater</Link>
                        <Link to="/login" className="nav-link">Login</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header

/*
    페이지 이동 시 href를 사용하면 URL이 변한다.
        - 기존 요청은 끊어지고 새로운 요청이 일어난다. (기존 페이지가 쥐고 있던 데이터는 잃어버린다.)
        - 리엑트에서는 이렇게 진행하면 안된다. - https://docs.tosspayments.com/resources/glossary/spa
            - URL이 바뀌면 안되고 Router에 있는 APP하나로만 페이지 처리를 해야한다.
            - 화면이 변하더라도 URL이 변하면 안된다.
            * <Link to="/"></Link>
*/