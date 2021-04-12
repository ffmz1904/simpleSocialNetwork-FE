export const getDate = (date) => {
    date = new Date(date);

    const hour = date.getHours();
    const minutes = date.getMinutes();

    let day = date.getDate();
    day = day < 10 ? `0${day}` : day;

    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;

    const year = date.getFullYear();

    return `${hour}:${minutes} ${day}.${month}.${year}`;
};
