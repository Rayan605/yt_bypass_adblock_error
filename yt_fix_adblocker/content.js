(function () {


  let reloaded = false;

  function checkPlayer() {
    const video = document.querySelector("video.html5-main-video");

    if (!video || !window.location.href.includes("watch")) return;

    const src = video.getAttribute("src");

    if (!src) {
      console.log("[YT Player Fix] Pas de source vidéo → reload");
      if (!reloaded) {
        reloaded = true;
        setTimeout(() => location.reload(), 1000);
      }
    } else {
      console.log("[YT Player Fix] Vidéo OK :", src);
    }
  }


  const observer = new MutationObserver(() => {
    checkPlayer();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
 

  setTimeout(checkPlayer, 2000);
})();
