import { useState } from 'react';
import { Container, Header, Body, Button, ButtonLink, Li, Line1, Line2, Line3 } from './styles';
import { AiFillHeart } from 'react-icons/ai'
import { FiUserPlus, FiUserCheck } from 'react-icons/fi'
import {RiFileList3Line} from 'react-icons/ri'
// import { useAuth } from "../../hooks/auth";
import { Link } from 'react-router-dom';
import icon from '../../assets/imgs/Energia.webp'
import { useEffect } from 'react';

export function Menu() {

  const [active, setActive] = useState('fechado')
  // const { signOut } = useAuth();

  function abrirMenu() {
    if (active == 'fechado') {
      setActive('aberto')
    } else if (active == 'aberto') {
      setActive('fechando')
      setTimeout(() => { setActive('fechado') }, 300)
    }
  }

  window.addEventListener("click", (event) => {

    if (event.clientY > 272) {
      if (active == 'aberto') {
        setActive('fechando')
        setTimeout(() => { setActive('fechado') }, 300)
      }
    }

  });

  return (
    <Container active={active} >

      <Header>

        <Link to={'/'} ><img src={icon} width={'60px'} /></Link>

        <button onClick={abrirMenu}>
          <Line1 active={active} />
          <Line2 active={active} />
          <Line3 active={active} />
        </button>

      </Header>

      <Body active={active}>

        <ul>

          <Li>
            <Button onClick={abrirMenu}> <FiUserPlus color='#ff4545' size={22} />Registrar-se</Button>
          </Li>
          <Li>
            <Button onClick={abrirMenu}> <FiUserCheck color='#47fa77' size={22} /> Entrar </Button>
          </Li>
          <Li acerto={true}>
            <Button onClick={abrirMenu}> <AiFillHeart color={'#ff4525'} size={22} /> Doar </Button>
          </Li>
          <Li>
            <ButtonLink to={'/creditos'}> <RiFileList3Line color={'darkcyan'} size={22} /> Créditos </ButtonLink>
          </Li>
          <Li>
            <ButtonLink to={'https://jamboeditora.com.br/'}> 
              <svg width="22" height="22" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="path-1-inside-1_364_5911" fill="white">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9932 3.4514C23.0285 2.12089 22.9145 1.2306 22.9145 1.2306C22.9145 0.809041 18.9258 0.897708 15.4653 2.06956C11.2016 3.51311 9.83554 5.74376 10.0825 6.27213C10.3281 6.79749 10.5363 7.20682 10.7746 7.67534C11.145 8.40357 11.5881 9.27482 12.3575 10.9471C12.745 11.7891 13.1826 13.0953 13.4403 14.4979C12.4561 15.0454 9.57072 16.2225 4.60049 14.8826C4.54579 14.8676 4.5146 14.9423 4.56317 14.9708C5.53554 15.5328 8.91941 17.1475 13.6018 15.6148C13.8978 18.4734 13.2332 21.334 9.75988 21.2536C4.82288 21.1385 2.57395 16.7482 2.07805 15.6236C2.05965 15.5811 1.99472 15.5992 2.00034 15.6454C2.37406 18.4785 4.98647 23 10.6556 23C16.7351 23 17.4894 16.7912 17.7268 14.8374C17.7367 14.7562 17.7457 14.6824 17.7541 14.6166C18.0096 12.622 17.8589 11.5765 17.7715 10.9705C17.7083 10.5326 17.6782 10.3241 17.8584 10.1527C18.8016 9.25464 21.1548 10.2497 21.8608 10.5789C21.9278 10.61 21.9958 10.5395 21.9631 10.4732L21.5975 9.73738C22.1712 8.55827 22.5183 7.31694 22.7238 6.15858C22.8136 5.59467 22.9932 4.26376 22.9932 3.4514ZM13.9592 9.64768C13.9188 9.67983 13.9362 9.74464 13.9874 9.7519C16.5042 10.1294 16.4167 8.48257 15.8365 7.77272C15.8114 7.74265 15.7644 7.7468 15.7429 7.77946C15.1581 8.66872 14.266 9.40761 13.9592 9.64768Z"></path>
              </mask>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9932 3.4514C23.0285 2.12089 22.9145 1.2306 22.9145 1.2306C22.9145 0.809041 18.9258 0.897708 15.4653 2.06956C11.2016 3.51311 9.83554 5.74376 10.0825 6.27213C10.3281 6.79749 10.5363 7.20682 10.7746 7.67534C11.145 8.40357 11.5881 9.27482 12.3575 10.9471C12.745 11.7891 13.1826 13.0953 13.4403 14.4979C12.4561 15.0454 9.57072 16.2225 4.60049 14.8826C4.54579 14.8676 4.5146 14.9423 4.56317 14.9708C5.53554 15.5328 8.91941 17.1475 13.6018 15.6148C13.8978 18.4734 13.2332 21.334 9.75988 21.2536C4.82288 21.1385 2.57395 16.7482 2.07805 15.6236C2.05965 15.5811 1.99472 15.5992 2.00034 15.6454C2.37406 18.4785 4.98647 23 10.6556 23C16.7351 23 17.4894 16.7912 17.7268 14.8374C17.7367 14.7562 17.7457 14.6824 17.7541 14.6166C18.0096 12.622 17.8589 11.5765 17.7715 10.9705C17.7083 10.5326 17.6782 10.3241 17.8584 10.1527C18.8016 9.25464 21.1548 10.2497 21.8608 10.5789C21.9278 10.61 21.9958 10.5395 21.9631 10.4732L21.5975 9.73738C22.1712 8.55827 22.5183 7.31694 22.7238 6.15858C22.8136 5.59467 22.9932 4.26376 22.9932 3.4514ZM13.9592 9.64768C13.9188 9.67983 13.9362 9.74464 13.9874 9.7519C16.5042 10.1294 16.4167 8.48257 15.8365 7.77272C15.8114 7.74265 15.7644 7.7468 15.7429 7.77946C15.1581 8.66872 14.266 9.40761 13.9592 9.64768Z" fill="currentColor"></path>
              <path d="M22.9145 1.2306H21.9145V1.29436L21.9226 1.35761L22.9145 1.2306ZM22.9932 3.4514L21.9936 3.4249L21.9932 3.43815V3.4514H22.9932ZM15.4653 2.06956L15.786 3.01674L15.786 3.01672L15.4653 2.06956ZM10.0825 6.27213L9.17652 6.69552L9.17656 6.6956L10.0825 6.27213ZM10.7746 7.67534L9.88325 8.12871L9.88325 8.12871L10.7746 7.67534ZM12.3575 10.9471L11.449 11.365L11.449 11.3651L12.3575 10.9471ZM13.4403 14.4979L13.9265 15.3717L14.5534 15.0229L14.4238 14.3172L13.4403 14.4979ZM4.60049 14.8826L4.33542 15.8469L4.34021 15.8482L4.60049 14.8826ZM4.56317 14.9708L4.0568 15.8331L4.06272 15.8365L4.56317 14.9708ZM13.6018 15.6148L14.5965 15.5118L14.4688 14.2788L13.2907 14.6644L13.6018 15.6148ZM9.75988 21.2536L9.73657 22.2534L9.73675 22.2534L9.75988 21.2536ZM2.07805 15.6236L1.16032 16.0208L1.16305 16.027L2.07805 15.6236ZM2.00034 15.6454L1.00764 15.7663L1.00893 15.7761L2.00034 15.6454ZM17.7268 14.8374L18.7195 14.958V14.958L17.7268 14.8374ZM17.7541 14.6166L18.746 14.7437L18.746 14.7437L17.7541 14.6166ZM17.7715 10.9705L18.7612 10.8277V10.8277L17.7715 10.9705ZM17.8584 10.1527L18.5477 10.8772L18.5479 10.8769L17.8584 10.1527ZM21.8608 10.5789L21.4382 11.4852L21.4395 11.4859L21.8608 10.5789ZM21.9631 10.4732L22.86 10.031L22.8587 10.0282L21.9631 10.4732ZM21.5975 9.73738L20.6983 9.29992L20.4832 9.74201L20.702 10.1823L21.5975 9.73738ZM22.7238 6.15858L23.7084 6.33327L23.71 6.32457L23.7114 6.31586L22.7238 6.15858ZM13.9874 9.7519L14.1357 8.76293L14.1279 8.76183L13.9874 9.7519ZM13.9592 9.64768L13.3429 8.86016L13.3365 8.86528L13.9592 9.64768ZM15.8365 7.77272L16.6108 7.13981L16.6049 7.1327L15.8365 7.77272ZM15.7429 7.77946L16.5784 8.32896L16.5786 8.32872L15.7429 7.77946ZM22.9145 1.2306C21.9226 1.35761 21.9226 1.3575 21.9226 1.3574C21.9226 1.35737 21.9225 1.35727 21.9225 1.35721C21.9225 1.35709 21.9225 1.35698 21.9225 1.35689C21.9225 1.3567 21.9225 1.35657 21.9224 1.35649C21.9224 1.35633 21.9224 1.35639 21.9225 1.35665C21.9225 1.35718 21.9227 1.35856 21.923 1.36077C21.9235 1.36518 21.9244 1.37292 21.9257 1.38388C21.9281 1.40579 21.9319 1.44054 21.9364 1.48727C21.9455 1.58075 21.9577 1.72194 21.969 1.90389C21.9916 2.26819 22.0103 2.79356 21.9936 3.4249L23.9929 3.4779C24.0114 2.77873 23.9908 2.1937 23.9652 1.78022C23.9524 1.57329 23.9382 1.40874 23.9271 1.29372C23.9215 1.23619 23.9166 1.19099 23.913 1.15902C23.9112 1.14303 23.9097 1.13035 23.9086 1.12107C23.908 1.11643 23.9075 1.11265 23.9072 1.10973C23.907 1.10827 23.9068 1.10702 23.9067 1.106C23.9066 1.10549 23.9066 1.10503 23.9065 1.10463C23.9065 1.10442 23.9065 1.10424 23.9065 1.10406C23.9064 1.10397 23.9064 1.10385 23.9064 1.10381C23.9064 1.10369 23.9064 1.10358 22.9145 1.2306ZM15.786 3.01672C17.4235 2.46223 19.2027 2.16004 20.5684 2.04928C21.2535 1.99372 21.8038 1.98888 22.1611 2.01615C22.2482 2.0228 22.3169 2.03085 22.3684 2.03894C22.4223 2.04742 22.444 2.05388 22.4423 2.05334C22.4406 2.05283 22.4251 2.04806 22.4004 2.03683C22.3771 2.02631 22.3305 2.0033 22.2744 1.9618C22.1735 1.8872 21.9145 1.64927 21.9145 1.2306H23.9145C23.9145 0.759227 23.6243 0.472588 23.4633 0.353546C23.3023 0.234483 23.1351 0.173979 23.0304 0.141752C22.809 0.0736591 22.5533 0.0402588 22.3133 0.0219472C21.8146 -0.0161028 21.1515 -0.00457358 20.4068 0.0558224C18.913 0.176965 16.9676 0.505029 15.1445 1.12239L15.786 3.01672ZM10.9884 5.84875C11.0385 5.9558 11.051 6.04672 11.0539 6.09872C11.0568 6.15135 11.0509 6.18317 11.0499 6.18834C11.0485 6.19571 11.0567 6.15308 11.106 6.05886C11.2032 5.87296 11.4084 5.58477 11.7724 5.23787C12.4937 4.55023 13.7681 3.69993 15.786 3.01674L15.1446 1.12237C12.8988 1.88273 11.3582 2.86954 10.3924 3.79021C9.91272 4.24746 9.55631 4.70623 9.33357 5.13228C9.22286 5.34405 9.13158 5.57365 9.08607 5.80979C9.04412 6.02738 9.02009 6.36078 9.17652 6.69552L10.9884 5.84875ZM11.6659 7.22197C11.4274 6.75309 11.2261 6.35722 10.9884 5.84866L9.17656 6.6956C9.42999 7.23776 9.64512 7.66055 9.88325 8.12871L11.6659 7.22197ZM13.2659 10.5291C12.4891 8.84063 12.0396 7.9567 11.6659 7.22197L9.88325 8.12871C10.2504 8.85045 10.6871 9.70902 11.449 11.365L13.2659 10.5291ZM14.4238 14.3172C14.1519 12.8368 13.69 11.4505 13.2659 10.529L11.449 11.3651C11.8 12.1278 12.2134 13.3538 12.4567 14.6786L14.4238 14.3172ZM4.34021 15.8482C9.57573 17.2595 12.7279 16.0386 13.9265 15.3717L12.9541 13.624C12.1844 14.0523 9.56572 15.1854 4.86077 13.9171L4.34021 15.8482ZM5.06952 14.1084C6.01706 14.6648 5.42086 16.1452 4.33542 15.8469L4.86555 13.9184C3.67072 13.5899 3.01215 15.2197 4.05682 15.8331L5.06952 14.1084ZM13.2907 14.6644C8.97494 16.0771 5.89393 14.585 5.06362 14.105L4.06272 15.8365C5.17715 16.4807 8.86389 18.2179 13.9129 16.5651L13.2907 14.6644ZM9.73675 22.2534C10.7435 22.2767 11.619 22.0878 12.3505 21.6839C13.0867 21.2774 13.6165 20.6862 13.9778 20.0047C14.6797 18.6811 14.7518 17.012 14.5965 15.5118L12.6071 15.7178C12.7478 17.0761 12.6357 18.2667 12.2109 19.0679C12.0089 19.4488 11.7398 19.7365 11.3837 19.933C11.023 20.1322 10.513 20.2708 9.78301 20.2539L9.73675 22.2534ZM1.16305 16.027C1.43681 16.6479 2.18271 18.1483 3.54328 19.5211C4.91608 20.9063 6.94548 22.1883 9.73657 22.2534L9.78319 20.2539C7.63728 20.2039 6.07371 19.2332 4.96383 18.1133C3.8417 16.981 3.21519 15.7239 2.99305 15.2201L1.16305 16.027ZM2.993 15.5244C3.06025 16.0762 2.67059 16.4604 2.29975 16.5642C1.92727 16.6685 1.38524 16.5404 1.16034 16.0208L2.99576 15.2263C2.75246 14.6643 2.16876 14.524 1.76062 14.6382C1.35413 14.752 0.934817 15.1683 1.00769 15.7663L2.993 15.5244ZM10.6556 22C5.64234 22 3.32224 18.0201 2.99176 15.5146L1.00893 15.7761C1.42587 18.937 4.3306 24 10.6556 24V22ZM16.7341 14.7168C16.6145 15.7014 16.38 17.564 15.5038 19.1732C14.6647 20.7141 13.2596 22 10.6556 22V24C14.1311 24 16.1429 22.1815 17.2602 20.1296C18.3404 18.1459 18.6018 15.9272 18.7195 14.958L16.7341 14.7168ZM16.7622 14.4895C16.7533 14.5592 16.7439 14.6365 16.7341 14.7168L18.7195 14.958C18.7295 14.8759 18.738 14.8056 18.746 14.7437L16.7622 14.4895ZM16.7817 11.1132C16.8604 11.6592 17.003 12.6099 16.7622 14.4895L18.746 14.7437C19.0162 12.6341 18.8573 11.4938 18.7612 10.8277L16.7817 11.1132ZM17.1691 9.42824C16.8647 9.71784 16.744 10.0681 16.7252 10.4064C16.7113 10.6577 16.7561 10.9358 16.7817 11.1132L18.7612 10.8277C18.7446 10.7127 18.734 10.6379 18.7275 10.5766C18.721 10.5152 18.7229 10.5034 18.7222 10.517C18.7211 10.5361 18.7151 10.6005 18.6798 10.6834C18.6424 10.7711 18.5907 10.8363 18.5477 10.8772L17.1691 9.42824ZM22.2835 9.67264C21.9077 9.4974 21.0662 9.13081 20.1668 8.92968C19.7178 8.82928 19.2063 8.75879 18.7061 8.79705C18.2073 8.8352 17.6296 8.98978 17.1688 9.42848L18.5479 10.8769C18.5588 10.8666 18.6289 10.8088 18.8587 10.7912C19.0871 10.7738 19.3848 10.8042 19.7303 10.8815C20.4198 11.0356 21.1079 11.3312 21.4382 11.4852L22.2835 9.67264ZM21.0662 10.9153C20.692 10.1565 21.4718 9.2956 22.2821 9.67201L21.4395 11.4859C22.3838 11.9245 23.2996 10.9226 22.86 10.031L21.0662 10.9153ZM20.702 10.1823L21.0675 10.9181L22.8587 10.0282L22.4931 9.29246L20.702 10.1823ZM21.7392 5.98389C21.5454 7.07583 21.2218 8.22392 20.6983 9.29992L22.4968 10.1748C23.1205 8.89263 23.4911 7.55806 23.7084 6.33327L21.7392 5.98389ZM21.9932 3.4514C21.9932 4.17713 21.8258 5.43901 21.7362 6.0013L23.7114 6.31586C23.8014 5.75033 23.9932 4.3504 23.9932 3.4514H21.9932ZM14.1279 8.76183C14.9545 8.8792 15.2211 9.92135 14.582 10.4301L13.3365 8.86528C12.6166 9.4383 12.918 10.6101 13.8468 10.742L14.1279 8.76183ZM15.0623 8.40561C15.1031 8.45561 15.1477 8.54229 15.1663 8.63369C15.1848 8.72447 15.1652 8.75095 15.1739 8.73305C15.1941 8.69142 15.2136 8.71625 15.103 8.75319C14.9672 8.79851 14.6729 8.84354 14.1357 8.76296L13.839 10.7408C15.2355 10.9503 16.4574 10.6678 16.9728 9.60707C17.4175 8.69168 17.058 7.68695 16.6107 7.13983L15.0623 8.40561ZM16.5786 8.32872C16.2571 8.81785 15.5022 8.93388 15.0681 8.41275L16.6049 7.1327C16.1207 6.55142 15.2717 6.67575 14.9073 7.23021L16.5786 8.32872ZM14.5756 10.4352C14.9007 10.1807 15.9004 9.35993 16.5784 8.32896L14.9074 7.22997C14.4158 7.97751 13.6313 8.6345 13.3429 8.86019L14.5756 10.4352Z" fill="currentColor" mask="url(#path-1-inside-1_364_5911)"></path>
              </svg> 
              Jambo 
            </ButtonLink>
          </Li>

        </ul>

      </Body>

    </Container >
  );
}