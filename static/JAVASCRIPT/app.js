function menuAnimation(x) {
    x.classList.toggle("change");
    var element = document.getElementById("slideNav");
    element.classList.toggle("navSlide");
    var textFade = document.getElementById("sideBarText");
    textFade.classList.toggle("textFadeIn");
    var iconFade = document.getElementById("socialIcons");
    iconFade.classList.toggle("iconFadeIn");
  }


// OUR CARS DROP-DOWN

function addDropdownItems(parentElement, items) {
  items.forEach(item => {
    let a = document.createElement('a');
    a.href = '#';
    a.textContent = item;
    a.classList.add('dropdown-item'); // Apply dropdown item class
    parentElement.querySelector('.dropdown-content').appendChild(a);
  });
}

// Example usage
const dropdownAnchor = document.querySelector('.dropdown');
const dropdownItems = ['OUR CARS', 'CAR DETAIL'];

// Create the dropdown-content div
let dropdownContent = document.createElement('div');
dropdownContent.classList.add('dropdown-content');
dropdownAnchor.appendChild(dropdownContent);

// Add items to the dropdown
addDropdownItems(dropdownAnchor, dropdownItems);














// FEATURES DROP-DOWN

function addDropdownItems1(parentElement, items) {
  items.forEach(item => {
    let a = document.createElement('a');
    a.href = '#';
    a.textContent = item;
    a.classList.add('dropdown-item'); // Apply dropdown item class
    parentElement.querySelector('.dropdown-content').appendChild(a);
  });
}

// Example usage
const dropdownAnchor1 = document.querySelector('.dropdown_Features');
const dropdownItems1 = ['OUR TEAM', 'FAQ', '404 PAGE'];

// Create the dropdown-content div
let dropdownContent1 = document.createElement('div');
dropdownContent1.classList.add('dropdown-content');
dropdownAnchor1.appendChild(dropdownContent1);

// Add items to the dropdown
addDropdownItems(dropdownAnchor1, dropdownItems1);












// BLOG DROP-DOWN
function addDropdownItems2(parentElement, items) {
  items.forEach(item => {
    let a = document.createElement('a');
    a.href = '';
    a.textContent = item;
    a.classList.add('dropdown-item'); // Apply dropdown item class
    parentElement.querySelector('.dropdown-content').appendChild(a);
  });
}

// Example usage
const dropdownAnchor2 = document.querySelector('.dropdown_Blog');
const dropdownItems2 = ['BLOG', 'SINGLE POST'];

// Create the dropdown-content div
let dropdownContent2 = document.createElement('div');
dropdownContent2.classList.add('dropdown-content');
dropdownAnchor2.appendChild(dropdownContent2);

// Add items to the dropdown
addDropdownItems(dropdownAnchor2, dropdownItems2);
