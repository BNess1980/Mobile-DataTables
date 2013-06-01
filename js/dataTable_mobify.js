function mobifyDataTable(selector) { // Will use a separate conditional to use call this function out when browser window is < 800px

// Code for rendering datatable in mobile/touch devices
var browserSize = $(window).width();						
if((browserSize) < 801 ) { //Check for browser widths below 800px

     // Various CSS rules to break down dataTable once browser is below 800px
	$('table#'+selector).css({'display':'block','overflow':'hidden'}); // Force table and child elements to be display:block so each cell will stack vertically; not horizontal
	$('#'+selector+' thead').css({'display':'block','overflow':'hidden'}); 
	$('#'+selector+' tbody').css({'display':'block','overflow':'hidden'});
    $('#'+selector+' th').css({'display':'block','overflow':'hidden'});
	// The rule below separates content from a child span that will be added by the next function below; allows even space between original cell content and span 
	$('#'+selector+' td').css({'display':'block','overflow':'hidden','border':'none','border-bottom':'1px solid #cccccc','position':'relative','padding-left':'50%'});
	$('#'+selector+' td').addClass('mobify'); // Add mobify class; this will help add css rules for child span element that will be added later;		
	$('#'+selector+' tr').css({'display':'block','overflow':'hidden'}); // Rows will stack vertically
	$('#'+selector+' tfoot').css({'display':'block','overflow':'hidden'}); // Footer sections will stack vertically;
	$('#'+selector+' thead tr').css({'position':'absolute','top':'-9999px','left':'-9999px'});	 // Header hide off screen, but keep on page for usuability
	$('#'+selector+' tfoot tr').css({'position':'absolute','top':'-9999px','left':'-9999px'});   // Same as above except for footer
       	
	// The function below goes through each row and adds a span that contained the text of the original th before it was hidden
	$('#'+selector+' tbody tr').each(function() { // For each row
			var cellCount = $(this).children().length; // Get the total number of child objects(the total # of cells)
			$(this).children().each(function() { // For each cell					  						
				  var indexNum = $(this).index() // The variable indexNum is each cell's index number
				  if(indexNum < cellCount) { // If the cell's index is less than the total number of cells
					  var hdrText = $('#'+selector+' thead th').eq(indexNum).text() // This variable is the header text of each header that uses .eq to run through each th	
					  $(this).prepend('<span class="hdr">'+hdrText+':</span>'); // Than for each cell append <span><span> and add the var hdrText within those tags	
					 // this last rule applies to the new span created for the text of the original th value. Modify this to adjust to your table cells height values	
					 $('#'+selector+' td.mobify span.hdr').css({'position':'absolute','top':'15px','left':'6px','width':'45%','padding-right':'10px','white-space':'nowrap'});  				
				  }
				    					 					
			  }); 			  		  		  	
	  });
	  
	  // For check box items without th text; class .check is added by datatables.js
	  $('#'+selector+' td.check input[type="checkbox"]').prev().prepend('Select Item');
	  			
}<!--End if conditional to check to see if browser size is < 800px-->

}<!--End of function mobifyDataTable-->
