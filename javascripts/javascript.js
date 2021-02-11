console.log("Hi!! This is my first site");
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var ans = document.getElementById('ans');
var form = document.getElementById('percentageCalc');
form.addEventListener('submit', function(ev) {
    if(!num1.value || !num2.value) {
        alert('Plese enter a value more than 0')
    } else {
        var x = parseFloat(num1.value);
        var y = parseFloat(num2.value);
       alert("So you really want to calculate what " + x + " percentage of " + y + " is ??"); 
        ans.innerText = ((x/y)*100) + "%"
    }
    ev.preventDefault();
});

function dropdownMenu() {
                var x = document.getElementById("click_dropdown");
                if(x.className === "topnav") {
                    x.className += " responsive";
//                    change topnav to topnav.responsive
                } else {
                    x.className = "topnav";
                }
            }