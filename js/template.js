//---- COUNTER ----//

$(window).scroll(function () {
  $(this).scrollTop() > 200
    ? $(".counter").each(function () {
        $(this)
          .prop("counter", 0)
          .animate(
            {
              counter: $(this).data("counter"),
            },
            {
              duration: 2000,
              easing: "swing",
              step: (step) => {
                $(this).text(Math.ceil(step));
              },
            }
          );
      })
    : "";
});

// ### DARK MODE ###
// let darkMode = () => {
//   var element = document.body;
//   element.classList.toggle("dark_mode");
// };

//---- DARK MODE ----//

let toggleSwitch = document.getElementById("toggle");
toggleSwitch.addEventListener("change", function () {
  if (this.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function enableDarkMode() {
  document.body.classList.add("dark_mode");
  document.getElementById("projects").classList.add("dark_mode");
}

function disableDarkMode() {
  document.body.classList.remove("dark_mode");
  document.getElementById("projects").classList.remove("dark_mode");
}

//---- SCROLL TOP ----//

$(window).scroll(function () {
  $(this).scrollTop() > 80
    ? $("#back_top").fadeIn("slow")
    : $("#back_top").fadeOut("slow");
}); //end window

//---- SEARCH ----//

$(document).ready(function () {
  const searchData = [
    "Adana",
    "Ankara",
    "Balıkesir",
    "Diyarbakır",
    "Elazığ",
    "Hatay",
    "İstanbul",
    "Malatya",
  ];
  $("#tags").autocomplete({
    source: searchData,
  });
});

//---- LOGIN ----//

$(function (event) {
  $("#loginSubmit").click(function () {
    let email, passwd;
    email = jQuery.trim($("#email_data").val());
    passwd = jQuery.trim($("#password_data").val());

    const storageEmail = localStorage.setItem("email", email);
    const storagePassword = localStorage.setItem("password", passwd);

    const getEmail = localStorage.getItem("email");

    if (email == "") {
      $("#email_data_validation").html("Email Boş geçilemez...");
    }

    if (passwd == "") {
      $("#passwd_data_validation").html("Şifre Boş geçilemez...");
    }
  });
});
