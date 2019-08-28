console.log("hello");

$("#form").on("submit", function (event) {
    event.preventDefault();

    let burgerInfo = {
        burger_name: [$("#burgerName").val()]
    }
    $.ajax({
        url: "/api/burger",
        method: "POST",
        data: burgerInfo
    }).then(function () {
        console.log("worked");
        location.reload();
    })
});

$("#delete").on("click", function (event) {
    let burgerInfo = {
        id: [$("#delete").attr("data-type")]
    }

    $.ajax({
        url: "/api/burger",
        method: "DELETE",
        data: burgerInfo
    }).then(function () {
        console.log("worked");
        location.reload();
    })
});