# Lieto Piano 🎶

 [Lieto 개발 과정](https://velog.io/@tkdgk1996/series/Lieto)

## 기획의도 🧐

 **Lieto Piano Concert를 홍보할 수 있는 웹 페이지 개발하여 사용자들에게 공연을 소개하고 더 많은 관객이 올 수 있도록 편리한 UI/UX를 제공하자!**

## 고려사항 ☝️

1. 스크롤 형태의 웹 페이지
2. 모바일을 주로 사용할 것으로 예상, 반응형 ui + SPA
3. 캐러셀을 통해 연주자 프로필 렌더링
4. 카카오맵 API를 통해 길찾기 기능 제공
   
## 기능목록 ✨

1. 반응형 css를 통한 사용자들의 접근방법에 대한 편리성을 높임
   - Swiper 라이브러리 사용 (767px를 기준으로 반응형 구현) ✔️
2. 무한스크롤을 통해 초기로딩속도를 줄임 (Lazy loading도 고려)
   - react-intersection-observer 라이브러리, React.lazy 메서드 사용 ✔️
3. [참고하는페이지](https://candlelightexperience.com/?utm_source=instagram&utm_medium=bio&utm_campaign=candlelightconcerts_&utm_content=candlelight.concerts)

## 사용하는 라이브러리(프레임워크) 🛠️

1. React.js
2. styled-components
3. Swiper
4. react-intersection-observer

## 디렉토리 구조

![스크린샷 2024-04-22 오후 10 06 51](https://github.com/updownpark2/Lieto/assets/101778169/d5a93de8-7239-460d-a92b-65307f3bd1fb)
