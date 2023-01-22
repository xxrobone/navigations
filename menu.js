let menuBtn = document.querySelector('#hamburger');
let menu = document.querySelector('.menu');
let links = document.querySelectorAll('nav > ul > li');
let nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  console.log('clicked button');
  menuBtn.classList.toggle('active');
  menu.classList.toggle('open');
  /* 
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `liFadeIn 0.3s ease-in forwards ${
        index / 8 + 0.5
      }s`;
    }
  }); */
});

if (window.innerWidth > 768) {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
      nav.style.top = '60px';
    } else {
      nav.style.top = '0px';
    }

    prevScrollpos = currentScrollpos;
  };
}

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
    title: 'projects',
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

Object.defineProperty(navArr, 'push', {
  configurable: true,
  enumerable: false,
  writable: true,

  value: function (...args) {
    let result = Array.prototype.push.apply(this, args);
    changeNavData();
    console.log(result);
    return result; // Original push() implementation
  },
});

Object.defineProperty(navArr, 'pop', {
  configurable: true,
  enumerable: false,
  writable: true,

  value: function () {
    Array.prototype.pop();

    changeNavData();
  },
});

function createNav(navArr) {
  if (Array.isArray(navArr) && navArr !== undefined && navArr !== null) {
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
        /*  subArr.forEach((j) => {
          console.log(j.subtitle);
        }); */
      }
      if (i.hasOwnProperty('submenu')) {
        /*  console.log('has submenu'); */

        /* Im testing to do it this way first, my function dont work right now and my brain dosent either, so it feels */

        i.submenu.forEach((j) => {
          /*  console.log('from nested array for submenu ' + j.subtitle); */
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
      menu.append(li);
    });
  } else {
    console.log('no array found');
  }
}

createNav(navArr);

function removeNavHTML() {
  menu.innerHTML = '';
}

function changeNavData() {
  console.log('changes has been made');
  removeNavHTML();
  createNav(navArr);
}
