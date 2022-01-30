const indicator = document.querySelector(".indicator");
const input = document.getElementById("password");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".pw-text");
const showBtn = document.querySelector(".showBtn");
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

function validatepassword() {
  if (input.value != "") {
    indicator.style.display = "block";
    indicator.style.display = "flex";
    if (input.value.length <= 3 && (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong))) no = 1;
    if (input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) || (input.value.match(regExpMedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong)))) no = 2;
    if (input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong)) no = 3;
    if (no == 1) {
      weak.classList.add("active");
      text.style.display = "block";
      text.textContent = "Your password is too week";
      text.classList.add("weak");
    }
    if (no == 2) {
      medium.classList.add("active");
      text.textContent = "Your password is medium";
      text.classList.add("medium");
    } else {
      medium.classList.remove("active");
      text.classList.remove("medium");
    }
    if (no == 3) {
      weak.classList.add("active");
      medium.classList.add("active");
      strong.classList.add("active");
      text.textContent = "Your password is strong";
      text.classList.add("strong");
    } else {
      strong.classList.remove("active");
      text.classList.remove("strong");
    }
    showBtn.style.display = "block";
    showBtn.onclick = function () {
      if (input.type == "password") {
        input.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#23ad5c";
      } else {
        input.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "#000";
      }
    }
  } else {
    indicator.style.display = "none";
    text.style.display = "none";
    showBtn.style.display = "none";
  }


}


const cpass = document.querySelector("#confirmpassword");
const cpassText = document.querySelector(".cpasstext");

function confirmpw() {
  if (cpass.value != "") {
    cpassText.style.display = "block";
    if (cpass.value != input.value) {
      cpassText.innerHTML="Password donot match";
      cpass.style.color = '#ff4757';
      input.style.color = '#ff4757';


      return true;

    } else {

      // cpassText.type="text";
      cpassText.textContent="Password Confirmed";
      cpass.style.color = '#23ad5c';
      input.style.color = '#23ad5c';

    }
  } else {
    if (input.value == "") {
      cpassText.style.display = "none";
    }
  }
}

(function () {
  'use strict';
  window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

function strongpass() {
  'use strict';
  if (!text.classList.contains('strong')) {
    event.preventDefault();
    event.stopPropagation();
  }
}


var form = document.getElementById('reset-form');
var alert = document.getElementById('reset-alert');

function resetalert() {
  if (form.classList.contains('was-validated')) {
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
          $("#reset-alert").delay(5000).fadeOut(1000); 
          alert.style.display = "block";
          
    }
      }
  }


  function signintoggler(){
    var btn = document.querySelector(".showBtn");
    var input = document.getElementById('password');
    if (input.value != ""){
  btn.style.display = "block";
    btn.onclick = function () {
      if (input.type == "password") {
        input.type = "text";
        btn.textContent = "HIDE";
        btn.style.color = "#23ad5c";
      } else {
        input.type = "password";
        btn.textContent = "SHOW";
        btn.style.color = "#000";
      }
    }
  } else {
    btn.style.display = "none";
  }
}