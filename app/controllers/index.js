Alloy.Globals.currentWindow = $.index;
Alloy.Globals.currentPage = 0;

Alloy.Globals.currentWindow.open();

var pageDetails = [

    {   backgroundColor:"purple", 
        sliderColor:"red", 
        mainImage:"https://evbdn.eventbrite.com/s3-s3/eventlogos/2087657/09goatnamedsylvia.jpg", 
        slideImage:"http://2.bp.blogspot.com/-umxPVI8NnrI/TyAbmzXIAdI/AAAAAAAACTc/VkPF6s_gbq4/s1600/Chicken.jpg",
        firstSentence:"White goat, white goat, what do you see?",
        secondSentence:"I see a red chicken looking at me!"
    },
    {   mainImage:"http://us.123rf.com/400wm/400/400/nikitos77/nikitos771209/nikitos77120900044/15498129-yellow-chicken-in-green-grass.jpg", 
        slideImage:"http://lepetitpuppynyc.com/site%20pics/maltese_basuedayva.jpg",
        firstSentence:"Red chicken, red chicken, what do you see?",
        secondSentence:"I see a white puppy looking at me!"
    }
]

createPage();

function nextPageClick(e){
    
    createPage(Alloy.Globals.currentPage);
    
    Alloy.Globals.currentPage++
}

function createPage(e){
   
    var page = Alloy.createWidget("page", "widget", pageDetails[e]);
    
    page.getView("nextPage").addEventListener('click', nextPageClick);
    
    var page1 = page.getView();
      
    Alloy.Globals.currentWindow.animate({view:page1,transition:Ti.UI.iPhone.AnimationStyle.CURL_UP}, function(){
        
    }); 
    
    Alloy.Globals.currentWindow.add(page1);
    
    
}



// var 
// args = arguments[0] || {}, 
// sliderPosition = 0;
// 
// setSentence({
    // label:$.firstSentence,
    // sentence:"Gray cat, gray cat, what do you see?"
// });
// 
// setSentence({
    // label:$.secondSentence,
    // sentence:"I see a color cat looking at me!"
// });
// 
// setImage({
    // container:$.mainImage,
    // size:args.mainSize?args.mainSize:null,
    // location:args.mainImage?args.mainImage:"http://www.placekitten.com/g/"+Math.floor($.mainImage.size.width)+"/"+Math.floor($.mainImage.size.height),
// });
// 
// setImage({
    // container:$.slideImage,
    // size:args.slideSize?args.slideSize:null,
    // location:args.slideImage?args.slideImage:"http://www.placekitten.com/"+Math.floor($.slideWindow.size.width)+"/"+Math.floor($.slideWindow.size.height),
// });
// 
// function nextPage(evt){
    // var properties = {
        // pageBackgroundColor:"purple",
        // mainImage:"",
//         
//         
    // }
//     
    // var newPage = Alloy.createController("index", properties).getView();
//     
    // newPage.open();
// }
// 
// function setPageDetails(e){
    // $.page.setBackgroundColor(args.pageBackgroundColor?args.pageBackgroundColor:Alloy.CFG.backgroundColor);
// });
// 
// function slideHandleMove(evt){
//     
    // var coords = evt.source.convertPointToView({ x: evt.x, y: evt.y }, $.slideWindow);    
//    
    // var point = ($.slideWindow.size.width-coords.x); 
//     
    // if(point<($.slideWindow.size.width-$.slideHandle.size.width) && point>0){
//         
        // $.slider.right = point; 
//         
    // }
//     
// };
//      
// function slideHandleEnd(evt){
//     
    // var coords = evt.source.convertPointToView({ x: evt.x, y: evt.y }, $.slideWindow);    
//    
    // var point = ($.slideWindow.size.width-coords.x); 
//     
    // if ( point < ($.slideWindow.size.width*.1) && point<sliderPosition ){
//         
        // $.slider.setRight(0);
//         
    // } else if ( point > ( $.slideWindow.size.width*.9 ) && point>sliderPosition ){
//         
        // $.slider.setRight( $.slideWindow.size.width-$.slideHandle.size.width );
    // }
//     
    // sliderPosition = point;
//     
// };
// 
// function setImage(e){
// 
   // e.container.setImage(e.location);
// };
// 
// function setSentence(e){
    // e.label.text = e.sentence;
// }
// 
