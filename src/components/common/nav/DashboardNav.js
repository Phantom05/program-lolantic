import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import cx from 'classnames';
import _ from 'lodash';
import { color, font, device } from 'styles/_utils';
import { NavLink } from 'react-router-dom';
import { useImmer } from 'use-immer';
import { withRouter } from 'react-router-dom';
import { mapper } from 'lib/mapper';
// import { DashboardNavProfile } from 'components/common/nav';
// import { LISTING_WORKS_SEARCH_SAGAS, MESSAGE_LIST_SAGAS } from 'store/actions';
// import {axiosCancel} from 'lib/api';
// import { useDebounce } from 'lib/utils';
import {
  icon_case_teeth,
  icon_mypage_person,
  icon_works_box,
  icon_alert_big
}
  from 'components/base/images';
const menuList = [
  {
    id: 0,
    title: 'Dashboard',
    icon: icon_case_teeth,
    link: '/',
    hidden: false
  },
  {
    id: 1,
    title: 'Analysis',
    icon: icon_case_teeth,
    link: '/analysis',
    hidden: false
  },
  {
    // NOTE: 부동산 관리 프로그램 매물관리 하기
    id: 2,
    title: 'Manage',
    icon: icon_works_box,
    link: '/manage',
    hidden: false
  },
  {
    id: 3,
    title: 'Report',
    icon: icon_alert_big,
    link: '/report',
    hidden: false
  },
  {
    id: 4,
    title: 'My Page',
    icon: icon_mypage_person,
    link: '/mypage',
    hidden: false
  },
];

function cutUrl(str) {
  return str.substr(1).split('/')[0]
}

function DashboardNav(props) {
  const { listing: listReducer } = useSelector(state => state);
  const [navList] = useImmer(menuList);
  // const [deClick,setDeClick] = useImmer(true);
  const { profile, info, auth } = props;
  // const isCustomerGrade = auth.signIn.profile.grade === 3;
  // const userCode =auth.signIn.profile.userCode;

  const handleClick = _.throttle(config => {
    const { type } = config;
    // if(props.match.url !== type){
    // LISTING_WORKS_SEARCH_SAGAS.init()
    // }
    //   if(type === '/works/1'){
    //     if(cutUrl(props.location.pathname) === 'works'){
    //       const searchConfig ={
    //         userCode : userCode,
    //         page:1,
    //         sort: 1, 
    //         search :"",
    //         type :"",
    //         first:true,
    //         filter:{
    //           "stage":[],
    //           "type":[],
    //           "hidden":0
    //         },
    //       };
    //       LISTING_WORKS_SEARCH_SAGAS(searchConfig);    
    //     }
    // }

    // if(type === 'alertLink'){
    //   const messageConf = {
    //     page: 1,
    //     userCode: userCode
    //   }
    //   MESSAGE_LIST_SAGAS(messageConf);
    //   props.history.push(`/alert/list/1`);
    // }
  }, 1000);

  return (
    <Styled.DashboardNav>
      {/* <DashboardNavProfile
        image={profile.profile}
        title={profile.company?profile.company:profile.name}
        email={profile.email}
        connectState={4}
        isConnect={info.isNetworkConnect}
        alert={true}
        handleClick={handleClick}
        // message={1000}
        message={info.error.message}
      /> */}

      <div className="DashboardNav__link_con">
        {navList.map(item => {
          // if((isGhostCustomer || !true) && [3,4].indexOf(item.id) !== -1){
          //   return null;
          // }
          const isWorksPage = cutUrl(item.link) === cutUrl(props.location.pathname);
          return <div className={cx('DashboardNav__link box', { hidden: item.hidden })} key={item.id}>
            <NavLink
              to={item.link}
              exact
              className={cx("DashboardNav__link an", { active: isWorksPage })}
              onClick={() => handleClick({ type: item.link })}
            >
              <span className="DashboardNav_icon_box DashboardNav_item_box">
                <img src={item.icon} alt="nav icon" className="DashboardNav_icon" />
              </span>
              <span className="DashboardNav__text DashboardNav_item_box">{item.title}</span>
            </NavLink>
          </div>
        })}
      </div>

      <div className="DashboardNav__link box logout">
        <NavLink exact to={mapper.pageUrl.logout} className="DashboardNav__link an" >Logout</NavLink>
      </div>

    </Styled.DashboardNav>
  );
}

const Styled = {
  DashboardNav: styled.nav`
    position:relative;
    width:200px;
    /* min-height:100vh; */
    height:100%;
    /* padding-top:50px; */
    background:white;
    .DashboardNav__link{
      display:block;
      padding:0;
      &.hidden{
        display:none;
      }
      &.logout{
        position:absolute;
        bottom:30px;
        left:50%;
        transform:translateX(-50%);
        width:100px;
        border-radius:30px;
        border:2px solid ${color.blue};
        & a{
          padding:7px 15px;
          ${font(14, color.black_font)};
          font-weight:500;
          text-align: center;
          
        }
      }
    }
    .DashboardNav__link_con{
      /* margin-top:40px; */
    }
    .DashboardNav__link.an{
      position: relative;
      padding:22px 20px;
      overflow: hidden;
      &.active{
        &:after{
          position:absolute;
          content:"";
          display:block;
          clear: both;
          right:0;
          top:0;
          width:5px;
          height:100%;
          background:${color.blue_week};
        }
        background:${color.blue_week_hover}
      }
    }
    .DashboardNav_icon_box{
      display:inline-block;
      width:32px;
      height:28px;
      margin-right:20px;
    }
    .DashboardNav_icon{
      display:inline-block;
      width:100%;
      height:100%;
    }
    .DashboardNav__text{
      position:relative;
      ${font(15, color.black_font)};
      top:4px;
    }
    .DashboardNav_item_box{
      float:left;
    }
    
    
    @media screen and (max-width:${device.pc}){
      /* width:100vh; */
    }
  `
}

export default withRouter(DashboardNav);