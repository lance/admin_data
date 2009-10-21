$(function() {

	$('#delete_all').live('click',function() {
    var data = $('#advance_search_form').data('advance_search_params');
		$.post("/search/comment", data);
    return false;
	});

});

