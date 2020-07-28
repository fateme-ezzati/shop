$(document).ready(function(){
    // information tab
    // info click
    $('.info>h2').click(function(){
        $('.info>ul').fadeIn()
        $('.description>div').fadeOut()
        $(this).css({'background':'#fff','color':'#535353'})
        $('.description>h2').css({'background':'#efefef','color':'grey'})
        $(this).hover(function(){
            $(this).css({'background':'#fff','color':'#535353'})
        })
        $('.description>h2').hover(function(){
            $(this).css({'background':'#fff','color':'#535353'})
        },function(){
            $(this).css({'background':'#efefef','color':'grey'})
        })
    })
    // description click
    $('.description>h2').click(function(){
        $('.description>div').fadeIn()
        $('.info>ul').fadeOut()
        $(this).css({'background':'#fff','color':'#535353'})
        $(".info>h2").css({'background':'#efefef','color':'grey'})
        $(this).hover(function(){
            $(this).css({'background':'#fff','color':'#535353'})
        })
        $('.info>h2').hover(function(){
            $(this).css({'background':'#fff','color':'#535353'})
        },function(){
            $(this).css({'background':'#efefef','color':'grey'})
        })
    })
    // call the gallery plugin
    $("#lightgallery").lightGallery(); 
    // like product
    var flag=0
    $('.like').click(function(){
        var flag = $(this).children("i").attr('index')
        if(flag==1){
            $(this).children("i:nth-of-type(2)").fadeIn()
             $(this).children("i:nth-of-type(1)").fadeOut()
             $(this).children("i").attr('index','2')
        }else if(flag==2){
            $(this).children("i:nth-of-type(1)").fadeIn()
            $(this).children("i:nth-of-type(2)").fadeOut()
            $(this).children("i").attr('index','1')
        }
       
    })
    // zoom pic hover
    $('.part1>figure>img').hover(function(){
        $("#zoom_pic").css({'display':'block','opacity':'1'})
        $("#zoom_pic").hover(function(){

        },function(){
         $("#zoom_pic").css({'display':'none','opacity':'0'})

        })
    },function(){

    })

    //    customize T-shirt
    $('.color>section>div').click(function(){
        $('#main_pic').attr('src',$(this).children('img:nth-of-type(1)').attr('src'))
        $('#zoom_pic>img').attr('src',$(this).children('img:nth-of-type(2)').attr('src'))
        $('#lightgallery>a>img').attr('src',$(this).children('img:nth-of-type(2)').attr('src'))
        $('#lightgallery>a').attr('href',$(this).children('img:nth-of-type(2)').attr('src'))
        $('.color>section>div').children('span:nth-of-type(1)').css('border', '1px solid #999999')
        $(this).children('span:nth-of-type(1)').css('border', '3px solid black')

    })
    // size selecting
    $('.size>section>div').click(function(){
        $('.size>section>div').children('span:nth-of-type(1)').css({'background':'#cccccc','width':32,'height':32,'top':2,"left":2})
        $(this).children('span:nth-of-type(1)').css({'background':'#999999','width':36,'height':36,'top':0,"left":0})
        $(this).hover(function(){

        },function(){
        $(this).children('span:nth-of-type(1)').css({'background':'#999999','width':36,'height':36,'top':0,"left":0})

    })

    })
    $('.size>section>div').hover(function(){
        $(this).children('span:nth-of-type(1)').css({'background':'#cccccc','width':36,'height':36,'top':0,"left":0})

    },function(){
        $(this).children('span:nth-of-type(1)').css({'background':'#cccccc','width':32,'height':32,'top':2,"left":2})

    })
    
})
// picture zoom
var temp = $('#zoom_pic').innerWidth()
var temp2 = $('#zoom_pic').innerHeight()
    function mousepos(event){
        var x = event.clientX
        var y = event.clientY

        if(x < temp/2){
            $('#zoom_pic>img').css('left', (-(x/8) + (-(x/8)*.1))+'%')
        }else{
            $('#zoom_pic>img').css('left', (-(x/8) + ((x/8)*.1))+'%')
        }
        if(y < temp2 /2){
            $('#zoom_pic>img').css('top', (-(y/8) + (-(y/8)*.1))+'%')
        }else{
            $('#zoom_pic>img').css('top', (-(y/8) + ((y/8)*.1))+'%')
        }
    }

       
    

