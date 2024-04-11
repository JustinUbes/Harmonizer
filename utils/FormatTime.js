function formatTime(millis){
    const totalSec = Math.floor(millis/1000);
    const minutes = Math.floor(totalSec/60);
    const seconds = totalSec % 60;
    if (seconds < 10){
        return minutes + ':0' +seconds+'\n';
    }
    return minutes + ':' + seconds + '\n';
}

module.exports = { formatTime };