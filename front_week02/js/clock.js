const clock = document.querySelector("h1#clock");

function getClock(){
    const date = new Date();

    const year = String(date.getFullYear());
    const month = String(date.getMonth());
    const day = String(date.getDate());
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerHTML = `현재 시각은 ${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초입니다.`;
}

getClock();
setInterval(getClock, 1000);