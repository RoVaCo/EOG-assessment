export const todayNow = () => {
    const now = new Date().getTime();
    const today = new Date(now);
    return today;
}

export const timeNow = () => {
    const today = todayNow();
    const H = today.getHours();
    const meridiem = (H < 12 || H === 24) ? "AM" : "PM"
    const Hr = (meridiem === "AM" || H === 12) ? H : H - 12;
    const M = (today.getMinutes() >= 10) ? today.getMinutes() : '0' + today.getMinutes();
    const S = (today.getSeconds() >= 10) ? today.getSeconds() : '0' + today.getSeconds();
    const time = Hr + ":" + M + ":" + S + " " + meridiem
    return time;
}

export const dateNow = () => {
    const today = todayNow();
    const date = today.getMonth() + "/" + today.getDate();
    return date
}

// #####################################
// For use in improved chart functions if time permits

// export const wayBack = (num) => {
//     const yesterday = todayNow() - num;
//     return yesterday
// }
export const thirtyMinutesAgo = () => {
    const now = new Date().getTime();
    const since = now - 180000;
    return since;
}

// export const timeSince = (ago) => {
//     const now = new Date().getTime();
//     const since = now - (ago * 6000);
//     return since;
// }

// export const lastday = (e) => {
//     const timeStamp = (new Date() - e) / 1000
//     return timeStamp

// }



