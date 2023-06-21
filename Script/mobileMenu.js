const hamburgerButton = document.querySelector('#mobileMenuBtn');
function removeMenu() {
  const menu = document.querySelector('.mobileMenuDiv');
  menu.remove();
  document.body.style.overflow = 'auto';
}
function addListItem(menuList, listText, gotToSection) {
  const listItem = document.createElement('li');
  listItem.classList.add('mobileMenulistItem');
  const listItemAnchor = document.createElement('a');
  listItemAnchor.classList.add('mobileMenulistItemAnchor');
  const text = document.createTextNode(listText);
  listItem.addEventListener('click', removeMenu);
  listItemAnchor.href = gotToSection;
  listItemAnchor.appendChild(text);
  listItem.appendChild(listItemAnchor);
  menuList.appendChild(listItem);
}
function createMenuElements(menu) {
  const mobileExitButton = document.createElement('button');
  mobileExitButton.classList.add('mobileExitButton');
  mobileExitButton.addEventListener('click', removeMenu);
  const menuList = document.createElement('ul');
  menuList.classList.add('mobileMenuList');
  addListItem(menuList, 'Portfolio', '#newWorkSection');
  addListItem(menuList, 'About', '#about');
  addListItem(menuList, 'Contact', '#contact');
  menu.appendChild(mobileExitButton);
  menu.appendChild(menuList);
}
function display() {
  document.body.style.overflow = 'hidden';
  const menu = document.createElement('div');
  menu.classList.add('mobileMenuDiv');
  document.body.appendChild(menu);
  createMenuElements(menu);
}
hamburgerButton.addEventListener('click', display);
