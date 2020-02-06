$(document).ready(function() {
    var token = localStorage.getItem('token')

    $.getJSON('http://localhost:8080/user/getall', function(res) {

        $.each(res, function(data) {
            $('#user_data').append(
                '<a href="user_table.html">'+
                    '<div class="user-img"> '+
                    '<img src="http://localhost:8080/assets/images/user/'+res[data].user_image+'" alt="user" class="img-circle">'+ 
                    '<span class="profile-status online pull-right"></span> </div>'+
                    '<div class="mail-contnet">'+
                        '<h5>'+res[data].user_name+'</h5> <span class="mail-desc">'+res[data].user_email+'</span></div>'+
                '</a>'
            );

        });
    })

    
    $.getJSON('http://localhost:8080/blog/getall', function(res) {

        $.each(res, function(data) {
            $('#index_blog_components').append(
               ' <div class="sl-item">'+
                '<div class="sl-left"> <img src="./assets/images/users/2.jpg" alt="user" class="img-circle"> </div>'+
                '<div class="sl-right">'+
                '<div> <a href="blog_table.html" class="link">John Doe</a>'+
                '<p>'+res[data].blog_title+'</p>'+
                '<div class="m-t-20 row">'+
                    '<div class="col-md-3 col-xs-12">'+
                        '<img src="http://localhost:8080/assets/images/blog/'+res[data].theme_image+'" alt="Blog" class="img-responsive radius"></div>'+
                    '<div class="col-md-9 col-xs-12">'+
                        '<p> '+res[data].description+' </p> </div>'+
                '</div>'+
            '</div>'  +                    
             '</div>'+
             '<hr>'

            );

        });
    })
    

});