let index = 1;
function changeText(){
    let index = 1;
    // Get the input element by its ID 
    let inputField = document.getElementById("myInput"); 
    // Get theWW value of the input field 
    let value = inputField.value;
    StationArray[index-1].state=value;
    //document.getElementById("output").innerHTML=StationArray[index-1].line+StationArray[index-1].state;
    alert("test");
    var pythonScriptPath = "C:\Users\3346227\Documents\Interface\python.py";
    subprocess.run(["python", pythonScriptPath]);
    alert("test");
    return(StationArray[index-1].state=value);
}
document.getElementById("output").innerHTML=StationArray[index-1].line+StationArray[index-1].state;


function test(){
    var xhr = new XMLHttpRequest();
    // Define what happens on successful data submission
    xhr.onload = function () {
        if (xhr.status == 200) {
            alert(xhr.responseText);
        } else {
            alert('Request failed. Status: ' + xhr.status);
        }
    };

    // Define what happens in case of an error
    xhr.onerror = function () {
        alert('Request failed');
    };

    // Open a new connection, using the GET request on the URL endpoint
    xhr.open('GET', 'python.py', true);

    // Send data
    xhr.send();

}
