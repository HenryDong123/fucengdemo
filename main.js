$(clickMe).on('click', function () {
    if ($(popover).is(':hidden')) {
        $(popover).show()

        $(document).one('click', function () {
            $(popover).hide()

        })


    } else {
        $(popover).hide()

    }


})


$(wrapper).on('click', function (e) {
    e.stopPropagation()

})