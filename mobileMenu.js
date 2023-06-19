const hamburgerButton = document.querySelector('#mobileMenuBtn');
function removeMenu() {
  const menu = document.querySelector('.mobileMenuDiv');
  menu.remove();
}
function addListItem(menuList, listText, gotToSection) {
  const listItem = document.createElement('li');
  const listItemAnchor = document.createElement('a')
  const text = document.createTextNode(listText);
  listItem.classList.add('mobileMenulistItem');
  listItem.addEventListener('click', removeMenu);
  listItemAnchor.href = gotToSection;
  listItemAnchor.appendChild(text)
  listItem.appendChild(listItemAnchor);
  menuList.appendChild(listItem);
}
function createMenuElements(menu) {
  const mobileExitButton = document.createElement('button')
  mobileExitButton.classList.add('mobileExitButton')
  const menuList = document.createElement('ul');
  menuList.classList.add('mobileMenuList');
  addListItem(menuList, 'Portfolio', '#myWorks');
  addListItem(menuList, 'About', '#about');
  addListItem(menuList, 'Contact', '#contact');
  menu.appendChild(mobileExitButton);
  menu.appendChild(menuList);
}
function display() {
  const menu = document.createElement('div');
  menu.classList.add('mobileMenuDiv');
  document.body.appendChild(menu);
  createMenuElements(menu);
}
hamburgerButton.addEventListener('click', display);
