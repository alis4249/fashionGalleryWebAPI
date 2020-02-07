$(document).ready(function() {
    var link=window.location.href;
    var valu=link.split('?')[1];

    if(valu=='Male'){

        $.getJSON('http://localhost:8080/product/getByCategory/Male', function(res) {
            $('#category-by').append('Category : Male');

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

        $('#category-by').append('Category : Female');

            $.each(res, function(data) {
              
                $('#productslist').append(
                    '<div class="col-lg-4 col-sm-6">'+
                                    '<div class="product-item">'+
                                        '<div class="pi-pic">'+
                                            '<img src="http://localhost:8080/assets/images/product/'+res[data].product_image+'" alt="">'+
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
                                                '£'+res[data].product_price+''+
                                            '</div></div></div></div>'
                );
    
                
            });
        })
    }else if(valu=='Kids'){

        $.getJSON('http://localhost:8080/product/getByCategory/Kids', function(res) {


            $('#category-by').append('Category : Kids');

            $.each(res, function(data) {
              
                $('#productslist').append(
                    '<div class="col-lg-4 col-sm-6">'+
                                    '<div class="product-item">'+
                                        '<div class="pi-pic">'+
                                            '<img src="http://localhost:8080/assets/images/product/'+res[data].product_image+'" alt="">'+
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
                                                '£'+res[data].product_price+''+
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
                                            '<img src="http://localhost:8080/assets/images/product/'+res[data].product_image+'" alt="">'+
                                            '<div class="icon">'+
                                                '<i class="icon_heart_alt"></i>'+
                                            '</div>'+
                                            '<ul>'+
                                                '<li class="w-icon active" id="btn_addTOcart"><a><i class="icon_bag_alt"></i></a></li>'+
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
                                                '£'+res[data].product_price+''+
                                            '</div></div></div></div>'
                );
    
                
            });
        })
    }


    $("#productslist").on('click', '#btn_delete', function() {

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