const hour = document.querySelector('.hour');
const minute = document.querySelector('.min');
const second = document.querySelector('.second');

function getDate() {
    const dateNow = new Date()

    const nowHour = dateNow.getHours()

    const nowMinute = dateNow.getMinutes()
    let nowSecond = dateNow.getSeconds()
    if(nowSecond == 60) {
        nowSecond = 1
        console.log("one");
    }

    const hourDegrees = (nowHour / 12) * 360 + 180 ;
    const minuteDegrees = ((nowMinute / 60) * 360) + 180;
    const secondDegrees = ((nowSecond / 60) * 360) + 180;

    hour.style.transform = `rotate(${hourDegrees}deg)`;
    minute.style.transform = `rotate(${minuteDegrees}deg)`;
    second.style.transform = `rotate(${secondDegrees}deg)`;

}

setInterval(getDate, 1000);

// getDate();