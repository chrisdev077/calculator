
// Retrieve all the necessary elements
const cost = document.getElementById("cost");
const persons = document.getElementById("persons");
const buttons = document.querySelectorAll(".percent");
const tip_amount_elem = document.getElementById("tip-amount");
const total_elem = document.getElementById("total");
const reset_button = document.getElementById("reset");
const tip = document.getElementById("tip");

function get_btn_tip(value) {
    if(cost.value >=1 && persons.value >=1){
    total_without_tip = cost.value / persons.value;
    addition = (total_without_tip / 100) * value;
    total = total_without_tip + addition;
    tip_amount_elem.innerHTML = addition.toFixed(2);;
    total_elem.innerHTML = total.toFixed(2);

    }
}

function get_custom_tip() {

    if(cost.value >=1 && persons.value>=1){
        total_without_tip = cost.value / persons.value;
        addition = (total_without_tip / 100) * tip.value;
        total = total_without_tip + addition;
        tip_amount_elem.innerHTML = addition.toFixed(2);;
        total_elem.innerHTML = total.toFixed(2);
    }
    

}


//add onClick event to all the buttons
for (const b of buttons) {
    b.onclick = function (e) {
        t = b.value;
        get_btn_tip(t);
    }
}

tip.oninput = () => {
    get_custom_tip();
}
reset_button.onclick = () => {
    tip_amount_elem.innerHTML = "0.00"
    total_elem.innerHTML = "0.00"

}
