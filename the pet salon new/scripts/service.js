let services=[];//array

//crate the contructor
function Service(description,price){
    this.description=description;
    this.price=price;
//    this.notificaiton=notificaiton;
}

function isValid(newService){
    let validation=true;
    $("input").removeClass("bg-red");
    if(newService.description==""){
       validation=false;
        $("txtDescription").addClass("bg-red");
    }

    if(newService.price==""){
        validation=false;
        $("txtPrice").addClass("bg-red");
    }

    return validation;
}

//create register function
function register(){
    
    let inputDescription = $("#txtDescription").val();
    let inputPrice= $("#txtPrice").val();

    let newService = new Service(inputDescription,inputPrice);
    saveArray(newService);
    if(isValid(newService)==true){
    saveArray(newService);
    $("input").val();//clear
    showNotification("notifications","alert-success","Service added to registry");
    }else{
       alert("enter inputs!");
   }
}

function showNotification(id,styling,message,notificaiton){
    $("#"+id).removeClass("alert-danger");
    $("#"+id).removeClass("alert-success");
    $("#"+id).text(message).addClass(styling).fadeIn(3000).delay(2000).slideup(3000);
}

//create the init function
function init(){
    //let s1 = new Service("Grooming",20);
    //services.push(s1);
    //hook events
    $("#btnRegister").on('click',register);
}

//wait for render the HTML
window.onload=init;

