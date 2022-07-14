export function dailySeed() {
    var date = new Date();

    var day = date.getUTCDate();
    var month = date.getUTCMonth();
    var year = date.getUTCFullYear();

    return (day + 365) * (month + 12) * year;
}
