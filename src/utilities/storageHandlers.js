import { randomSeed } from './randomSeed.js';


function currentDay() {
    var today = new Date();
    return today.getUTCDate() + " " + today.getUTCMonth() + " " + today.getUTCFullYear();
}


export function getStoredSubmissionList() {
    var list = localStorage.getItem(currentDay());
    if (list === null) {
        return [];
    }
    return JSON.parse(list);
}
export function setStoredSubmissionList(submissionList) {
    localStorage.setItem(currentDay(), JSON.stringify(submissionList));
}


export function getUserUUID() {
    var uuid = localStorage.getItem("uuid");
    if (uuid === null) {
        var newUUID = randomSeed();
        localStorage.setItem("uuid", newUUID);
        return newUUID;
    }
    return uuid;
}
