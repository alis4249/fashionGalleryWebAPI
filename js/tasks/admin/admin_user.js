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



    $("#user_details").on('click', '#btn_delete', function() {

        var confirm_btn=confirm("Are you sure?");

            if (confirm_btn==true) {
                user_id = $(this).attr('user_id');
                alert(user_id);
                var data = {
                    _id: user_id
                }

                $.ajax({
                    type: 'DELETE',
                    url: 'http://localhost:8080/user/delete',
                    data: data,
                    // beforeSend: function(xhr) {
                    //     if (token) {
                    //         xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                    //     }
                    // },
                    success: function(data) {

                        location.href = "user_table.html";

                    },
                    error: function() {
                        alert("error")
                    }
                })

            }


    })

});