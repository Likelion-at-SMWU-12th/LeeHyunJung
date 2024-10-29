import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [name, setName] = useState();
  const [profileImg, setProfileImg] = useState();
  useEffect(() => {
    // Redirection.js에서 로컬 스토리지에 저장한 accessToken을 가져온다.
    const accessToken = localStorage.getItem("accessToken");
    // 카카오에 사용자 정보를 요청하는 API이다.
    fetch("https://kapi.kakao.com/v2/user/me", {
      method: "GET",
      headers: {
        // 받은 accessToken을 통해 사용자 정보에 접근할 수 있도록 한다.
        Authorization: `Bearer ${accessToken}`,
        "Content-type": "application/x-www-form-urlencoded",
      },
    }).then((res) => {
      const userData = res.json();
      userData.then((user) => {
        // 받은 사용자 정보의 이름과 프로필 사진을 상태 데이터에 저장한다.
        setName(user.properties.nickname);
        setProfileImg(user.properties.profile_image);
      });
    });
  }, []);
  return (
    // 상태 데이터에 저장된 응답값이 UI에 반영된다.
    <div>
      <div
        className="profile-image-div"
        style={{ backgroundImage: `url(${profileImg})` }}
      ></div>
      <h2>{name}</h2>
    </div>
  );
};

export default Greeting;
