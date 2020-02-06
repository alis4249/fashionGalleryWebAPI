$(document).ready(function() {
    var link=window.location.href;
    var valu=link.split('?')[1];

    if(valu=='Male'){

        $.getJSON('http://localhost:8080/product/getByCategory/Male', function(res) {
            $.each(res, function(data) {
              
                $('#productslist').append(
                    '<div class="col-lg-4 col-sm-6">'+
                                    '<div class="product-item">'+
                                        '<div class="pi-pic">'+
                                            '<img src="http://localhost:8080/assets/images/user/'+res[data].product_image+'" alt="">'+
                                            '<div class="icon">'+
                                                '<i class="icon_heart_alt"></i>'+
                                            '</div>'+
                                            '<ul>'+
                                                '<li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>'+
                                                '<li class="quick-view"><a href="product.html?'+res[data]._id+'">+ Quick View</a></li>'+
                                                '<li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>'+
                                            '</ul>'+
                                        '</div>'+
                                        '<div class="pi-text">'+
                                            '<div class="catagory-name">'+res[data].product_tag+'</div>'+
                                            '<a href="#">'+
                                                '<h5>'+res[data].product_name+'</h5>'+
                                            '</a>'+
                                            '<div class="product-price">'+
                                                '$'+res[data].product_price+''+
                                            '</div></div></div></div>'
                );
    
                
            });
        })
    }else if(valu=='Female'){

        $.getJSON('http://localhost:8080/product/getByCategory/Female', function(res) {
            $.each(res, function(data) {
              
                $('#productslist').append(
                    '<div class="col-lg-4 col-sm-6">'+
                                    '<div class="product-item">'+
                                        '<div class="pi-pic">'+
                                            '<img src="http://localhost:8080/assets/images/user/'+res[data].product_image+'" alt="">'+
                                            '<div class="icon">'+
                                                '<i class="icon_heart_alt"></i>'+
                                            '</div>'+
                                            '<ul>'+
                                                '<li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>'+
                                                '<li class="quick-view"><a href="product.html?'+res[data]._id+'">+ Quick View</a></li>'+
                                                '<li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>'+
                                            '</ul>'+
                                        '</div>'+
                                        '<div class="pi-text">'+
                                            '<div class="catagory-name">'+res[data].product_tag+'</div>'+
                                            '<a href="#">'+
                                                '<h5>'+res[data].product_name+'</h5>'+
                                            '</a>'+
                                            '<div class="product-price">'+
                                                '$'+res[data].product_price+''+
                                            '</div></div></div></div>'
                );
    
                
            });
        })
    }else if(valu=='Kids'){

        $.getJSON('http://localhost:8080/product/getByCategory/Kids', function(res) {
            $.each(res, function(data) {
              
                $('#productslist').append(
                    '<div class="col-lg-4 col-sm-6">'+
                                    '<div class="product-item">'+
                                        '<div class="pi-pic">'+
                                            '<img src="http://localhost:8080/assets/images/user/'+res[data].product_image+'" alt="">'+
                                            '<div class="icon">'+
                                                '<i class="icon_heart_alt"></i>'+
                                            '</div>'+
                                            '<ul>'+
                                                '<li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>'+
                                                '<li class="quick-view"><a href="product.html?'+res[data]._id+'">+ Quick View</a></li>'+
                                                '<li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>'+
                                            '</ul>'+
                                        '</div>'+
                                        '<div class="pi-text">'+
                                            '<div class="catagory-name">'+res[data].product_tag+'</div>'+
                                            '<a href="#">'+
                                                '<h5>'+res[data].product_name+'</h5>'+
                                            '</a>'+
                                            '<div class="product-price">'+
                                                '$'+res[data].product_price+''+
                                            '</div></div></div></div>'
                );
    
                
            });
        })
    }else{
        $.getJSON('http://localhost:8080/product/getall', function(res) {
            $.each(res, function(data) {
              
                $('#productslist').append(
                    '<div class="col-lg-4 col-sm-6">'+
                                    '<div class="product-item">'+
                                        '<div class="pi-pic">'+
                                            '<img src="http://localhost:8080/assets/images/user/'+res[data].product_image+'" alt="">'+
                                            '<div class="icon">'+
                                                '<i class="icon_heart_alt"></i>'+
                                            '</div>'+
                                            '<ul>'+
                                                '<li class="w-icon active"><a href="#"><i class="icon_bag_alt"></i></a></li>'+
                                                '<li class="quick-view"><a href="product.html?'+res[data]._id+'">+ Quick View</a></li>'+
                                                '<li class="w-icon"><a href="#"><i class="fa fa-random"></i></a></li>'+
                                            '</ul>'+
                                        '</div>'+
                                        '<div class="pi-text">'+
                                            '<div class="catagory-name">'+res[data].product_tag+'</div>'+
                                            '<a href="#">'+
                                                '<h5>'+res[data].product_name+'</h5>'+
                                            '</a>'+
                                            '<div class="product-price">'+
                                                '$'+res[data].product_price+''+
                                            '</div></div></div></div>'
                );
    
                
            });
        })
    }
           

});