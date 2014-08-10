$(document).ready(function() {

  $("#repoButton").click(function(){
    event.preventDefault();
    $("#events").css("display", "none");
    $("#repos").css("display", "block");
  });

  $("#eventButton").click(function(){
    event.preventDefault();
    $("#events").css("display", "inline-block");
    $("#repos").css("display", "none");

  });


  var homePage = {

      init: function() {
        homePage.initStyling();
      },
      initStyling: function() {
        homePage.renderSide($(".sideBar"));
        homePage.renderRepo($(".repoBar"));
        homePage.renderEvent($(".eventBar"));


      },

      render: function(template, data, $target) {
          var tmpl = _.template(template, data);

          $target.append(tmpl);

      },
      renderSide: function($target) {
        homePage.render($("#sideTmpl").html(), masterData, $target);

      },
      renderRepo: function($target) {
        homePage.render($("#repoTmpl").html(), masterData, $target);

      },

      renderEvent: function($target) {
        homePage.render($("#eventTmpl").html(), masterData, $target);

      }

  };

homePage.init();





});
