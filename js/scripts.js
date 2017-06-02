
$(document).ready(function() {

  $("#user-info").submit(function() {

      var nameInput = $("input#name").val();
      var trackInput = $("input#track").val();

      var inputCompUser = $("input:radio[name=compUser]:checked").val();
      var inputDesign = $("input:radio[name=design]:checked").val();
      var inputCompanySize = $("input:radio[name=companySize]:checked").val();
      var inputApplication = $("input:radio[name=application]:checked").val();

      $(".name").text(nameInput);
      //$(".track")text(trackInput);

      if (inputCompUser === "Yes") {
        $("#suggestTrackCss").hide();
        $("#suggestTrackRuby").hide();
        $("#suggestTrackCsharp").hide();
        $("#suggestTrackJava").hide();
        $("#learnTyping").hide();
      } else {
          if (inputDesign === "Yes") {

          }

           event.preventDefault();

  });

});
