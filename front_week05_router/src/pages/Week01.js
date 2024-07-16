import React from "react";
import styled from "styled-components";

const Seminar = styled.div`
  background-color: Black;
  height: auto;
  width: 100%;
`;
const Title = styled.div`
  background-color: rgb(236, 117, 19);
  color: White;
  text-align: center;
  font-size: 60px;
  padding: 20px;
`;
const Learn = styled.div`
  background-color: rgb(243, 231, 221);
  text-align: center;
  margin: 70px 120px 30px 120px;
  padding-top: 10px;
  padding-bottom: 30px;
  border-radius: 30px;

  h2 {
    font-size: 40px;
  }

  p {
    font-size: 25px;
    background-color: rgb(255, 174, 107);
    padding: 20px;
    margin: 10px 10px 30px 30px;
    border-radius: 30px;
    display: inline-block;
    font-weight: bold;
  }
  img {
    width: 80%;
    height: auto;
  }
`;

const Week01 = () => {
  return (
    <Seminar>
      <Title>🦁 1st Seminar 🦁</Title>
      <Learn>
        <h2>What we learn</h2>
        <p>자바스크립트와 콘솔</p>
        <p>변수</p>
        <p>데이터 타입</p>
        <p>데이터 구조</p>
        <p>함수</p>
        <p>조건문</p>
        <p>이벤트</p>
      </Learn>
      <Learn>
        <h2>My Homework</h2>
        <img src="/images/week01_img.png" alt="week01"></img>
      </Learn>
    </Seminar>
  );
};

export default Week01;
export { Seminar };
export { Title };
export { Learn };
