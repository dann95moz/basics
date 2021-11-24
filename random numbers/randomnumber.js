var rand = ran(20,10);
document.write(rand);
function ran(mini, maxi){
    var res;
    res = Math.floor(Math.random()*(maxi-mini+1))+mini;
    return res;
}
