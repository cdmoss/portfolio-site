

function leaveIntro(){
    let expAnchor = document.getElementById('service-container');
    expAnchor.scrollIntoView();
}

function showNav(){
    let nav = document.getElementById('sticky-nav');
    if (nav.classList.contains('show')){
        nav.classList.remove('show');
    }
    else{
        nav.classList.add('show');
    }

}

var headerDownWaypoint = new Waypoint({
    element: document.getElementById('down-arrow'),
    handler: function(direction) {
        let header = document.getElementById('sticky-header'); 
        let intro = document.getElementById('intro-container'); 
        if (direction == "down"){
            header.classList.add("show");
            Array.from(document.getElementById('sticky-nav').getElementsByTagName('A')).forEach(function(link){
                link.classList.add('show')
            })
            intro.classList.add("hide");
        }
        else {
            header.classList.remove("show");
            Array.from(document.getElementById('sticky-nav').getElementsByTagName('A')).forEach(function(link){
                link.classList.remove('show')
            })
            intro.classList.remove("hide");
            let top = document.getElementsByName('top')[0];
            top.scrollIntoView();
        }
    },
    offset: "15%"
})

var headerUpWaypoint = new Waypoint({
    element: document.getElementById('down-arrow'),
    handler: function(direction) {
        let header = document.getElementById('sticky-header'); 
        let intro = document.getElementById('intro-container'); 
        if (direction == "down"){
            header.classList.add("show");
            intro.classList.add("hide");
        }
        else{
            header.classList.remove("show");
            intro.classList.remove("hide");
            let top = document.getElementsByName('top')[0];
            top.scrollIntoView();
        }
    },
    offset: "-5%"
})


var expWaypoint = new Waypoint({
    element: document.getElementsByClassName('section-container')[0],
    handler: function() {
        let links = document.getElementById('sticky-nav').getElementsByTagName('A'); 
        Array.from(links).forEach(function(link){
            link.classList.remove('current');
        })
        let expLink = document.getElementById('sticky-nav').getElementsByTagName('A')[0];
        expLink.classList.add('current')
    }
})

var servicesWaypoint = new Waypoint({
    element: document.getElementsByClassName('section-container')[1],
    handler: function(direction) {
        let links = document.getElementById('sticky-nav').getElementsByTagName('A'); 
        Array.from(links).forEach(function(link){
            link.classList.remove('current');
        })
        if (direction == "down") {
            let serviceLink = document.getElementById('sticky-nav').getElementsByTagName('A')[1];
            serviceLink.classList.add('current');
        }
        else {
            let expLink = document.getElementById('sticky-nav').getElementsByTagName('A')[0];
            expLink.classList.add('current');
        }
    },
    offset: "30%"
})

// var blogWaypoint = new Waypoint({
//     element: document.getElementsByClassName('section-container')[2],
//     handler: function(direction) {
//         let links = document.getElementById('sticky-nav').getElementsByTagName('A'); 
//         Array.from(links).forEach(function(link){
//             link.classList.remove('current');
//         })
//         if (direction == "down") {
//             let blogLink = document.getElementById('sticky-nav').getElementsByTagName('A')[2];
//             blogLink.classList.add('current');   
//         } else {
//             let serviceLink = document.getElementById('sticky-nav').getElementsByTagName('A')[1];
//             serviceLink.classList.add('current');
//         }
//     },
//     offset: "30%"
// })

var contactWaypoint = new Waypoint({
    element: document.getElementsByClassName('section-container')[2],
    handler: function(direction) {
        let links = document.getElementById('sticky-nav').getElementsByTagName('A'); 
        Array.from(links).forEach(function(link){
            link.classList.remove('current');
        })
        if (direction == "down") {
            let contactLink = document.getElementById('sticky-nav').getElementsByTagName('A')[2];
            contactLink.classList.add('current');   
        } else {
            let blogLink = document.getElementById('sticky-nav').getElementsByTagName('A')[1];
            blogLink.classList.add('current');
        }
    },
    offset: "30%"
})

const openProject = () => {
    
}