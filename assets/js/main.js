$(function() {
  $("#username_error_message").hide();
  $("#password_error_message").hide();
  $("#retype_password_error_message").hide();
  $("#email_error_message").hide();
  $("#zipcode_error_message").hide();

  let error_username = false;
  let error_password = false;
  let error_retype_password = false;
  let error_email = false;
  let error_zip = false;

  //username__function..
  $("#form_username").focusout(function() {
    check_username();
  });
  // password__function..
  $("#form_password").focusout(function() {
    check_password();
  });

  // retype_password__function..
  $("#form_retype_password").focusout(function() {
    check_retype_password();
  });

  $("#form_email").focusout(function() {
    check_email();
  });
  $("#form_zip").focusout(function() {
    check_zipcode();
  });

  function check_username() {
    let username_length = $("#form_username").val().length;
    if (username_length < 5 || username_length > 20) {
      $("#username_error_message").html("should be between 5-20 characters!");
      $("#username_error_message").show();
      error_username = true;
    } else {
      $("#username_error_message").hide();
    }
  }

  //CHECK_PASSWORD
  function check_password() {
    let password_length = $("#form_password").val().length;

    if (password_length < 8) {
      $("#password_error_message").html("at least 8 charaters");
      $("#password_error_message").show();
      error_password = true;
    } else {
      $("#password_error_message").hide();
    }
  }

  function check_zipcode() {
    let zip_code_length = $("#form_zip").val().length;

    if (zip_code_length > 4 ) {
      $("#zipcode_error_message").html("at most 4 numbers");
      $("#zipcode_error_message").show();
      error_zip = true;
    } else {
			$("#zipcode_error_message").hide();
    }
  }

  function check_retype_password() {
    let password = $("#form_password").val();
    let retype_password = $("#form_retype_password").val();
    if ((password = !retype_password)) {
      $("#retype_password_error_message").html("password dont match");
      $("#retype_password_error_message").show();
      error_retype_password = true;
    } else {
      $("#retype_password_error_message").hide();
    }
  }

  function check_email() {
    let pattern = new RegExp(
      /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    );
    // let pattern = new regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (pattern.test($("#form_email").val())) {
      $("#email_error_message").hide();
    } else {
      $("#email_error_message").html("invalid email adress");
      $("#email_error_message").show();
      error_email = true;
    }
  }

  $("input.numbers").keypress(function(event) {
    return /\d/.test(String.fromCharCode(event.keyCode));
  });

  //navBar-----

  // toggle_nav
  $("#toggle-nav").click(function() {
    $(this).toggleClass("open");
    $(".collapse").toggleClass("active");
  });

  $("#toggle__menu").click(function() {
    $(this).toggleClass("open");
    $(".header__navbar__mobile").toggleClass("visible");
  });
});
