$(document).ready(function() {
    var link=window.location.href;
    var valu=link.split('?')[1];
    var token=localStorage.getItem('token');
    var usrid=localStorage.getItem('user_id');

    var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    if(valu=='Male'){
        $.getJSON('http://localhost:8080/product/getByCategory/Male', function(res) {
            $('#category-by').append('Category : Male');

            $.each(res, function(data) {
              
                $('#productslist').append(
                    '<input type="text" id="txt_prodid" value="'+res[data]._id+'" hidden/>'+
                    
                    '<div class="col-lg-4 col-sm-6">'+
                                    '<div class="product-item">'+
                                        '<div class="pi-pic">'+
                                            '<img src="http://localhost:8080/assets/images/user/'+res[data].product_image+'" alt="">'+
                                            '<div class="icon">'+
                                                '<i class="icon_heart_alt"></i>'+
                                            '</div>'+
                                            '<ul>'+
                                                '<li class="w-icon active" id="btn_addTOcart" product_id="'+res[data]._id+'"><a><i class="icon_bag_alt"></i></a></li>'+
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
                    '<input type="text" id="txt_prodid" value="'+res[data]._id+'" hidden/>'+
                    '<div class="col-lg-4 col-sm-6">'+
                                    '<div class="product-item">'+
                                        '<div class="pi-pic">'+
                                            '<img src="http://localhost:8080/assets/images/product/'+res[data].product_image+'" alt="">'+
                                            '<div class="icon">'+
                                                '<i class="icon_heart_alt"></i>'+
                                            '</div>'+
                                            '<ul>'+
                                                '<li class="w-icon active" id="btn_addTOcart" product_id="'+res[data]._id+'"><a><i class="icon_bag_alt"></i></a></li>'+
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
                '<input type="text" id="txt_prodid" value="'+res[data]._id+'" hidden/>'+

                    '<div class="col-lg-4 col-sm-6">'+
                                    '<div class="product-item">'+
                                        '<div class="pi-pic">'+
                                            '<img src="http://localhost:8080/assets/images/product/'+res[data].product_image+'" alt="">'+
                                            '<div class="icon">'+
                                                '<i class="icon_heart_alt"></i>'+
                                            '</div>'+
                                            '<ul>'+
                                                '<li class="w-icon active" id="btn_addTOcart" product_id="'+res[data]._id+'"><a><i class="icon_bag_alt"></i></a></li>'+
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
                '<input type="text" id="txt_prodid" value="'+res[data]._id+'" hidden/>'+

                    '<div class="col-lg-4 col-sm-6">'+
                                    '<div class="product-item">'+
                                        '<div class="pi-pic">'+
                                            '<img src="http://localhost:8080/assets/images/product/'+res[data].product_image+'" alt="">'+
                                            '<div class="icon">'+
                                                '<i class="icon_heart_alt"></i>'+
                                            '</div>'+
                                            '<ul>'+
                                                '<li class="w-icon active" id="btn_addTOcart" product_id="'+res[data]._id+'"><a><i class="icon_bag_alt"></i></a></li>'+
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


    $.getJSON('http://localhost:8080/cart/get/'+usrid, function(res) {
        var totalPrice=0;
        var finalTotalPrice;
    // console.log('In cart: uid:'+usrid)

            $.each(res, function(data) {
              
                $('#cartlist').append(
                    '<tr>'+
                    '<td class="cart-pic first-row"><img src="http://localhost:8080/assets/images/product/'+res[data].product_image+'" alt=""></td>'+
                    '<td class="cart-title first-row">'+
                        '<h5>'+res[data].product_name+'</h5>'+
                    '</td>'+
                    '<td class="p-price first-row">£'+res[data].product_price+'</td>'+
                    '<td class="total-price first-row">'+res[data].product_brand+'</td>'+
                    '<td class="total-price first-row">'+res[data].product_color+'</td>'+
                '</tr>'
                );
                    
                    totalPrice=parseInt(res[data].product_price)+totalPrice;                
            });
            
            $('#totalPrice').append(
                '£'+totalPrice
            )

        })

        $.getJSON('http://localhost:8080/product/get/'+valu, function(res) {
            
            $('#show_product_img').append(
                '<img class="product-big-img" src="http://localhost:8080/assets/images/product/'+res.product_image+'" alt="">'+
                                '<div class="zoom-icon">'+
                                    '<i class="fa fa-search-plus"></i>'+
                                '</div>'
            )
            
            $('#show_title').append(
                res.product_name
            )
            $('#show_description').append(
                res.product_description
            )
            $('#show_price').append(
                res.product_price
            )
            $('#show_categories').append(
                res.product_category
            )
    
            })
    

    $("#productslist").on('click', '#btn_addTOcart', function() {
        var pid=$(this).attr('product_id');
        // alert(pid)
        var time=date+' :: '+time;
        var data={
            product_id:pid
        }

        if(usrid!=null){
            $.ajax({
                type: 'post',
                url: 'http://localhost:8080/product/getById',
                data: data,
                beforeSend: function(xhr) {
                    if (token) {
                        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                    }
                },
                success: function(fetchedData) {
                    var product_name=fetchedData.product_name;
                    var product_image=fetchedData.product_image;
                    var product_price=fetchedData.product_price;
                    var product_brand=fetchedData.product_brand;
                    var product_color=fetchedData.product_color;
    
                    var data1={
                        user_id:usrid,
                        product_name:product_name,
                        product_image:product_image,
                        product_price:product_price,
                        product_brand:product_brand,
                        product_color:product_color
                    }
                    // console.log(fetchedData)
                     $.ajax({
                        type: 'POST',
                        url: 'http://localhost:8080/product/addtocart',
                        data: data1,
                        success: function(data) {
    
                            alert("Selected item is added to cart");
    
                        },
                        error: function() {
                            alert("You must first log in!")
                        }
                    })
    
                },
                error: function() {
                    alert("You must first log in!")
                }
            })
        }else{
            alert("You must first log in!")

        }

    })

});