### 멋사 5주차 과제: 포트폴리오만들기

- 2024.04.27  1차 완성
- 총 14시간 소요...ㅎㅎ

#### header: nav 및 사진 첨부
- Photo.js에서 사진 경로 바꾸면 사진 바꾸기 가능

#### main : about me, languages, goal,experience, contact 첨부
- experiences는 웹관련 경험, 기타 경험 구분.
- 경험, contact 요소 재활용 가능
- experience 부분 경험 요소 링크 첨부 가능
- contact 요소 추가 가능
- Recommendation Book 부분 추가 (axios 활용) _ 0506


#### router 기능 추가
- (0520) 글쓰기, 글목록 보기 기능 router로 추가 (기존 nav바 삭제)
- (0525) 글쓰기 기능 구현 및 css 추가
- (0526) 글목록 및 글쓰기 기능 구현 완료. table만들기 완료
    - 현재 페이지, 글 수정/삭제 버튼 페이지, 조회 페이지 구현 완료
    - 상세 (Post_Detail) css 제작 fin
    - 게시판 테이블 css (글씨체 안이쁨) _ fin (정렬은 완료. 색배합 고민 필요)
    - (PostEdit)수정 및 삭제 페이지 css 적용 필요  _ 제작 fin
    - todo: 글 올릴 시 등록하겠습니까? 팝업과 삭제 시 삭제하시겠습니까? 팝업 만들기

##### Login 구현 및 API 받아오기
- 0602 todo: 로그인 구현 - 로그인 된 후 페이지만들기 - css꾸미기 - api바탕으로 글쓰기/글수정 로직 노션대로 좀 바꾸기
- 0603: 로그인 구현 완료
    - 로그아웃 기능 아직 안만들었음ㅎㅎ
    - alert활용해서 로그인/회원가입 여부 확인 가능
    - 후에 alert도 단순한 실패가 아닌 console의 로그 -response - request 영역 에러보고 디테일하게 알림 줄 수 있게 개선하면 좋겠다
    - 객체 만드는 법에 조금 익숙해진 것 같다.
    - 회원가입 UI 개선, 로그인도 좀 더 이쁘게 개선할 방법

##### 아쉬운 부분
- footer이 없으니 간지가 안남
- 경험에 걸어둔 실제링크 갔다가 돌아오면 time out 에러나서 재활용성이 떨어짐
- contact 부분 단순 텍스트에서 링크 첨부 등으로 업그레이드 해보기
- 로그아웃 구현X


##### ~ 0630 포폴 전반 완성 : 고쳐야할 목록
1. 로그아웃 기능 (로그인은 되는데 로그아웃을 눌러도 다시 로그인으로 바뀌지 않음)
2. 로그인 되어있는 상태에서는 사인업 없애기
3. 글 수정버튼은 내 글일 때만 뜰 수 있도록 해보기
4. 로그인 상태로 글 업로드 / 수정 / 삭제 안됨 -> 빨리 고치기ㅣ!!!

- 구현 내용 바탕으로 포폴 재 구성 예정