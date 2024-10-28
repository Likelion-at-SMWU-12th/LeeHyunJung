import React, { useEffect } from "react";
import kakao_btn_img from "./kakao_login_large_narrow.png";
import google_btn_img from "./web_light_sq_SI@2x.png";

const Login = () => {
  // 카카오 인증을 위한 URL 주소를 입력한다. API 키와 Redirection Api는 .env에 입력된 값으로 가져온다.
  const authServerLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
  // 카카오 로그인 버튼을 누를 시 위에서 만든 authServerLink로 리디렉션되도록 하는 함수이다.
  const handleKakao = () => {
    window.location.href = authServerLink;
  };
  return (
    <div>
      <h2>로그인</h2>
      <div className="btns-container">
        <button onClick={handleKakao}>
          <img src={kakao_btn_img} alt="kakao_button" />
        </button>
        <button>
          <img src={google_btn_img} alt="kakao_button" />
        </button>
      </div>
    </div>
  );
};

export default Login;
