$(document).ready(function() {	
	$("#detailSection").hide();
	$("#successMessageModal").hide();
});

function showOverview() {
	$("#tabSection a[href=#overview]").tab("show");
}

function showReports() {
	$("#tabSection a[href=#reports]").tab("show");
}

function showPlanning() {
	$("#tabSection a[href=#planning]").tab("show");
}

function showDetailSection() {
	$("#detailSection").show();
}

function showSuccessMesage() {
	$("#successMessageModal").modal('show');
}
