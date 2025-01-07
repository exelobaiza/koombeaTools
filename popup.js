document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.tool-button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const url = this.getAttribute('data-url');
      if (url) {
        chrome.tabs.create({ url: url });
      }
    });
  });
}); 