$(document).ready(function(){
    $('#profile__ripple').ripples({
        resolution : 512,
        dropRadius : 10
    });
    const bars = document.querySelectorAll('.progress__bar');
    // console.log(bars);
    bars.forEach(function(bars){
        let percentage = bars.dataset.percent;
        let tooltip = bars.children[0];
        tooltip.innerText = percentage + '%';
        bars.style.width = percentage + '%';
        // console.log(percentage);
    });

    // counter section.
    const counters = document.querySelectorAll('.counter');
    // console.log(counters);
    function reunCounter(){
        counters.forEach(counter => {
            counter.innerText=0;
            let target = +counter.dataset.count;
            let step = target/100;            
            // console.log(target); 
            let countIt = function(){
                let displayedCount = counter.innerText;
                if(displayedCount < target ){
                    counter.innerText=displayedCount +step;
                    // console.log(displayedCount);
                    // countIt();
                    setTimeout(countIt,1);
                }else{
                    counter.innerText=target;
                }
            };
            countIt();
        });
    }
    reunCounter();

    let counterSection = document.querySelector('.counter__section');
    let options = {
        rootMargin : '0px 0px -500px 0px'
    }
    const sectionObserver = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
            // console.log('intersecting..')
            reunCounter();
        }

    }, options);
    sectionObserver.observe(counterSection);


    //image filter.
    var $wrapper = $('.portfolio__wrapper');

    //initialise plugin
    $wrapper.isotope({
        filter:'*',
        layoutMode : 'masonry',
        animationOptions :{
            duration:750,
            easing: 'linear'
        }
    });
    let links = document.querySelectorAll('.tabs a');
    // console.log(links);
    links.forEach(link =>{
        let selector = link.dataset.filter;
        // console.log(selector);
        link.addEventListener('click',function(e){
            // console.log('something');
            e.preventDefault();
            $wrapper.isotope({
                filter: selector,
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });

            e.target.classList.add('active');
            links.forEach(link =>{
                link.classList.remove('active');
            });
            e.target.classList.add('active');
        });
    });
    //magnify pop up
    $('.magnify').magnificPopup({
        type: 'image',
        gallery:{
            enabled : true
        },
        zoom : {
            enable: true
        }
    });

//slider 
    $('.slider').slick({
        arrows: false,
        autoplay: true
    });

});