$(document).ready(function() {
    var tok = localStorage.getItem('token');

    $('#btn_logout').click(function() {

        var confirmLogout = window.confirm("Confirm Logout!");
        if (confirmLogout) {
            logout();
        } else {

        }


    })

    function logout() {
        $.ajax({
            url: 'http://localhost:8080/logout',
            type: 'post',
            beforeSend: function(xhr) {
                if (tok) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
                }
            },
            success: function(data) {

                window.location.href = "index.html";

            },
            error: function(error) {
                console.log("Error")
            }
        })
    }


});