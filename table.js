function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function AddRandomNumberToTable( ){
    var myArray = [2, 4];

var rowNumber = getRandomInt(1,3);
var cellNumber = getRandomInt(1,3);
var value = myArray[Math.floor(Math.random() * myArray.length)];

var cell = $(".row"+rowNumber).find(".cell"+cellNumber)

    var oldValue =cell.find("p").text();
    if(!oldValue){
        cell.append("<p>"+value+"</p>");
    }
    else{
        AddRandomNumberToTable()
    }
}

$(document).ready(function(){
AddRandomNumberToTable()

})

function AddElements(oldValue,valueToMove,newCell){
    if(oldValue===0 || (parseInt(valueToMove)===parseInt(oldValue))){
        newCell.find('p').remove()
        var newValue = parseInt(valueToMove)+ parseInt(oldValue);

        newCell.append("<p>"+newValue+"</p>");

         
         return true;
        }
        else{return false;} 

}


function moveElement(valueToMove ,cell){
   
    var oldValue= cell.find('p').text();
    if( !oldValue)
    {
    oldValue=0;
    }
   return AddElements(oldValue,valueToMove,cell)

}
/*
Up: 38
Down: 40
Right: 39
Left: 37
*/

$(document).keydown(function(e){
   
        $('p').each(function(){
            var valueToMove = $(this).text();
            var cell=  $(this).parent();
            var cellClass = cell.attr('class')
            var row = cell.parent();
            var rowClass = row.attr('class');
            var cellnumber = cellClass.slice(-1);
            var rownumber = rowClass.slice(-1);
            
            if (e.which == 37) { 
               if(cellClass!=='cell1'){
               
              
                 var newCellnumber = cellnumber -1;
                 var newCell =row.find('.cell'+newCellnumber);
                 
                 var result=  moveElement(valueToMove ,newCell)
          
                 if(result){
                   $(this).remove()
                  }
          
                }
            }
            if(e.which == 39)  {
                if(cellClass!=='cell3'){
               
              
                    var newCellnumber = parseInt(cellnumber) +1;
                     newCell =row.find('.cell'+newCellnumber);
                    
                    var result=  moveElement(valueToMove ,newCell)
                
                   if(result){
                     $(this).remove()
                    }
                    
             
                   }

            }
            if(e.which == 38)  {
                if(rowClass!=='row1'){
               
              
                    var newRownumber = parseInt(rownumber) -1;
                    var newrowClass = 'row'+newRownumber;

                     newCell =$("."+newrowClass).find('.cell'+cellnumber);
                   
                    var result=  moveElement(valueToMove ,newCell)
             
                   if(result){
                     $(this).remove()
                    }
                  
             
                   }

            }
            if(e.which == 40)  {
                if(rowClass!=='row3'){
               
              
                    var newRownumber = parseInt(rownumber) +1;
                    var newrowClass = 'row'+newRownumber;

                     newCell =$("."+newrowClass).find('.cell'+cellnumber);
                     
                    var result=  moveElement(valueToMove ,newCell)
               
                   if(result){
                     $(this).remove()
                    }
                    
             
                   }

            }
           
            
     }); 
     AddRandomNumberToTable()
    
})