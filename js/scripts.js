
$(document).ready(function() {
  $("#user-info").submit(function() {
    $("#learnTyping").hide();
    $("#suggestTrackCss").hide();
    $("#suggestTrackJava").hide();
    $("#suggestTrackCsharp").hide();
    $("#suggestTrackRuby").hide();

    var nameInput = $("input#name").val();
    $(".name").text(nameInput);

    var inputCompUser = $("input:radio[name=compUser]:checked").val();
    var inputDesign = $("input:radio[name=design]:checked").val();
    var inputCompanySize = $("input:radio[name=companySize]:checked").val();
    var inputApplication = $("input:radio[name=application]:checked").val();

    if (inputCompUser === "cantUse") {
      $("#learnTyping").show();
    } else if (inputDesign === "frontEnd") {
      $("#suggestTrackCss").show();
    } else if (inputCompanySize === "small") {
      $("#suggestTrackRuby").show();
    } else if (inputApplication === "internalSoft") {
      $("#suggestTrackCsharp").show();
    } else if (inputApplication === "externalSoft") {
      $("#suggestTrackJava").show();
    }

    event.preventDefault();
  ;})
;})
