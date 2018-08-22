// Find the highest content height and set it to container
(function () {
  var pagesContainerNode = document.querySelector('.tabbed-content .content');
  var defaultSelectedPageNode = pagesContainerNode.querySelector('.active');

  setTimeout(function () {
    if (defaultSelectedPageNode) {
      pagesContainerNode.style.height = defaultSelectedPageNode.offsetHeight + 'px';
    }
  }, 1);
})();

function onTabSelected(elem) {
  var tabsContainerNode = document.querySelector('.tabbed-content .tabs');
  var pagesContainerNode = document.querySelector('.tabbed-content .content');

  var targetPageNode = pagesContainerNode.querySelector(elem.dataset.page);

  // Clear active classes from tabs
  for (tabNode of tabsContainerNode.children) {
    tabNode.classList.remove('active');
  }
  elem.classList.add('active');

  // Clear active classes from tabs
  for (pageNode of pagesContainerNode.children) {
    pageNode.classList.remove('active');
  }
  targetPageNode.classList.add('active');
  pagesContainerNode.style.height = targetPageNode.offsetHeight + 'px';
}
