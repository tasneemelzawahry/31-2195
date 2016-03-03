

$('html').on('click', function (event) {
    $.ajax({
        url: 'api/quote',
        success: function (quote) {
        	console.log(quote);
            $('.post-list-item-header').html(quote.text);
            $('.post-list-item-body').html(quote.author);
        }
    });
})
