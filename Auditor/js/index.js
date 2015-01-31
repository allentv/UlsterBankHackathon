/*
$(document).ready(function() {
	$("#tabSection a").click(function (e) {
		e.preventDefault()
		$(this).tab("show")
	});
	
	
	
});
*/

function showOverview() {
	$("#tabSection a[href=#overview]").tab("show");
}

function showReports() {
	$("#tabSection a[href=#reports]").tab("show");
}

function showPlanning() {
	$("#tabSection a[href=#planning]").tab("show");
}