$(document).ready(function() {
    $('#email-submit-btn').submit(function(e) {
    // $('#contact-form').submit(function(e) {
      var name    = document.getElementById('inputName')
      var email   = document.getElementById('inputEmail')
      var message = document.getElementById('inputMessage')
  
      if (!name.value || !email.value || !message.value) {
        alertify.error("Please check your entries");
        return false;
      } else {
        $.ajax({
          method: 'POST',
          url: '//formspree.io/m.restrepo95@gmail.com',
          data: $('#contact-form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        alertify.success("Message sent");
      }
    });
  });