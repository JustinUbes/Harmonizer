function getCurrentDate(){
    let currentDate = new Date();
    let dateTime = "Recorded on " + currentDate.getDate() + "/" 
    + (currentDate.getMonth()+1) + '/' 
    + currentDate.getFullYear() + ' at ' 
    + currentDate.getHours() + ':'
    + currentDate.getMinutes() + ':'
    + currentDate.getSeconds();

    return dateTime;
}

module.exports = { getCurrentDate };