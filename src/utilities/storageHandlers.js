function currentDay() {
    var today = new Date();
    return today.getUTCDate() + " " + today.getUTCMonth() + " " + today.getUTCFullYear();
}


function newShuffle() {
    var shuffle = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    for (var i = 0; i < shuffle.length; ++i) {
        var j = Math.floor(Math.random() * (i + 1));
        [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
    }
    return shuffle;
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


export function getShuffle() {
    var shuffle = localStorage.getItem("shuffleOrder");
    if (shuffle === null) {
        shuffle = newShuffle();
        localStorage.setItem("shuffleOrder", JSON.stringify(shuffle));
    }
    return JSON.parse(shuffle);
}

