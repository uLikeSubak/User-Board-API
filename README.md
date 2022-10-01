# User-Board-API


# 설계하기


## ●기능 명세
   
#### &nbsp;0. 회원가입
##### &nbsp;&nbsp;&nbsp;0-1. 본인인증 
#### &nbsp;1. 로그인
##### &nbsp;&nbsp;&nbsp;1-1. ID,PW찾기   
#### &nbsp;2. 게시글 CRUD 
##### &nbsp;&nbsp;&nbsp;2-1. 댓글 CRUD 
##### &nbsp;&nbsp;&nbsp;2-2. 사진 동영상 
##### &nbsp;&nbsp;&nbsp;2-3. 좋아요 
##### &nbsp;&nbsp;&nbsp;2-4. 조회수
&nbsp;&nbsp;

## ●기술 명세

#### &nbsp;-회원가입 본인인증  - nodemailer
#### &nbsp;-로그인 인증처리(?) - passport
#### &nbsp;-데이터 베이스 처리 - sequelize
#### &nbsp;-이미지 데이터 처리 - multer
&nbsp;&nbsp;




## ●기능 설명
##### &nbsp; // 메인화면에서 회원가입 버튼 누를 시 회원가입 화면으로 이동한다.
##### &nbsp; // 아이디, 비밀번호, 별명을 입력한다. 아이디와 별명은 중복체크를 해준다.
##### &nbsp; // 중복체크 후 이메일 인증 화면으로 전환한다.
##### &nbsp; // 이메일 주소를 입력 후 그 이메일로 인증코드를 전송한다.
##### &nbsp; // 클라이언트가 입력한 인증코드와 발급한 인증코드가 일치하면 회원가입 성공!
&nbsp;&nbsp;

#### &nbsp;0.로그인
##### &nbsp; // 메인화면에 있는 로그인창에 아이디와 비밀번호를 입력한다.
##### &nbsp; //	아이디와 비밀번호를 확인한 후 존재하는 회원이면 로그인성공!
##### &nbsp; //	로그인 성공 시 게시판 페이지로 이동!
&nbsp;&nbsp;


#### &nbsp;0.게시판
##### &nbsp; // 게시판 페이지에는 게시글 리스트가 보입니다.
##### &nbsp; // 게시글 작성 버튼을 누르면 게시글 작성이 가능하다.
##### &nbsp; // 게시글은 제목과 내용은 필수이며, 사진과 동영상은 선택이다.
##### &nbsp; // 게시글 클릭해서 해당 게시글의 세부 내용을 조회한다.
##### &nbsp; // 게시글 하단에 입력창에서 댓글 입력이 가능하다.
##### &nbsp; // 
&nbsp;&nbsp;



