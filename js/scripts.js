
$(document).ready(function() {

  $("#user-info").submit(function() {

      var nameInput = $("input#name").val();
      var trackInput = $("input#track").val();
var inputCompUser = $("input:radio[name=compUser]:checked").val();
//var inputDesign = $("input#design").val();
var inputCompUser = $("input:radio[name=compUser]:checked").val();
var inputCompUser = $("input:radio[name=compUser]:checked").val();
var inputCompUser = $("input:radio[name=compUser]:checked").val();

      $(".name").text(nameInput);
      //$(".track")text(trackInput);
      if (inputCompUser === "canUse") {

            $("#suggestTrack").show();
            $("#learnTyping").hide();
          } else {

            //if (inputDesign === true) {
                  //$("#suggestTrack").show();
                  //$("#learnTyping").hide();
            //  } else {
                //alert ("second else");
                  $("#suggestTrack").hide();
                  $("#learnTyping").show();
                //}
            //$("#suggestTrack").hide();
            //$("#learnTyping").show();
          }

      //if (inputDesign === true) {
            //$("#suggestTrack").show();
            //$("#learnTyping").hide();
        //  } else {
            //$("#suggestTrack").hide();
            //$("#learnTyping").show();
          //}

       //$("#suggestTrack").show();

       event.preventDefault();

  });

});
