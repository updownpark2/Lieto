# Lieto Piano Concert 🎶

## 개발 과정 정리

[개발블로그](https://velog.io/@tkdgk1996/series/Lieto)

## 기획의도

> Lieto Piano Concert를 홍보할 수 있는 웹 페이지 개발

> 고려사항

1. 스크롤 형태의 웹 페이지
2. 모바일을 주로 사용할 것으로 예상, 반응형 ui + SPA
3. 캐러셀을 통해 연주자 프로필 렌더링

## 기능목록

1. 반응형 css를 통한 사용자들의 접근방법에 대한 편리성을 높임
   -> Swiper 라이브러리 사용 (767px를 기준으로 반응형 구현) ✔️

2. 무한스크롤을 통해 초기로딩속도를 줄임 (Lazy loading도 고려)
   -> react-intersection-observer 라이브러리, React.lazy 메서드 사용 ✔️
3. Open API를 통해 사전에 사용자들이 콘서트에 흥미를 느끼도록함 (Spotify 등)
   -> Spotify 음악 API는 구독자만 이용이 가능한 점을 고려해 사용하지 않음, Kakao Map API 사용
4. [참고하는페이지](https://candlelightexperience.com/?utm_source=instagram&utm_medium=bio&utm_campaign=candlelightconcerts_&utm_content=candlelight.concerts)

## 사용하는 라이브러리(프레임워크)

1. styled-components
2. React.js
3. Swiper
4. react-intersection-observer

## 디렉토리 구조

App.js  
|------ Title  
|------ Introduction  
|------ Artist  
|------ Program  
|------ Poster  
|------ Map  
|------ Planner
