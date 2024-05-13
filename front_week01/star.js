const loginForm = document.querySelector("#login-form");
// const nameinput = document.getElementById("name").value;
// const dateinput = document.getElementById("date").value;
const star = document.querySelector("#star");

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const nameinput = document.getElementById("name").value;
    const dateinput = document.getElementById("date").value;
    const selectedDate = new Date(dateinput);
    const timeDiff = selectedDate.getTime() - new Date(selectedDate.getFullYear(),0,1).getTime();
    const daysDiff = Math.floor(timeDiff/(1000*60*60*24));

    if (daysDiff <= 18) star.innerHTML = nameinput + "님의 별자리는 💫염소자리💫입니다.";
    else if (daysDiff<=48) star.innerHTML = nameinput + "님의 별자리는 💫물병자리💫입니다.";
    else{
        if (isLeapYear(selectedDate.getFullYear())){
            if (daysDiff<=79) star.innerHTML = nameinput + "님의 별자리는 💫물고기자리💫입니다.";
            else if (daysDiff<=110) star.innerHTML = nameinput + "님의 별자리는 💫양자리💫입니다.";
            else if (daysDiff<=140) star.innerHTML = nameinput + "님의 별자리는 💫황소자리💫입니다.";
            else if (daysDiff<=172) star.innerHTML = nameinput + "님의 별자리는 💫쌍둥이자리💫입니다.";
            else if (daysDiff<=203) star.innerHTML = nameinput + "님의 별자리는 💫게자리💫입니다.";
            else if (daysDiff<=234) star.innerHTML = nameinput + "님의 별자리는 💫사자자리💫입니다.";
            else if (daysDiff<=265) star.innerHTML = nameinput + "님의 별자리는 💫처녀자리💫입니다.";
            else if (daysDiff<=294) star.innerHTML = nameinput + "님의 별자리는 💫천칭자리💫입니다.";
            else if (daysDiff<=325) star.innerHTML = nameinput + "님의 별자리는 💫전갈자리💫입니다.";
            else if (daysDiff<=355) star.innerHTML = nameinput + "님의 별자리는 💫사수자리💫입니다.";
            else star.innerHTML = nameinput + "님의 별자리는 💫염소자리💫입니다.";
        }
        else{
            if (daysDiff<=78) star.innerHTML = nameinput + "님의 별자리는 💫물고기자리💫입니다.";
            else if (daysDiff<=109) star.innerHTML = nameinput + "님의 별자리는 💫양자리💫입니다.";
            else if (daysDiff<=139) star.innerHTML = nameinput + "님의 별자리는 💫황소자리💫입니다.";
            else if (daysDiff<=171) star.innerHTML = nameinput + "님의 별자리는 💫쌍둥이자리💫입니다.";
            else if (daysDiff<=202) star.innerHTML = nameinput + "님의 별자리는 💫게자리💫입니다.";
            else if (daysDiff<=233) star.innerHTML = nameinput + "님의 별자리는 💫사자자리💫입니다.";
            else if (daysDiff<=264) star.innerHTML = nameinput + "님의 별자리는 💫처녀자리💫입니다.";
            else if (daysDiff<=293) star.innerHTML = nameinput + "님의 별자리는 💫천칭자리💫입니다.";
            else if (daysDiff<=324) star.innerHTML = nameinput + "님의 별자리는 💫전갈자리💫입니다.";
            else if (daysDiff<=354) star.innerHTML = nameinput + "님의 별자리는 💫사수자리💫입니다.";
            else star.innerHTML = nameinput + "님의 별자리는 💫염소자리💫입니다.";
        }
    }

    star.classList.remove("hidden");
}

loginForm.addEventListener("submit", loginSubmit);