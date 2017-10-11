$(function () {

    // <button class="btn btn-xs btn-danger pull-right delete">
    //     <i class="fa fa-times fa-fw"></i>
    // </button>
    function addDeleteButton(element) {
        $(element).prepend(
            $("<button>").addClass('btn btn-xs btn-danger pull-right delete')
                .append($("<i>").addClass('fa fa-times fa-fw'))
        )
    }

    $("#movieList li").each(function () {
        addDeleteButton(this)
    })

    $(document).on('click', 'button.delete', function (e) {
        $(this).parent().remove()
    })

    // $("button.delete").click(function (e) {
    //     $(this).parent().remove()
    // })

    $("#newMovieForm").submit(function (e) {
        e.preventDefault()
        let newMovieInput = $("[name=title]", $(this))
        let newMovie = newMovieInput.val()

        if (newMovie.trim() == '') return

        // Select an Existing Similar Element
        let newElement = $("li:last-child", $("#movieList")).clone()
        // Modify It
        newElement.text(newMovie)

        // Create a new element to insert into the page
        // let newElement = $('<li class="list-group-item">' + newMovie + '</li>')
        // Modify said element so it looks the same as the others
        // newElement.addClass('list-group-item')
        // newElement.text(newMovie)

        // Insert into the page
        $("#movieList").append(newElement)
        addDeleteButton(newElement)
        newMovieInput.val('')
    })
})