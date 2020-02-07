$(document).ready(function() {
    var token = localStorage.getItem('token')
    var n=1;

    $.getJSON('http://localhost:8080/user/getall', function(res) {

        $.each(res, function(userdata) {
            $('#user_details').append(
                '<tr>'+
                    '<td>'+n+'</td>'+
                    '<td style="width:15%"><img src="http://localhost:8080/assets/images/user/' + res[userdata].user_image + '" style="width: 100%" alt="User"></td>'+
                    '<td>' + res[userdata].user_name + '</td>' +
                    '<td>' + res[userdata].user_email + '</td>' +
                    '<td> <button type="button" class="btn btn-danger" user_id="' + res[userdata]._id + '" id="btn_delete"> Delete '+
                '</tr>'
            );
            n++;
        });
    })

    var id;



    $("#user_details").on('click', '#btn_addTOcart', function() {

        var isLoggedIn=confirm("Are you sure?");

            if (isLoggedIn.length>0) {
                $.ajax({
                    type: 'POST',
                    url: 'http://localhost:8080/product/addtocart',
                    data: data,
                    success: function(data) {

                        

                    },
                    error: function() {
                        alert("error");
                    }
                })

            }else{
                alert('You must login');
                location.href = "login.html";

            }


    })

});