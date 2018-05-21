$(document).ready(function() {
    $(".devour_form").on("submit", function(event) {
        event.preventDefault();

        var burger_id = $(this).children(".burger_id").val();
        // var burger_id = $(this).data("id");
        console.log(burger_id);
        $.ajax({
            method: "PUT",
            url: "/burgers/" + burger_id
        }).then(function(data) {
            location.reload();
        })
    });
});

// $(document).ready(function() {
//     $(".devour_form").on("submit", function(event) {
//         event.preventDefault();

//         var burger_id = $(this).data("id");
//         console.log(burger_id);
//         $.ajax({
//             method: "PUT",
//             url: "/burgers/" + burger_id
//         }).then(function(data) {
//             location.reload();
//         })
//     });
// });