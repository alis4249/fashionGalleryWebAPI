$(document).ready(function() {
            

   $('#contact_info').click(function(e) {
       e.preventDefault();
       user_name = $("#user_name").val();
       user_message = $("#user_message").val();
       user_email = $("#user_email").val();
   
       if (user_name == "" || user_message == "" || user_email == "") {
           alert('Invalid Credentials')
       } else {

        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      
               data = {
                   "user_name": user_name,
                   "user_message": user_message,
                   "user_email": user_email,
                   "contact_date":date,
                   "contact_time":time
               }

               $.ajax({
                   url: 'http://localhost:8080/contact/register',
                   type: 'post',
                   dataType: 'json',
                   data: data,
                   success: function(res, textStatus, xhr) {
                       if (res == true) {
                          alert('Your message is registered.');
                           setTimeout(
                               function(){
                                // $("#user_name").val('');
                                // $("#user_email").val('');
                                $("#contact_user_message").val('');
                               },500
                           );
                       } else {
                           alert('Someting went wrong');
                       }
                   },
                   error: function(xhr, textStatus, errorThrown) {
                       alert('Fields may be empty');
                   }
               });
       }
   });

   
   
   });