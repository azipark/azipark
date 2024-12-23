import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

const BannerWrap = styled.section`
  position: relative;
  width: 100%;
  min-height: 100%;
  background-color: var(--white);
`;

const Banner = styled.div`
  position: relative;
  width: 100%;
  min-height: 70vh;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  color: var(--white);
  background: url('src/assets/img/bg_1.jpg') center center no-repeat fixed;
  background-size: cover;
`;

const BannerText = styled.div`
  position: fixed;
  width: auto;
  top: 25%;
  left: 50%;
  padding: 20px;
  border: 6px solid var(--white);
  transform: translateX(-50%);

  h2 {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 4px;

    @media (max-width: 768px) {
      font-size: 4.5875vw;
    }
  }
`;

const ProjectWrap = styled.section`
  position: relative;

  .inner {
    padding: 120px 20px;
    margin-bottom: 60px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    position: relative;
    width: 100%;
    margin-top: 80px;

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }

    li {
      overflow: hidden;
      position: relative;
      height: 100%;
      border: 1px solid var(--gray200);
      border-radius: 16px;
      box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transition: .3s ease-in;
      transition: .3s ease-in;

      
      &:hover {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
      }

      a,
      .link-project {
        overflow: hidden;
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        color: var(--primary);
      }
    }
  }
`;

const ProjectDetailWrap = styled.div `
  position: relative;
  padding: 20px;

  strong {
    margin-bottom: 12px;
    font-weight: 400;
  }
`;

const ProjectImage = styled.img`
  overflow: hidden;
  width: 100%;
  height: auto;
  max-height: 320px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom: 1px solid var(--gray300);
  object-fit: contain;
`;

function Projects() {

  const projects = [
    {
      id: 0,
      title: '포트폴리오 페이지',
      period: '2024.12',
      content: 'React로 구성한 포트폴리오 페이지',
      skills: 'React, Vite, Styled-components, Framer-motion 등',
      image: '/src/assets/img/img_project_1.PNG',
      link: 'https://m.okbigyo.com/',
    } ,{
      id: 1,
      title: 'OK비교대출 웹앱',
      period: '2024.02 ~',
      content: 'OK비교대출 서비스 운영(담당 퍼블리셔)',
      skills: 'VueJS, SCSS/SASS, Figma, git',
      image: '/src/assets/img/img_project_1.PNG',
      link: 'https://m.okbigyo.com/',
    }, {
      id: 2,
      title: 'OK비교대출 PC웹',
      period: '2024.02 ~',
      content: 'OK비교대출 서비스 운영(담당 퍼블리셔)',
      skills: 'VueJS, SCSS/SASS, Figma, git',
      image: '/src/assets/img/img_project_2.PNG',
      link: 'https://www.okbigyo.com/',
    }, {
      id: 3,
      title: '한화생명보험 X Need',
      period: '2023.06',
      content: '신규 서비스 웹페이지(PC/MO) 개발',
      skills: 'HTML, CSS, JavaScript, jQuery, Adobe Indesign, Photoshop, FileZilla',
      image: '/src/assets/img/bg_1.jpg',
      link: 'https://hanwha-need.com/signature/',
    }, {
      id: 4,
      title: '동남아 4개국 SealM 홈페이지',
      period: '2021.06 ~ 2023.04',
      content: '자사 신규게임(동남아 SealM) 웹페이지(PC/MO) 개발',
      skills: 'HTML, CSS, JavaScript, jQuery, Photoshop, Slack, Jira',
      image: '/src/assets/img/bg_1.jpg',
      link: 'https://sea.sealm.com',
    }, {
      id: 5,
      title: '국내 Rohan 홈페이지',
      period: '2021.06 ~ 2023.04',
      content: '국내 Rohan 웹페이지 운영, 유지/보수',
      skills: 'HTML, CSS, JavaScript, jQuery, Photoshop',
      image: '/src/assets/img/bg_1.jpg',
      link: 'https://www.rohan.co.kr/',
    }, {
      id: 6,
      title: '국내 SealM 홈페이지',
      period: '2021.06 ~ 2023.04',
      content: '국내 SealM 웹페이지 운영, 유지/보수',
      skills: 'HTML, CSS, JavaScript, jQuery, Photoshop',
      image: '/src/assets/img/bg_1.jpg',
      link: 'https://www.sealm.co.kr/',
    }, {
      id: 7,
      title: '국내 Rohan 이벤트 페이지',
      period: '2022.08',
      content: '국내 Rohan 이벤트 페이지 작업',
      skills: 'HTML, CSS, JavaScript, jQuery, Photoshop',
      image: '/src/assets/img/bg_1.jpg',
      link: 'https://www.rohan.co.kr/event/event_20220810/index.html',
    }, {
      id: 8,
      title: '국내 Rohan 이벤트 페이지',
      period: '2022.06',
      content: '국내 Rohan 이벤트 페이지 작업',
      skills: 'HTML, CSS, JavaScript, jQuery, Photoshop',
      image: '/src/assets/img/bg_1.jpg',
      link: 'https://www.rohan.co.kr/event/event_20220615/index.html',
    }
  ];

  return (
    <>
      <BannerWrap>
        <Banner id="banner">
          <BannerText id="bannerText">
            <h2>P r o j e c t</h2>
          </BannerText>
        </Banner>
      </BannerWrap>

      <ProjectWrap>
        <div className="inner">
          <h2>My Recent Works</h2>
          <p>Here are a few projects I've worked on recently.</p>
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <a href={project.link} className='link-project' target="_blank" rel="noopener noreferrer">
                  <ProjectImage src={project.image} alt={project.title} />
                  <ProjectDetailWrap>
                    <h3>{project.title}</h3>
                    <strong>{project.content}</strong>
                    <p>&#183; {project.period}</p>
                    <p>&#183; {project.skills}</p>
                  </ProjectDetailWrap>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </ProjectWrap>
      <Footer />
    </>
  );
}

export default Projects;
