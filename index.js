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

/* if (Array.isArray(navArr) && navArr !== undefined && navArr !== null) { */
navArr.forEach((i) => {
  let subArr = [];
  let submenu = document.createElement('ul');
  submenu.classList.add('submenu');

  let li = document.createElement('li');
  li.classList.add('nav_item');
  let a = document.createElement('a');
  a.classList.add('nav_item_link');
  a.innerText = i.title;
  a.href = `./${i.title}.html`;
  /* trying setting href this way first 
    otherwise have and href in the array*/
  // will have to check if object has an array of submenus and then if it does loop thru the menu to get the items.
  // have to figure this out
  console.log(i.hasOwnProperty('submenu'));
  if ('submenu' in i) {
    subArr = Array.from(i.submenu);
    subArr.forEach((j) => {
      console.log(j.subtitle);
    });
  }
  if (i.hasOwnProperty('submenu')) {
    console.log('has submenu');

    /* Im testing to do it this way first, my function dont work right now and my brain dosent either, so it feels */

    i.submenu.forEach((j) => {
      console.log('from nested array for submenu ' + j.subtitle);
      // creating submenu item - li
      let submenu_item = document.createElement('li');
      submenu_item.classList.add('submenu_item');

      // creating submenu item link - a
      let submenu_item_link = document.createElement('a');
      submenu_item_link.classList.add('submenu_item_link');
      submenu_item_link.textContent = j.subtitle;
      submenu_item_link.href = `./${j.subtitle}.html`;
      submenu_item.append(submenu_item_link);
      submenu.append(submenu_item);
      li.append(a, submenu);
    });
  } else {
    li.append(a);
  }
  nav_menu.append(li);
});

/* } else {
  console.log('no array found');
} */
/* 
function createSubmenu(arr) {
  
  let submenu = document.createElement('ul');
  submenu.classList.add('submenu');

  arr.forEach((j) => {
    console.log('this is from createSubmenu func ' + j.subtitle);
   
    let submenu_item = document.createElement('li');
    submenu_item.classList.add('submenu_item');

    
    let submenu_item_link = document.createElement('a');
    submenu_item_link.classList.add('submenu_item_link');
    submenu_item_link.textContent = j.subtitle;
    submenu_item.append(submenu_item_link);

    submenu.append(submenu_item);
    console.log(
      'this is submenu ' +
        submenu +
        'submenulist : ' +
        submenu_item +
        'sub link : ' +
        submenu_item_link.textContent
    );
    return submenu;
  });
} */

// function to check if an object is an array

function checkObject(arr) {
  const result = Array.isArray(arr);

  if (result) {
    console.log(`[${arr}] is an array.`);
  } else {
    console.log(`${arr} is not an array.`);
  }
}
