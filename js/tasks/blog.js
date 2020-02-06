$(document).ready(function() {
    var n=1;

    $.getJSON('http://localhost:8080/blog/getall', function(res) {

        $.each(res, function(blogdata) {
            $('#blog_details').append(

                '<div class="col-lg-6 col-sm-6">'+
                            '<div class="blog-item">'+
                                '<div class="bi-pic">'+
                                    '<img src="http://localhost:8080/assets/images/blog/' + res[blogdata].theme_image + '" alt="">'+
                                '</div>'+
                                '<div class="bi-text">'+
                                    '<a href="./blog-details.html?'+res[blogdata]._id+'">'+
                                        '<h4>' + res[blogdata].blog_title + '</h4>'+
                                    '</a>'+
                                    '<p>travel <span>- Feb 20, 2020</span></p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'

            );

            if(n<=5){

                $('#recent-blog').append(
                    '<a href="./blog-details.html?'+res[blogdata]._id+'" class="rb-item">'+
                                '<div class="rb-pic">'+
                                    '<img src="http://localhost:8080/assets/images/blog/' + res[blogdata].theme_image + '" alt="">'+
                                '</div>'+
                                '<div class="rb-text">'+
                                    '<h6>' + res[blogdata].blog_title + '</h6>'+
                                    '<p>Fashion <span>- Feb 20, 2020</span></p>'+
                                '</div></a>'
                );
            }

            if(n<=3){
                $('#index-blog').append(
                    '<div class="col-lg-4 col-md-6">'+
                '<div class="single-latest-blog">'+
                '<img src="http://localhost:8080/assets/images/blog/' + res[blogdata].theme_image + '" alt="">'+
                    '<div class="latest-text">'+
                        '<div class="tag-list">'+
                            '<div class="tag-item">'+
                                '<i class="fa fa-calendar-o"></i>'+
                                'Feb 20,2020'+
                            '</div></div>'+
                        '<a href="blog.html">'+
                            '<h4>' + res[blogdata].blog_title + '</h4>'+
                        '</a></div></div></div>'
                );
            }






                




            n++;
        });
    })

});