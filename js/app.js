//index ka yu
let watchshow=document.getElementsByClassName("text-info")[0];
let start=document.getElementsByClassName("firstbtn")[0];
let pause=document.getElementsByClassName("secbtn")[0];
let contin=document.getElementsByClassName("thirdbtn")[0];
let restart=document.getElementsByClassName("fourthbtn")[0];
let mili= document.getElementsByClassName("mili")[0];

let second=0,min=0,hour=0,milisec=0;
let interval;
//function dwy yay
let starttime=()=>{
    milisec+=1;
    if (milisec===100){
        milisec=0
    second +=1;
    if (second===60) {
        second = 0
        min += 1
        if (min === 60) {
            min = 0
            hour = 1
        }
    }
    }
    let secondtext= second<10 ? "0" + second.toString():second;
    let mintext= min <10 ? "0" + min.toString(): min;
    let hourtext = hour < 10 ? "0" + hour.toString(): hour;
    let milisectext=mintext<100? "0"+ milisec.toString(): milisec;
    watchshow.textContent=hourtext + ":"+ mintext + ":"+ secondtext
    mili.textContent=milisectext
};








//loke say chin der ko call
start.addEventListener("click",()=>{
    clearInterval(interval);
    interval=setInterval(starttime,10)
});
pause.addEventListener("click", ()=>{
    clearInterval(interval);
});
contin.addEventListener("click",()=>{
    clearInterval(interval);
    interval=setInterval(starttime,10)

});
restart.addEventListener("click",()=> {
    clearInterval(interval);
    hour=0;
    min=0;
    second=0;
    interval=setInterval(starttime,10)
})