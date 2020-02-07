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
           var isUserAvailable=localStorage.getItem('user_id');
            var ulen=1;
           if(!isUserAvailable){
               ulen=1;
           }else{
               ulen=isUserAvailable.length;
           }
               
           
console.log("len: "+ulen)
           if(ulen>1){
            $('#loginCoresol').append(
                '<i class="fa fa-user"></i><button style="background-color: white; border: none;" id="btn_loginCoresol">Logout</button>'
            );
            $("#loginCoresol").on('click', '#btn_loginCoresol', function() {
                console.log('I am here')
                $.ajax({
                    url: 'http://localhost:8080/logout',
                    type: 'post',
                    beforeSend: function(xhr) {
                        if (tokenAvailable) {
                            xhr.setRequestHeader('Authorization', 'Bearer ' + tokenAvailable);
                        }
                    },
                    success: function(data) {
                        localStorage.removeItem('user_id')
                        window.location.href = "index.html";
        
                    },
                    error: function(error) {
                        console.log("Error")
                    }
                })
            })

           }else{
            $('#loginCoresol').append(

            '<i class="fa fa-user"></i><button style="background-color: white; border: none;" id="btn_loginCoresol">Login</button>' 
            )
            $("#loginCoresol").on('click', '#btn_loginCoresol', function() {
                window.location.href = "login.html";

            })
           }
});