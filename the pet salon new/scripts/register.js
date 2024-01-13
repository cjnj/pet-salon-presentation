//object literal
let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"Av. Universidad",
        number:"7250",
        zip:"22900"
    },
    hours:{
        open:"9:00 am",
        close:"8:00 pm"
    },


    pets:[] //array
    
}

let counter=0;

//object constructor (function)
function Pet(name,age,gender,service,breed,origin,price){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
    this.breed=breed;
    this.origin=origin;
    this.id=counter++;
    this.price=price;

}

function isValid(aPet){
    let validation=true;
    $("input").removeClass("bg-red");
    if(aPet.name==""){
        validation=false;
        $("txtName").addClass("bg-red");
    }

    if(aPet.service==""){
        validation=false;
        $("txtServices").addClass("bg-red");
    }

    return validation;
}



function register(){
    console.log("Registering");
    //get the values from the inputs
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtServices").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputOrigin = document.getElementById("txtOrigin").value;
    
    //creating the obj
    let newPet = new Pet(inputName,inputAge,inputGender,inputService,inputBreed,inputOrigin,getServicePrice(inputService));

    //push the object
    if(isValid(newPet)==true){
        petSalon.pets.push(newPet);
        //display the pets array on the console
        displayPetCards();
        console.log(newPet)
        $("inputs").val("");//clear the inputs
        showNotification("notifications","alert-success","Regisration was successful");
    }else{
        showNotification(("notificaitons"),"alert-danger","Please add all the required fields!");
    }
    
}    

function getServicePrice(serviceDescription){
    let services = readArray();//get services list from LS
    let price;
    for(let i=0;i<services.length;i++){// travel the description
        let service = services[i];
        if(service.description==serviceDescription){// finding the description
            price=service.price;//asign the price
        }
        //console.log(serivces[i]);
    }
}

function showNotification(id,styling,message){
    $("#"+id).removeClass("alert-danger");
    $("#"+id).removeClass("alert-success");
    $("#"+id).text(message).addClass(styling).fadeIn(3000).delay(2000).slideup(3000);
}


function deletePet(petID){
    console.log("Deleting pet " + petID);
    let deleteIndex;
    document.getElementById(petID).remove();//remove from HTML
    for(let i=0;i<petSalon.pets.length;i++){//traveling the array
        let pet = petSalon.pets[i]; //getting the current pet
        if(pet.id==petID){
            deleteIndex=i;//we found the pet, store the index
        }
    }
    petSalon.pets.splice(petID,1);//remove the petfrom the array
}

function addServices(){
        let services = readArray();
        for(let i=0;i<services.length;i++){
            $("#txtServices").append(`<option value="${services[i].description}">${services[i].description}</option>`)
        }
    }

function init(){
// creating pets using consrtuctor
let p1 = new Pet("Daffy Duck",86,"Male","Grooming","Duck","California",getServicePrice("1"));
let p2 = new Pet("Chester",77,"Male","Nail Cut","Cheeta","New Jersey",getServicePrice("Nail Cut"));
let p3 = new Pet("tom",82,"Male","Vaccines","Cat","Montana",getServicePrice("Vaccines"));
let p4 = new Pet("jerry",74,"Male","Training","Mouse","Texas",getServicePrice("Training"));
let p5 = new Pet("tweety",73,"Male","Nueter","Bird","Florida",getServicePrice("Nueter"));

// pushing pets into the pets array
petSalon.pets.push(p1,p2,p3,p4,p5);
addServices();
displayPetCards();
$("#notifications").hide();
}

//hook events


window.onload=init; // waits for html to render