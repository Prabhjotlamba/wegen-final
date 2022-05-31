$("#content1").fadeIn("slow");

$(".link").click(function (e) {
  e.preventDefault();
  $(".content-container div").fadeOut("slow");
  $("#" + $(this).data("rel")).fadeIn("slow");
});
$(".abc").click(function () {
  if ($(".abc").val() === "Contact") {
    $("#div1").show("700");
    $(".abc").val("hide");
  } else {
    $("#div1").hide("700");
    $(".abc").val("Contact");
  }
});
