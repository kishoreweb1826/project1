var sidenav = document.querySelector('#sidenav');
function show() 
     {
        sidenav.style.left = '0%';
    }
var sidenav = document.querySelector('#sidenav');
        
function cancel() {
        sidenav.style.left = "-50%";    
        
    }

var cartnav= document.querySelector('.add-to-cart-side-nav');
function showcart() 
     {
        cartnav.style.left = '0%';
    }

        
function cancelcart() {
        cartnav.style.left = "-50%";    
        
    }
    var button= document.querySelector('.btn');

    function hover(){
        button.style.display = "block"
        }
        function leave(){
        button.style.display = "none"
        }

