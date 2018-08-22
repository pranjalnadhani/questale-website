(function () {
  setTimeout(function () {
    new StickySidebar('#sidebar', {
      containerSelector: '.two-column',
      innerWrapperSelector: '.sidebar__inner',
      topSpacing: 32,
      bottomSpacing: 32
    });
  }, 2);
})()