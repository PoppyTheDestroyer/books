$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var bookName = {
            name: $("#burg").val().trim()
        };
        console.log(bookName);
        $.ajax("./api/books", {
            type: "POST",
            data: bookName
        }).then(
            function(){
                console.log(`created new book: ${bookName}`);
                location.reload(); 
            }
        );
    });
  $(".devoured").on("click", function(event) {
    var id = $(this).data("id");
    console.log(id);
    var devoured = $(this).data("devoured");
    var bookEat = {
      devoured: devoured
    };
    console.log("devoured?");
    $.ajax(`/api/books/${id}`, {
      type: "PUT",
      data: bookEat
    }).then(function() {
      console.log(`changed book status to ${devoured}`);
      location.reload();
    });
  });
  $(".delete").on("click", function(event) {
    var id = $(this).data("id");
    $.ajax(`/api/books/${id}`, {
      type: "DELETE",
      data: id
    }).then(function() {
      console.log("deleted book", id);
      location.reload();
    });
  });
});
