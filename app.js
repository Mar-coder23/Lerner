// Code to make a smooth transistion when scrolling is initiated.

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});




// Code for popup using library under support page when submit emerency request button is clicked

const myPopup = new Popup({
    id: "my-popup",
    widthMultiplier: "1.3",
    title: "1. Call extension 216.445.2170",
    content: `
        {custom-style}{green}[ State the Following:] 
        {custom-style}[Name]  -  Spell any uncommon name or include your employee number
        {custom-style}[Phone Number]  -  preferably a clinic extension
        {custom-style}[Location of computer]  -  including room number
        {custom-style}[LRICS#]  -  A printed sticker found on the computer case. Example: LRI-101234. 
        {custom-style}[Activity Number]  -  This is a 12 digit number used for accounting. Please see your PI or administrator for details.
        {custom-style}[Brief description]  of the problem you are experiencing`,
        
    css: `  .popup-title{
                font-size: 2em;
                margin-bottom: -.5em;
            }
            .popup-body{
                margin: 0em;
            }   
            .green{
                color:green;}
            p{
                display: flex;
                font-size: .8em;
                text-align: left; 
            }
            .custom-style{
                font-weight: 700;
                color:black;
            }
    }
         `     
});
emergencyBtn.addEventListener('click', () => {
    myPopup.show();
});





// code for when support forms button is clicked and showcases a drop down
let supportVisible = false;
let supportBtn = document.getElementById('supportBtn');
let supportHidden = document.getElementById('support-btn-hidden');

supportBtn.addEventListener('click', function(){
    if(supportVisible){
        supportHidden.style.display = 'none';
        supportVisible = false;
    }
    else{
        supportHidden.style.display = 'block';
        supportVisible = true;
    }
    
});




// when support forms is clicked then a dropdown appears. 3 tabs that make a popup window when clicked.
function openEducationTab() {
    let url = "http://computing.lerner.ccf.org/edu/";
    let width = 600;
    let height = 600;
    let left = (window.innerWidth - width) / 2;
    let top = (window.innerHeight - height) / 2;
  
    let popupWindow = window.open(url, "_blank", "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left);
    if (window.focus) {
      popupWindow.focus();
    }
}
function openLriTab() {
    let url = "http://computing.lerner.ccf.org/supportrequest/";
    let width = 600;
    let height = 600;
    let left = (window.innerWidth - width) / 2;
    let top = (window.innerHeight - height) / 2;
  
    let popupWindow = window.open(url, "_blank", "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left);
    if (window.focus) {
      popupWindow.focus();
    }
}
function openQhsTab() {
    let url = "http://computing.lerner.ccf.org/qhs/";
    let width = 600;
    let height = 600;
    let left = (window.innerWidth - width) / 2;
    let top = (window.innerHeight - height) / 2;
  
    let popupWindow = window.open(url, "_blank", "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left);
    if (window.focus) {
      popupWindow.focus();
    }
}


// ----------------------------------------------------------------------------
// Js code for when popup is opened when you click read more in the intro page

let readBtn = document.getElementById('readBtn');
let readHidden = document.getElementById('readBox');
let readExit = document.getElementById('readExit');

readBtn.addEventListener('click', function(){
    if(readHidden.style.display = 'none'){
        readHidden.style.display = 'block';
    }
    else{
        readHidden.style.display = 'none';
    }
    body.style.background = 'red';
    
});
readExit.addEventListener('click', function(){
    readHidden.style.display = 'none';
});

// code for the scrollify library that is used.
$(function(){


    $.scrollify({
        section : ".scrolli",
        sectionName : "#introductionPage",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
    });

});



