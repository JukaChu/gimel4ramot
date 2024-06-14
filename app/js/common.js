
    $('.slider-big').slick({
        slideToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-small',
        rtl: true,
//         lazyLoad: 'ondemand',
    });

    $('.slider-text').slick({
        dots: true,
        slideToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        rtl: true,
//         lazyLoad: 'ondemand',
    });

    $('.gallery-slider').slick({
        dots: true,
        slideToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.prev-arr'),
        nextArrow: $('.next-arr'),
        rtl: true,
//         lazyLoad: 'ondemand',
    });



$(document).ready(function(e){

    var mobile = $(window).width() < 992




    $('.slider-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.slider-small-wrap .control-left img'),
        nextArrow: $('.slider-small-wrap .control-right img'),
        focusOnSelect: true,
        asNavFor: '.slider-big',
        rtl: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.main-slider').slick({
        rtl: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 900,
        fade: true,
        arrows: false,
    });

    $('.colored-title-sec h2').each(function () {
        var text = $(this).text().split(' ');
        var newText = '';
        if (text.length > 1)
            text.forEach(function (item, index) {
                newText += index === 0 ? '<b>'+item+' </b>' : item + ' '
            });
        else
            newText +=  '<b>'+text[0].slice(0, 1)+'</b>' + text[0].slice(1);
        // $(this).html(newText)
    });

    $('.faq-list .question').on('click', function () {
        var $this = $(this);
        var $item = $('.faq-list .item');
        if (!$this.parent().hasClass('open')) {
            $item.removeClass('open').find('.answer').slideUp(300);
            $this.parent().addClass('open').find('.answer').slideDown(300, function () {
                if (mobile)
                    $('html, body').animate({
                        scrollTop: $this.offset().top - $('header').outerHeight()
                    }, 500);
            });
        } else {
            $item.removeClass('open').find('.answer').slideUp(300);
        }
    });

    $('.img-slider').slick({
        rtl: true,
        dots: true,
        arrows: !mobile
    });

    $('.project-photos-slider').slick({
        rtl: true,
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true
    });

    if (mobile){
        $('.hp-4 .items-list').slick({
            rtl: true,
            arrows: false,
            dots: true,
            adaptiveHeight: true
        });
        $('.hp-10 .items-list').slick({
            rtl: true,
            arrows: false,
            variableWidth: true,
            focusOnSelect: true,
            swipeToSlide: true,
            infinite: false
        });
    }


    $(window).on('scroll', function () {
        var fromTop = $(this).scrollTop() + $('header').outerHeight(),
            menuItems = $('.main-menu .menu-item a'),
            scrollItems = menuItems.map(function () {
                var item = $(this).attr('href');
                if (item.length) return item;
            });
        var cur = scrollItems.map(function () {
            if ($(this)) {

            } else {
                if ($(this).offset().top < fromTop) return this;
            }

        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : '';
        menuItems.parent().removeClass('current-menu-item').end().filter("[href='#" + id + "']").parent().addClass('current-menu-item');
    });
    $('a[href^="#anchor"]').on('click', function () {
        var href = $.attr(this, 'href');
        $('html, body').animate({
            scrollTop: $(href).offset().top - $('header').outerHeight() + 1
        }, 500);
        if (mobile) $('.main-menu').slideUp();
        return false;
    });

    if ($("#zoom").length && !mobile) {
        $("#zoom").elevateZoom({
            zoomType: "lens"
        });
    }

    $('.call-mob-menu').on('click', function () {
        $('.call-mob-menu').toggleClass('active');
        $('.main-menu').slideToggle();
    });



    $('.region-select-form .form-reset').click(function(){
        $('.buildings').slideUp(300);
    });

    // atributeTitleValue
    function atributeTitleValue() {
        $("header .main-menu li").each(function() {
            var text = $.trim($(this).text());
            $(this).find("a").attr("title", text);
        })
    }
    $(atributeTitleValue);
    // Accordions
    $('.accordion, .js-accordion').each(function(i, el){
        $(el).find('> .ac-header, > .ac-header > .ac-opener').click(function(e){
            e.preventDefault();
            e.stopPropagation();

            $(el).find('> .ac-content').stop().slideToggle(300);
            // $(el).find('.slick-slider').slick('setPosition');
            $(el).toggleClass('opened');
        });

        if ($(el).hasClass('opened-on-load')) {
            $(el).find('.ac-header').trigger('click');
        }
    });
    // heightSold
    function heightSold() {
        $('td.pt-sold').each(function(){
            let heightParent = $(this).parent().height();
            $(this).css('height',`${heightParent}px`)
        });
    }
    $(window).on('load resize', heightSold);
    //open filter
    $('.closePanel').on('click', function(){
        $('.container-advanced-search').toggleClass('active-search-aside');
    });
    //read-more
    if ($(window).width() < 768) {
        let htmlSvg = '<span class="read">לחשוף<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11"><g clip-path="url(#clip0)"><path d="M5.93 8.56l4.9-4.9a.6.6 0 00.17-.42.6.6 0 00-.18-.43l-.36-.36a.6.6 0 00-.85 0l-4.1 4.11-4.12-4.12a.6.6 0 00-.85 0l-.36.37a.6.6 0 00-.18.42c0 .16.06.31.18.43l4.9 4.9a.6.6 0 00.42.17.6.6 0 00.43-.17z"/></g><defs><clipPath id="clip0"><path fill="#fff" transform="rotate(90 5.5 5.5)" d="M0 0h11v11H0z"/></clipPath></defs></svg></span>'
        $('.mobil-tab-read-more').append(htmlSvg);
        $('.mobil-tab-read-more >span.read').on('click', function() {
            if (!$(this).parent().hasClass('active')) {
                $('.mobil-tab-read-more').removeClass('active');
                $(this).parent().addClass('active');
            } else {
                $('.mobil-tab-read-more').removeClass('active');
            }
        });
    }

    function ReplaceNumberWithCommas(yourNumber) {
        //Seperates the components of the number
        var n= yourNumber.toString().split(",");
        //Comma-fies the first part
        n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        //Combines the two sections
        return n.join(".");
    }
    //ionRangeSlider
    let $range = $(".js-range-slider-custom-prefix input");
    let $customRange = $(".js-range-slider input");
    function rangePrettify (n) {

        return  ReplaceNumberWithCommas(n) + 'מ"ר' ;

    }
    function customRangePrettify (n) {

        return  ReplaceNumberWithCommas(n);
    }

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        force_edges: true,
        step: 1,
        prettify_enabled:true,
        prettify: rangePrettify,
        onFinish:filternew
    });
    $customRange.ionRangeSlider({
        skin: "round",
        type: "double",
        force_edges: true,
        step: 1,
        prettify:customRangePrettify,
        onFinish:filternew,
        onChange: function (data) {
            $(data.input).closest('.ac-content').find('.from').val(data.from);
            $(data.input).closest('.ac-content').find('.to').val(data.to);
        }
    });
    // Modals
    $('.modal').css('display', 'flex');

    $('.modal-dialog').click(function(e) {
        return e.stopPropagation();
    });
    $('.modal').click(function(e) {
        hideModal($(this));
        $('.video-modal .modal-video').html('<div id="modal-video-iframe"></div>');
    });

    $('.modal-close, .js-modal-close').click(function(e) {
        e.preventDefault();

        hideModal($(this).closest('.modal'));
        $('.video-modal .modal-video').html('<div id="modal-video-iframe"></div>');
    });

    $('body').on('click','[data-modal]',function(e) {
        e.preventDefault();
        e.stopPropagation();

        hideModal('.modal');
        if ($(this).data('modal-tab') != undefined) {
            goToTab($(this).data('modal-tab'));
        }


        if($(this).data('url')){
            $( "#content_modal" ).html('');
            $( "#content_modal" ).load($(this).data('url') );
        }
        showModal($(this).data('modal'));
    });
    function getScrollWidth() {
        // create element with scroll
        let div = document.createElement('div');

        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';

        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();

        return scrollWidth;
    }
    let bodyScrolled = 0;

    function showModal(modal) {
        $(modal).addClass('visible');
        bodyScrolled = $(window).scrollTop();
        $('body, .header').addClass('modal-visible')
            .scrollTop(bodyScrolled)
            .css('padding-right', getScrollWidth());
    }

    function hideModal(modal) {
        $(modal).removeClass('visible');
        bodyScrolled = $(window).scrollTop();
        $('body, .header').removeClass('modal-visible')
            .scrollTop(bodyScrolled)
            .css('padding-right', 0);
    }


//
//    $('.find').click(function(e){
//        e.preventDefault();
//        window.location.href=$('#lottery').val();
//    });
    $('.form-group select').change(function(){
        filter();
    });
    $('.pt-search input').change(function(){
        filter();
    });
    $('.form-search input[type=radio], .form-search input[type=checkbox] ').change(function(){
        $('#page').val(1);
        filternew();

    });
    $('body').on('click','.sort',function(){
        $('.sort').parent().removeClass('active');
        $(this).parent().addClass('active');
        $('#page').val(1);

        if($(this).attr('data-typesort')=='DESC'){
            $(this).attr('data-typesort','ASC');
        }else{
            $(this).attr('data-typesort','DESC');
        }

        filternew();
    });
    if($('.form-search').length){
        $('#page').val(1);
        //filternew();
    }

    $('.btn-page .button-left').click(function(e){
        e.preventDefault();
        var page=parseInt($('#page').val());
        $('#page').val(page+1);
        filternew();
    });
    $('.btn-page .button-right').click(function(e){
        e.preventDefault();
        var page=parseInt($('#page').val());
        $('#page').val(page-1);
        filternew();
    });





    function filternew(){

        var link=$('#link').val();
        var page=$('#page').val();
        var house_number='';
        var lottery='';
        var earth='';
        var status='';
        var floor='';
        var rooms='';
        var apartment_type='';
        var parking_spaces='';
        var sort='';


        $('.opacity').show();

        if($('.pt-header-cell.active .sort').length){
            sort=$('.pt-header-cell.active .sort').attr('data-sort');

            var typesort=$('.pt-header-cell.active .sort').attr('data-typesort');


        }

        $('input[name=status]').each(function(){
            if( $(this).is(':checked')) {
                if (status == '') {
                    status = $(this).val();
                } else {
                    status = status + ',' + $(this).val();
                }
            }

        });
        $('input[name=house_number]').each(function(){
            if( $(this).is(':checked')) {
                if (house_number == '') {
                    house_number = $(this).val();
                } else {
                    house_number = house_number + ',' + $(this).val();
                }
            }

        });
        $('input[name=lottery]').each(function(){
            if( $(this).is(':checked')) {
                if (lottery == '') {
                    lottery = $(this).val();
                } else {
                    lottery = lottery + ',' + $(this).val();
                }
            }

        });

        $('input[name=earth]').each(function(){
            if( $(this).is(':checked')) {
                if (earth == '') {
                    earth = $(this).val();
                } else {
                    earth = earth + ',' + $(this).val();
                }
            }

        });
        $('input[name=floor]').each(function(){
            if( $(this).is(':checked')) {
                if (floor == '') {
                    floor = $(this).val();
                } else {
                    floor = floor + ',' + $(this).val();
                }
            }

        });
        $('input[name=apartment_type]').each(function(){
            if( $(this).is(':checked')) {
                if (apartment_type == '') {
                    apartment_type = $(this).val();
                } else {
                    apartment_type = apartment_type + ',' + $(this).val();
                }
            }

        });
        $('input[name=rooms]').each(function(){
            if( $(this).is(':checked')) {
                if (rooms == '') {
                    rooms = $(this).val();
                } else {
                    rooms = rooms + ',' + $(this).val();
                }
            }

        });
        $('input[name=parking_spaces]').each(function(){
            if( $(this).is(':checked')) {
                if (parking_spaces == '') {
                    parking_spaces = $(this).val();
                } else {
                    parking_spaces = parking_spaces + ',' + $(this).val();
                }
            }

        });


        var minprice=$('#priceform').val();
        var maxprice=$('#priceto').val();
        var minsquare=$('#squareform').val();
        var maxsquare=$('#squareto').val();
        var minwarehouse=$('#warehouseform').val();
        var maxwarehouse=$('#warehouseto').val();
        if(page!=1){
            link=link+'page/'+page+'/';
        }
        link=link+'?status='+status+'&minprice='+minprice+'&maxprice='+maxprice+'&house_number='+house_number+'&lottery='+lottery+'&floor='+floor+'&apartment_type='+apartment_type+'&rooms='+rooms+'&minsquare='+minsquare+'&maxsquare='+maxsquare+'&minwarehouse='+minwarehouse+'&maxwarehouse='+maxwarehouse+'&parking_spaces='+parking_spaces+'&paged='+page;
        if(sort){
            link=link+'&sort='+sort;
        }

        if(typesort){
            link=link+'&typesort='+typesort;
        }

        // console.log(link);
        // history.pushState({}, null, link);

        var data = {
            'action': 'loadmoreproperty',
            'status': status,
            'minprice': minprice,
            'maxprice': maxprice,
            'house_number': house_number,
            'lottery': lottery,
            'earth': earth,
            'floor': floor,
            'apartment_type': apartment_type,
            'rooms': rooms,
            'minsquare': minsquare,
            'maxsquare': maxsquare,
            'minwarehouse': minwarehouse,
            'maxwarehouse': maxwarehouse,
            'parking_spaces': parking_spaces,
            'sort': sort,

            'typesort': typesort,

            'paged': page,
        };

        $.ajax({
            url:ajaxurl, // обработчик
            data:data, // данные
            type:'GET', // тип запроса
            success:function(data){
                data=JSON.parse(data)

                if(data.status=='success'){
                    $('.pt-table-body').html('');
                    $.each( data.property, function( key, value ) {

                        var str='<tr class="pt-row '+value.statusclass+'" ><td class="pt-row-cell">'+value.lottery+'</td>><td class="pt-row-cell">'+value.house_number+'</td><td class="pt-row-cell">'+value.earth+'</td><td class="pt-row-cell">'+value.number_rooms+'</td><td class="pt-row-cell">'+value.apartment_type+'</td><td class="pt-row-cell">'+value.floor+'</td><td class="pt-row-cell">'+value.rooms+'</td><td class="pt-row-cell">'+value.apartment_area+'</td><td class="pt-row-cell">'+value.balcony_area+'</td><td class="pt-row-cell">'+value.warehouse_number+'</td><td class="pt-row-cell">'+value.warehouse_area+'</td><td class="pt-row-cell">'+value.number_of_parking_spaces+'</td><td class="pt-row-cell">'+value.price+'</td><td class="pt-row-cell">'+value.price_without_taxes+'</td>';

                        if(value.statu!='שיווק חופשי') {

                            str = str + '<td class="pt-row-cell openmodal" data-modal="#pop-up-info-modal" data-url="' + value.permalink + '">' + value.remarks + '</td>';
                        }else{
                            str = str + '<td class="pt-row-cell">' + value.remarks + '</td>';
                        }
                        if(value.status){ str=str+'<td class="pt-sold"><span>'+value.status+'</span></td>'; }
                        str=str+'</tr>';
                        $('.pt-table-body').append(str);
                        heightSold()
                    });
                    $('#count').text(data.count);
                    if(data.prev){
                        $('.button-right').attr('href',data.prev);
                        $('.button-right').removeClass('hidden');
                    }else{
                        $('.button-right').addClass('hidden');
                    }
                    if(data.next){
                        $('.button-left').attr('href',data.next);
                        $('.button-left').removeClass('hidden');
                    }else{
                        $('.button-left').addClass('hidden');
                    }
                    if(data.paged){
                        $('#paged').text(data.paged);
                        $('#max_num_pages').text(data.max_num_pages);
                        $('.text_paged').removeClass('hidden');
                    }else{
                        $('.text_paged').addClass('hidden');
                    }

                    $.each( data.inputs, function( key, value ) {

                        $('input[name='+key+']').removeAttr('disabled');

                        $('input[name='+key+']').each(function(){
                            var input=$(this);
                            jQuery.each(value, function(index, item) {

                                if(item==input.val()){
                                    input.attr('disabled','disabled');
                                }
                            });
                        })
                    });
                    $('.opacity').hide();
                }else{
                    alert('error');
                }
            }
        });


        //$( "#search_page" ).load( link+" #load_content" );

        // window.location.href=link;
    }

    function filter(){
        var earth=$('#earth').val();
        var house_number=$('#house_number').val();
        var floor=$('#floor').val();
        var rooms=$('#rooms').val();
        var price=$('#price').val();
        var filter='';

        $('.pt-checkbox input').each(function(){

            if( $(this).is(':checked')) {
                if (filter == '') {
                    filter = $(this).val();
                } else {
                    filter = filter + ',' + $(this).val();
                }
            }
        });



        var data = {
            'action': 'loadmore',
            'earth': earth,
            'house_number': house_number,
            'floor': floor,
            'rooms': rooms,
            'price': price,
            'filter': filter,

        };
        $('.pt-table-body').html('');
        $.ajax({
            url:ajaxurl, // обработчик
            data:data, // данные
            type:'POST', // тип запроса
            success:function(data){
                if( data ) {
                    $('.pt-table-body').html(data);
                }

            }
        });


    }
});
































