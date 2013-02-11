var 
args = arguments[0] || {}, 
sliderPosition = 0;

$.page.backgroundColor = args.backgroundColor?args.backgroundColor:Alloy.CFG.backgroundColor;
$.page.backgroundImage = args.backgroundImage?args.backgroundImage:null;
$.slider.backgroundColor = args.sliderColor?args.sliderColor:Alloy.CFG.sliderColor;
$.slideHandle.backgroundColor = args.sliderColor?args.sliderColor:Alloy.CFG.sliderColor;
$.slideWindow.backgroundColor = args.backgroundColor?args.backgroundColor:Alloy.CFG.backgroundColor;

Alloy.CFG.backgroundColor = args.backgroundColor?args.backgroundColor:Alloy.CFG.backgroundColor;
Alloy.CFG.sliderColor = args.sliderColor?args.sliderColor:Alloy.CFG.sliderColor;

setSentence({
    label:$.firstSentence,
    sentence:args.firstSentence?args.firstSentence:"Gray cat, gray cat, what do you see?"
});

setSentence({
    label:$.secondSentence,
    sentence:args.secondSentence?args.secondSentence:"I see a color cat looking at me!"
});

setImage({
    container:$.mainImage,
    size:args.mainSize?args.mainSize:null,
    location:args.mainImage?args.mainImage:"http://www.placekitten.com/g/"+Math.floor($.mainImage.size.width)+"/"+Math.floor($.mainImage.size.height),
});

setImage({
    container:$.slideImage,
    size:args.slideSize?args.slideSize:null,
    location:args.slideImage?args.slideImage:"http://www.placekitten.com/"+Math.floor($.slideWindow.size.width)+"/"+Math.floor($.slideWindow.size.height),
});


function setPageDetails(e){
    $.page.backgroundColor = args.pageBackgroundColor?args.pageBackgroundColor:Alloy.CFG.backgroundColor;
};

function slideHandleMove(evt){
    
    var coords = evt.source.convertPointToView({ x: evt.x, y: evt.y }, $.slideWindow);    
   
    var point = ($.slideWindow.size.width-coords.x); 
    
    if(point<($.slideWindow.size.width-$.slideHandle.size.width) && point>0){
        
        $.slider.right = point; 
        
    }
    
};
     
function slideHandleEnd(evt){
    
    var coords = evt.source.convertPointToView({ x: evt.x, y: evt.y }, $.slideWindow);    
   
    var point = ($.slideWindow.size.width-coords.x); 
    
    if ( point < ($.slideWindow.size.width*.1) && point<sliderPosition ){
        
        $.slider.setRight(0);
        
    } else if ( point > ( $.slideWindow.size.width*.9 ) && point>sliderPosition ){
        
        $.slider.setRight( $.slideWindow.size.width-$.slideHandle.size.width );
    }
    
    sliderPosition = point;
    
};

function setImage(e){
  
   e.container.setImage(e.location);
   
};

function setSentence(e){
    e.label.text = e.sentence;
}
// exports.newPage = newPageClick;
