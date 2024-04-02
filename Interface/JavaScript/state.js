L1S1 = document.querySelector("#Line1Station1");
L1S2 = document.querySelector("#Line1Station2");
L1S3 = document.querySelector("#Line1Station3");
L1S4 = document.querySelector("#Line1Station4");
L1S5 = document.querySelector("#Line1Station5");
L1S6 = document.querySelector("#Line1Station6");
L1S7 = document.querySelector("#Line1Station7");
L1S8 = document.querySelector("#Line1Station8");
L1S9 = document.querySelector("#Line1Station9");
L2S1 = document.querySelector("#Line2Station1");
L2S2 = document.querySelector("#Line2Station2");
L2S3 = document.querySelector("#Line2Station3");
L2S4 = document.querySelector("#Line2Station4");
L2S5 = document.querySelector("#Line2Station5");
L2S6 = document.querySelector("#Line2Station6");
L2S7 = document.querySelector("#Line2Station7");
L2S8 = document.querySelector("#Line2Station8");
L2S9 = document.querySelector("#Line2Station9");
L3S1 = document.querySelector("#Line3Station1");
L3S2 = document.querySelector("#Line3Station2");
L3S3 = document.querySelector("#Line3Station3");
L3S4 = document.querySelector("#Line3Station4");
L3S5 = document.querySelector("#Line3Station5");
L3S6 = document.querySelector("#Line3Station6");
L3S7 = document.querySelector("#Line3Station7");
L3S8 = document.querySelector("#Line3Station8");
L3S9 = document.querySelector("#Line3Station9");
L4S1 = document.querySelector("#Line4Station1");
L4S2 = document.querySelector("#Line4Station2");
L4S3 = document.querySelector("#Line4Station3");
L4S4 = document.querySelector("#Line4Station4");
L4S5 = document.querySelector("#Line4Station5");
L4S6 = document.querySelector("#Line4Station6");
L4S7 = document.querySelector("#Line4Station7");
L4S8 = document.querySelector("#Line4Station8");
L4S9 = document.querySelector("#Line4Station9");
L5S1 = document.querySelector("#Line5Station1");
L5S2 = document.querySelector("#Line5Station2");
L5S3 = document.querySelector("#Line5Station3");
L5S4 = document.querySelector("#Line5Station4");
L5S5 = document.querySelector("#Line5Station5");
L5S6 = document.querySelector("#Line5Station6");
L5S7 = document.querySelector("#Line5Station7");
L5S8 = document.querySelector("#Line5Station8");
L5S9 = document.querySelector("#Line5Station9");

let index = 0;

window.addEventListener("load", ()=>{
    loadData(index);
});

function loadData(indexValue){
    L1S1 .style.background = StationArray[indexValue].state;
    L1S2 .style.background = StationArray[indexValue+1].state;
    L1S3 .style.background = StationArray[indexValue+2].state;
    L1S4 .style.background = StationArray[indexValue+3].state;
    L1S5 .style.background = StationArray[indexValue+4].state;
    L1S6 .style.background = StationArray[indexValue+5].state;
    L1S7 .style.background = StationArray[indexValue+6].state;
    L1S8 .style.background = StationArray[indexValue+7].state;
    L1S9 .style.background = StationArray[indexValue+8].state;
    L2S1 .style.background = StationArray[indexValue+9].state;
    L2S2 .style.background = StationArray[indexValue+10].state;
    L2S3 .style.background = StationArray[indexValue+11].state;
    L2S4 .style.background = StationArray[indexValue+12].state;
    L2S5 .style.background = StationArray[indexValue+13].state;
    L2S6 .style.background = StationArray[indexValue+14].state;
    L2S7 .style.background = StationArray[indexValue+15].state;
    L2S8 .style.background = StationArray[indexValue+16].state;
    L2S9 .style.background = StationArray[indexValue+17].state;
    L3S1 .style.background = StationArray[indexValue+18].state;
    L3S2 .style.background = StationArray[indexValue+19].state;
    L3S3 .style.background = StationArray[indexValue+20].state;
    L3S4 .style.background = StationArray[indexValue+21].state;
    L3S5 .style.background = StationArray[indexValue+22].state;
    L3S6 .style.background = StationArray[indexValue+23].state;
    L3S7 .style.background = StationArray[indexValue+24].state;
    L3S8 .style.background = StationArray[indexValue+25].state;
    L3S9 .style.background = StationArray[indexValue+26].state;
    L4S1 .style.background = StationArray[indexValue+27].state;
    L4S2 .style.background = StationArray[indexValue+28].state;
    L4S3 .style.background = StationArray[indexValue+29].state;
    L4S4 .style.background = StationArray[indexValue+30].state;
    L4S5 .style.background = StationArray[indexValue+31].state;
    L4S6 .style.background = StationArray[indexValue+32].state;
    L4S7 .style.background = StationArray[indexValue+33].state;
    L4S8 .style.background = StationArray[indexValue+34].state;
    L4S9 .style.background = StationArray[indexValue+35].state;
    L5S1 .style.background = StationArray[indexValue+36].state;
    L5S2 .style.background = StationArray[indexValue+37].state;
    L5S3 .style.background = StationArray[indexValue+38].state;
    L5S4 .style.background = StationArray[indexValue+39].state;
    L5S5 .style.background = StationArray[indexValue+40].state;
    L5S6 .style.background = StationArray[indexValue+41].state;
    L5S7 .style.background = StationArray[indexValue+42].state;
    L5S8 .style.background = StationArray[indexValue+43].state;
    L5S9 .style.background = StationArray[indexValue+44].state;
    function reloadPage() {
        location.reload();
    }
    //setTimeout(reloadPage, 10000);    
    //var alarm = new Audio('alarm.mp3');
    //Audio.play()
    //alert(StationArray.length)
    for (let i = 0; i < StationArray.length; i++){
        //alert(JSON.stringify(StationArray[indexValue+i].state));
        if (JSON.stringify(StationArray[indexValue+i].state)=='"rgb(253 1 0)"'){
            alert("Unexpected Media at Line"+StationArray[indexValue+i].line+" Station"+StationArray[indexValue+i].station);
        }

    }
}