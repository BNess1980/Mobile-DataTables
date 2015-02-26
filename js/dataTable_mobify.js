jQuery.fn.extend({

mobifyDataTable: function(selector) { // Will use a separate conditional to use call this function out when browser window is < 800px

// Code for rendering datatable in mobile/touch devices
var browserSize = $(window).width();						
if((browserSize) < 801 ) { //Check for browser widths below 800px

     // Various CSS rules to break down dataTable once browser is below 800px
    
     var table, thead, tbody, th, tr, tbody_tr, thead_tr, tfoot_tr;

     table = $('table#'+selector);
     thead = $('#'+selector+' thead');
     thead_tr = $('#'+selector+' thead tr');
     thead_th = $('#'+selector+' thead th');                 
     tbody = $('#'+selector+' tbody');
     tbody_tr = $('#'+selector+' tbody tr');     
     th = $('#'+selector+' th');
     tr = $('#'+selector+' tr');
     td = $('#'+selector+' td');
     tfoot = $('#'+selector+' tfoot');          
     tfoot_tr = $('#'+selector+' tfoot tr');

    $(table,thead,tbody,th,tr,tfoot).addClass('mobifyDisplay');  
	$(td).css({'display':'block',
				'overflow':'hidden',
				'border-bottom':'1px solid #ccc',
				'position':'relative',
				'padding-left':'50%'}).addClass('mobify');
	$(thead_tr,tfoot_tr).addClass('mobifyPosition'); 

	// The function below goes through each row and adds a span that contained the text of the original th before it was hidden
	$(tbody_tr).each(function() { // For each row
			var cellCount = $(this).children().length; // Get the total number of child objects(the total # of cells)
			$(this).children().each(function() { // For each cell					  						
				  var indexNum = $(this).index() // The variable indexNum is each cell's index number
				  if(indexNum < cellCount) { // If the cell's index is less than the total number of cells
					  var hdrText = $(thead_th).eq(indexNum).text() // This variable is the header text of each header that uses .eq to run through each th	
					  $(this).prepend('<span>'+hdrText+':</span>'); // Than for each cell append <span><span> and add the var hdrText within those tags	
					 // this last rule applies to the new span created for the text of the original th value. Modify this to adjust to your table cells height values	
					 $('#'+selector+' td.mobify span').addClass('mobifyHdr'); 				
				  }
				    					 					
			  }); 			  		  		  	
	  });
	  
	  // For check box items without th text; class .check is added by datatables.js
	  $('#'+selector+' td.check input[type="checkbox"]').prev().prepend('Select Item');
	  			
	}  // check browser size if below 801px

} // mobifyDataTable

}); // jQuery.fn.extend