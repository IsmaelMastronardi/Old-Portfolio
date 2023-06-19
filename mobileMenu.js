const hamburgerButton = document.querySelector('#mobileMenuBtn');

function removeMenu() {
  const menu = document.querySelector('.mobileMenuDiv');
  menu.remove();
}
function addListItem(menuList, listText) {
  const listItem = document.createElement('li');
  const text = document.createTextNode(listText);
  listItem.classList.add('mobileMenulistItem')
  listItem.addEventListener('click', removeMenu);
  listItem.appendChild(text);
  menuList.appendChild(listItem);
}
function createList(menu) {
  const menuList = document.createElement('ul');
  menuList.classList.add('mobileMenuList')
  addListItem(menuList, ' Portfolio');
  addListItem(menuList, 'About');
  addListItem(menuList, 'Contact');
  menu.appendChild(menuList);
}
function display() {
  const menu = document.createElement('div');
  menu.classList.add('mobileMenuDiv');
  document.body.appendChild(menu);
  createList(menu);
}
hamburgerButton.addEventListener('click', display);
