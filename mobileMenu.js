const hamburgerButton = document.querySelector('#mobileMenuBtn');

function createList(menu) {
  const menuList = document.createElement('ul');
  addListItem(menuList, 'Contanc');
  addListItem(menuList, 'info');
  addListItem(menuList, 'about');
  menu.appendChild(menuList);
}
function addListItem(menuList, listText) {
  const listItem = document.createElement('li');
  const text = document.createTextNode(listText);
  listItem.appendChild(text);
  menuList.appendChild(listItem);
}
function display() {
  const menu = document.createElement('div');
  menu.classList.add('mobileMenuDiv');
  document.body.appendChild(menu);
  createList(menu);
}
hamburgerButton.addEventListener('click', display);
