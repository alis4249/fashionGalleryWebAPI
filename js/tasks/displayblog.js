$(document).ready(function() {
    var link = window.location.href;
    var id = link.split('?')[1];
    $.ajax({
        url: 'http://localhost:8080/blog/get/'+id,
        type: 'GET',
        success: function(data) {
            $('#display-individual-blog').append(

                '<div class="blog-detail-title">'+
                    '<h2>'+data.blog_title+'</h2>'+
                        '<p>travel <span>- Feb 20, 2020</span></p>'+
                '</div>'+
                
                '<div class="blog-quote">'+
                    '<p>' + data.heading + '</p>'+
                '</div>'+
                
                '<div class="blog-large-pic">'+
                    '<img src="http://localhost:8080/assets/images/blog/' + data.theme_image + '" alt="">'+
                '</div>'+
                
              '  <div class="blog-detail-desc">'+
                   ' <p>' + data.description + '</p>'+
                '</div>'
            );

        },
        error: function(error) {

        }
    })

});
