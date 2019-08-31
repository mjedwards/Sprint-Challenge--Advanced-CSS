var newBtn = document.getElementById("slidingDoor");
let signIn = document.querySelector(".signIn");

function modal () {
    let signDisplay = document.querySelector(".sign-In");
    let exit1 = document.querySelector(".exit");
    signIn.addEventListener("click", function () {
        signDisplay.classList.add("reveal");
    });

    exit1.addEventListener("click", function () {
        signDisplay.classList.remove("reveal");
    });
}

function myBtn () {
  var el = document.getElementById("btn");
//   var ello = document.getElementById("new-btn");
    el.addEventListener("click", function () {
        newBtn.innerHTML = "<div id='new-btn' class='infoBtn'>SIGN IN</div>"
        var slide = document.getElementsByClassName("sliding-door");
        for (var i = 0; i < slide.length; i++) {
            slide[i].classList.toggle("slide")
        }

        var infoSignin = document.getElementsByClassName("info-signin")
        var infoSignup = document.getElementsByClassName("info-signup")
       

        for (var i = 0; i< infoSignin.length; i++) {
            infoSignin[i].classList.toggle("hide")
        }

        for (var i = 0; i< infoSignup.length; i++) {
            infoSignup[i].classList.toggle("show")
        }
    });

    // ello.addEventListener("click", function() {
    //     var slide = document.getElementsByClassName("sliding-door");
    //     for (var i = 0; i < slide.length; i++) {
    //         slide[i].classList.toggle("slide")
    //     }

    //     var infoSignin = document.getElementsByClassName("info-signin")
    //     var infoSignup = document.getElementsByClassName("info-signup")
       

    //     for (var i = 0; i< infoSignin.length; i++) {
    //         infoSignin[i].classList.toggle("hide")
    //     }

    //     for (var i = 0; i< infoSignup.length; i++) {
    //         infoSignup[i].classList.toggle("show")
    //     }
    // })
}

modal();
myBtn();


// function myBtn2 () {
//     var ello = document.getElementById("new-btn");

//     ello.addEventListener("click", function () {
        
//         // var slide = document.getElementsByClassName("sliding-door");
//         for (var i = 0; i < slide.length; i++) {
//             slide[i].classList.toggle("slide")
//         }

//         var infoSignin = document.getElementsByClassName("info-signin")
//         var infoSignup = document.getElementsByClassName("info-signup")
       

//         for (var i = 0; i< infoSignin.length; i++) {
//             infoSignin[i].classList.toggle("hide")
//         }

//         for (var i = 0; i< infoSignup.length; i++) {
//             infoSignup[i].classList.toggle("show")
//         }
//     });
// }


// myBtn2();
