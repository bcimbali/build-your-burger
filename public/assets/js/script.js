$(document).ready(function() {
    $(".devour_form").on("click", function(event) {
        // event.preventDefault();

        var burger_id = $(this).children(".burger_id").val();
        // var burger_id = $(this).data("id");
        console.log(burger_id);
        $.ajax("/burgers/" + burger_id, {
            type: "PUT",
            // url: "/burgers/" + burger_id
        }).then(function(data) {
            console.log(data);
            location.reload();
        });
    });
});
