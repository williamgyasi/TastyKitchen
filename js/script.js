$(document).ready(function(){
    $('.about-features').waypoint(function(direction){
        if(direction==='down'){
            $('nav').addClass('sticky')
        }else{
            $('nav').removeClass('sticky')
        }
    },{
        offset:'20%'
    })

    $('.scroll-to-plan').click(()=>{
        console.log("eork")
        $('html,body').animate({scrollTop: $('.scroll-plans').offset().top},1000)
    })

    
    
})