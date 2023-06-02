let allInventory = [];



addInventory = () => {

    let type = document.getElementById("type").value
    let make = document.getElementById("make").value
    let model = document.getElementById("model").value
    let registration = +document.getElementById("registration").value
    let condition = document.getElementById("condition").value

    if(registration >= 1){

        allInventory.push({
            inventoryType: type,
            inventoryMake:make,
            inventoryModel:model,
            inventoryRegistration:registration,
            inventoryCondition:condition
        });


        
    } else {
        alert("Information is missing");
    }
       
console.log(allInventory)
    document.getElementById("inventoryForm").reset();

}






