
$(document).ready(function () {



    $("#up").click(function () {

        const firstItem = $('#container p').last();
        $('#container').prepend(firstItem);

    });
    
    
    $("#down").click(function () {

        const firstItem = $('#container p').first();
        $('#container').append(firstItem);

    });
    




})