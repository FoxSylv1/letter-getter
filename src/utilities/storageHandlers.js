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
