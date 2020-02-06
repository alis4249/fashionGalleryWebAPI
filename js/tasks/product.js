$(document).ready(function() {
   

    // $.getJSON('http://localhost:8080/product/getall', function(res) {

    //     $.each(res, function(data) {
    //         $('#user_data').append(
    //             '<a href="user_table.html">'+
    //                 '<div class="user-img"> '+
    //                 '<img src="http://localhost:8080/assets/images/user/'+res[data].user_image+'" alt="user" class="img-circle">'+ 
    //                 '<span class="profile-status online pull-right"></span> </div>'+
    //                 '<div class="mail-contnet">'+
    //                     '<h5>'+res[data].user_name+'</h5> <span class="mail-desc">'+res[data].user_email+'</span></div>'+
    //             '</a>'
    //         );

    //     });
    // })

    
    $.getJSON('http://localhost:8080/product/getByCategory/Male', function(res) {
        var n=1;
        $.each(res, function(data) {
            if(n<=10){
                $('#men-product').append(
                    '<div class="product-item">'+
                         '<div class="pi-pic">'+
                             '<img src="http://localhost:8080/assets/images/product/'+res[data].product_image+'" alt="">'+
                             '<div class="icon">'+
                                 '<i class="icon_heart_alt"></i>'+
                             '</div>'+
                             '<ul>'+
                                 '<li class="w-icon active"><a href="product.html/'+res[data]._id+'"><i class="icon_bag_alt"></i></a></li>'+
                                 '<li class="quick-view"><a href="product.html/'+res[data]._id+'">+ Quick View</a></li>'+
                                 '<li class="w-icon"><a href="product.html/'+res[data]._id+'"><i class="fa fa-random"></i></a></li>'+
                             '</ul>'+
                         '</div>'+
                         '<div class="pi-text">'+
                             '<div class="catagory-name">'+res[data].product_tag+'</div>'+
                             '<a href="product.html/'+res[data]._id+'">'+
                                 '<h5>'+res[data].product_name+'</h5>'+
                             '</a>'+
                             '<div class="product-price">'+
                                 '£'+res[data].product_price+''+
                             '</div>'+
                         '</div>'+
                    '</div> '
                        );
            }
            n++;

        });
    })
    

    $.getJSON('http://localhost:8080/product/getByCategory/Female', function(res) {
        var n=1;
        
                $('#women-product').append(
                   '<div class="product-slider owl-carousel" id="women-product">'+
                   $.each(res, function(data) {

                    if(n<=10){

                        '<div class="product-item">'+
                        '<div class="pi-pic">'+
                            '<img src="http://localhost:8080/assets/images/product/'+res[data].product_image+'" alt="">'+
                            '<div class="icon">'+
                                '<i class="icon_heart_alt"></i>'+
                            '</div>'+
                            '<ul>'+
                                '<li class="w-icon active"><a href="product.html/'+res[data]._id+'"><i class="icon_bag_alt"></i></a></li>'+
                                '<li class="quick-view"><a href="product.html/'+res[data]._id+'">+ Quick View</a></li>'+
                                '<li class="w-icon"><a href="product.html/'+res[data]._id+'"><i class="fa fa-random"></i></a></li>'+
                            '</ul>'+
                        '</div>'+
                        '<div class="pi-text">'+
                            '<div class="catagory-name">'+res[data].product_tag+'</div>'+
                            '<a href="product.html/'+res[data]._id+'">'+
                                '<h5>'+res[data].product_name+'</h5>'+
                            '</a>'+
                            '<div class="product-price">'+
                                '£'+res[data].product_price+''+
                            '</div>'+
                        '</div>'+
                   '</div> '

                    }

                    n++;
                   
                     })

                   +'</div> '

                  
                        );
       alert(n)
    })
    

});