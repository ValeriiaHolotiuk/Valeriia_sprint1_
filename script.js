function validateForm() {
    const form = document.getElementById("orderForm");
    let valid = true;


    form.querySelectorAll("input").forEach((input) => {
        if (input.hasAttribute("required") && input.value.trim() === "") {
            alert(`Please fill out the ${input.name} field.`);
            valid = false;
        }
    });

    if (valid) {
        alert("Order submitted successfully!");
    }
    return valid;
}


window.onload = function() {
    const bouquetName = localStorage.getItem("bouquetName");
    const bouquetPrice = localStorage.getItem("bouquetPrice");
    const bouquetImage = localStorage.getItem("bouquetImage");

    if (bouquetName && bouquetPrice && bouquetImage) {
        document.getElementById("selectedBouquet").innerText = `You chose "${bouquetName}"`;
        
        document.getElementById("bouquetPrice").innerText = `Bouquet price: $${bouquetPrice}`;
        
        const hst = bouquetPrice * 0.15;
        const totalPrice = parseFloat(bouquetPrice) + hst;
        document.getElementById("totalPrice").innerText = `Total price: $${totalPrice.toFixed(2)}`;
    
        document.getElementById("bouquetImage").src = bouquetImage;
    }
};


function selectBouquet(name, price,imagePath) {
    localStorage.setItem("bouquetName", name);
    localStorage.setItem("bouquetPrice", price);
    localStorage.setItem("bouquetImage", imagePath)
    window.location.href = "orderform.html";
}
const form = document.getElementById("orderForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const phoneInput = document.getElementById("phone");
        const phonePattern = /^[0-9]{10}$/; 
        if (!phonePattern.test(phoneInput.value)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        alert("Thank you for your order! We’ll be in touch soon.");
        
        form.reset(); 
    });









document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        
        const confirmSend = confirm("Are you sure you want to send this message?");
        if (confirmSend) {
            alert("Message sent successfully!");
            form.reset(); 
        }
    });
});
