import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Redirection = () => {
  // 인가 코드 받기 요청의 응답인 Redirect URI에 넘어온 쿼리파라미터 'code'의 값을 호출한다.
  const [params, setParams] = useSearchParams();
  const authCode = params.get("code");
  const grant_type = "authorization_code";
  const navigate = useNavigate();

  useEffect(() => {
    // 카카오 토큰을 요청하는 API를 호출한다.
    fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${authCode}`,
      {
        method: "POST",
        // body: JSON.stringify({
        //   grant_type: "authorization_code",
        //   client_id: process.env.REACT_APP_REST_API_KEY,
        //   redirect_uri: process.env.REACT_APP_REDIRECT_URI,
        //   code: authCode,
        // }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    ).then((res) => {
      const data = res.json();
      data.then((data) => {
        // 전달 받은 accessTocken을 로컬 스토리지에 저장한다.
        localStorage.setItem("accessToken", data.access_token);
        // greeting 페이지로 이동한다.
        navigate("/greeting");
      });
    });
  }, []);
  // 로딩이 길어질 경우 나오는 페이지이다.
  return <div>Redirection Page: 카카오 로그인 중…</div>;
};

export default Redirection;
