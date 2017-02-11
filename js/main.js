function add_item(){
var val = $('#add-item').val();

$('.store-unit').prepend('<div class="task"><div class="edit-section"></div><div class="title-section"><h1>' +val+'</h1><span class="close"><i>x</i></span></div></div>');
}

function remove_item(){
$(this).parent().parent().remove()}



$(document).ready(function(){




  $('#button').on('click',add_item);
  $('.store-unit').on('click','.close',remove_item);






});
