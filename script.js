/* Brings the form from the toDo list into focus and calls submit event's function */
$('#toDo').submit(function () {
    /* If the input value is not an emtpy string */
    if ($('input').val() !== '') {
        /* Creates the list item and the cross to remove the list item*/
        var input_value = $('input').val();
        $('ul').append('<li>' + input_value + '<a href="" id="cross">x</a></li>');

    };
    /* If the input value is an empty string do nothing*/
    $('input').val('');
    return false;
});
/* Function to remove the list item */
$(document).on('click', '#cross', function (e) {
    /* Makes sure the href doesn't take the user anywhere */
    e.preventDefault();
    $(this).parent().remove();
});


/* Function to check the list item */
$("#stuff").on('click', 'li', function () {
    /* Makes sure the href doesn't take the user anywhere */
    $(this).css("text-decoration", "line-through");
});




