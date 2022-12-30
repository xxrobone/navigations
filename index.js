console.log('always check connection');

// test
const data = {
  code: 42,
  items: [
    {
      id: 1,
      name: 'foo',
    },
    {
      id: 2,
      name: 'bar',
    },
  ],
};

const item_name = data.items[1].name;
console.log(item_name);
console.log(data.items[1]);

const navArr = [
  {
    title: 'home',
    href: '',
    cls: '.nav_item',
  },
  {
    title: 'about',
    href: '',
    cls: '.nav_item',
  },
  {
    title: 'work',
    href: '',
    cls: '.nav_item',
    submenu: [
      { subtitle: 'proj1' },
      { subtitle: 'proj2' },
      { subtitle: 'proj3' },
    ],
  },
  {
    title: 'contact',
    href: '',
    cls: '.nav_item',
  },
];

const sub_title1 = navArr[2].submenu[0].subtitle;
const sub_title2 = navArr[2].submenu[1].subtitle;
const sub_title3 = navArr[2].submenu[2].subtitle;
console.log(`
subtitle 1 = ${sub_title1} \n
subtitle 2 = ${sub_title2} \n
subtitle 3 = ${sub_title3}
`);

let nav_menu = document.querySelector('.nav_menu');

// program to check if an object is an array

function checkObject(arr) {

    // check if arr is array
    const result = Array.isArray(arr);

    if(result) {
        console.log(`[${arr}] is an array.`);
    }
    else {
        console.log(`${arr} is not an array.`);
    }

}

/* if (Array.isArray(navArr) && navArr !== undefined && navArr !== null) { */
navArr.forEach((i) => {
  let li = document.createElement('li');
  li.classList.add('nav_item');
  let a = document.createElement('a');
  a.classList.add('nav_item_link');
  a.innerText = i.title;
  /* trying setting href this way first 
      otherwise have and href in the array*/
  a.href = `./${i.title}`;
  li.append(a);
  nav_menu.append(li);

  // will have to check if object has an array of submenus and then if it does loop thru the menu to get the items.
  // have to figure this out
    console.log(i.hasOwnProperty('submenu'));
});

/* } else {
  console.log('no array found');
} */

function createSubmenu(arr) {
    let submenu = createElement('ul')
    submenu.classList.add('submenu')
    let submenu_item = createElement('li')
    submenu_item.textContent.classList.add('submenu_item') 
    let submenu_item_link = createElement('a')
    sub_menu_item_link.classList.add('submenu_item_link')
    submenu_item_link.textContent = arr.subtitle
}
