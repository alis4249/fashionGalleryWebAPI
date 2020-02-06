$(document).ready(function() {

    var tokenAvailable = localStorage.getItem('token');

       $.ajax({
               url: 'http://localhost:8080/checking/auth',
               type: 'GET',
               beforeSend: function(xhr) {
                   if (tokenAvailable) {
                       xhr.setRequestHeader('Authorization', 'Bearer ' + tokenAvailable);
                   }
               },
               success: function(data) {
                   var user_type = data.user_type;
                   if (user_type == "admin") {
                       window.location.href = "adminindex.html";
                   } 
                //    else if (user_type == "user") {
                //        window.location.href = "index.html";
                //    }
                //    alert(tokenAvailable)
               },
               error: function(error) {
   
               }
           })
           // token check end
});