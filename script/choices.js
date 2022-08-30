window.addEventListener('DOMContentLoaded', function() {
  const element = document.querySelector('select');
  const choices = new Choices(element, {
    shouldSort: false,
    searchEnabled: false,
    itemSelectText: 'Press to select',
  });
});
