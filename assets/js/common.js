$(document).ready(function(){if($("a.abstract").click(function(){$(this).parent().parent().find(".abstract.hidden").toggleClass("open"),$(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open")}),$("a.bibtex").click(function(){$(this).parent().parent().find(".bibtex.hidden").toggleClass("open"),$(this).parent().parent().find(".abstract.hidden.open").toggleClass("open")}),$("a").removeClass("waves-effect waves-light"),$("#toc-sidebar").length){$(".publications h2").each(function(){$(this).attr("data-toc-skip","")});var e="#toc-sidebar",t=$(e);Toc.init(t),$("body").scrollspy({target:e})}const a=document.createElement("link");a.href="../css/jupyter.css",a.rel="stylesheet",a.type="text/css";let n=localStorage.getItem("theme");if(null==n||"null"==n){const e=window.matchMedia;e&&e("(prefers-color-scheme: dark)").matches&&(n="dark")}$(".jupyter-notebook-iframe-container iframe").each(function(){$(this).contents().find("head").append(a),"dark"==n&&$(this).bind("load",function(){$(this).contents().find("body").attr({"data-jp-theme-light":"false","data-jp-theme-name":"JupyterLab Dark"})})}),$(".pfp").on("click",function(){0===$(".image-overlay").length&&$("body").append('<div class="image-overlay"></div>');var e=$("<img>").attr("src","/assets/img/shuai.png").addClass("enlarged-image");$(".image-overlay").html(e).fadeIn(),$(".image-overlay").click(function(){$(this).fadeOut()})})});