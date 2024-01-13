function saveArray(item){
    let anArray = readArray();
    anArray.push(item);
    let st = JSON.stringify(anArray);
    console.log(st);
    localStorage.setItem("services",st);
}

function readArray(){
    // get the info from the Local Storage
    let data=localStorage.getItem("services");
    if(!data){//Not Data?
        return [];//creating the  array for the first time
    }else{
        //parse it back into the array (object)
        let list = JSON.parse(data);
        //display the array on the console
        return list;
}

}