$(document).ready(function () {
  // add toggle functionality to abstract and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let theme = localStorage.getItem("theme");
  if (theme == null || theme == "null") {
    const userPref = window.matchMedia;
    if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  }

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (theme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // Click and zoom profile pic
  $('.pfp').on('click', function() {
    // Create overlay div if it doesn't exist
    if ($('.image-overlay').length === 0) {
      $('body').append('<div class="image-overlay"></div>');
    }

    // Create a copy of the clicked image with the 'enlarged-image' class
    // var enlargedImg = $(this).clone().addClass('enlarged-image').removeClass('pfp');
    var enlargedImg = $('<img>').attr('src', '/assets/img/shuai.png').addClass('enlarged-image');

    // Append the copied image to the overlay and show it
    $('.image-overlay').html(enlargedImg).fadeIn();

    // Add click event on the overlay to close it
    $('.image-overlay').click(function() {
      $(this).fadeOut();
    });
  });
});
