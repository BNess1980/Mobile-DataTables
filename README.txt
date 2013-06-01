*First and foremost the dataTable_mobify can apply to any table with a specified id and a table that uses a
<thead section> with <th> headers; it is not just for dataTables.

*This function is built for a responsive design; therefore if your table is nested within a fixed value 
element(i.e. - a div with a width of 960px), that element must go into a percentage when viewed on a device
with a smaller screen size. Line 12 in the /css/styles.css file changes the width of the div#container that
contains the table element to 100%.

*Line 29 of the of the /js/dataTable.mobify.js adds unique styles for the <span> elements preceeding each cell's
content. You can modify this line to adjust where the span is positioned. This plugin is designed based on this
web article http://css-tricks.com/responsive-data-tables/ 

*Unlike that article, spans were used in place of the td:before{'content':''} css since pseudo elements
are difficult to modify with jQuery.

*The functions on line 36 in /js/dataTable.mobify.js applies only to dataTables checkbox items. This would've
come up blank if not specified since n o text value exists in the corresponding th.