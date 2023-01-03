console.log('always check connection');

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

// so to listen for more changes, I have to create an function that listens to alla and then create functions that is called on depending on what changes is made
/* 
function listenToAllArrayChanges(arr, callback){
 ['pop','push','reverse','shift','unshift','splice','sort'].forEach((m)=>{
     arr[m] = function(){
                  var res = Array.prototype[m].apply(arr, arguments);  // call normal behaviour
                  callback.apply(arr, arguments);  // finally call the callback supplied
                  return res;
              }
 });
}

listenChangesinArray(navArr, call)

*/

Object.defineProperty(navArr, 'push', {
  configurable: true,
  enumerable: false,
  writable: true, // Previous values based on Object.getOwnPropertyDescriptor(Array.prototype, "push")
  value: function (...args) {
    let result = Array.prototype.push.apply(this, args); // Original push() implementation based on https://github.com/vuejs/vue/blob/f2b476d4f4f685d84b4957e6c805740597945cde/src/core/observer/array.js and https://github.com/vuejs/vue/blob/daed1e73557d57df244ad8d46c9afff7208c9a2d/src/core/util/lang.js

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

/* my testing example

navArr.push({title: 'new 2', href: '', cls: '.nav_item', submenu: [{subtitle: 'proj4'}, {subtitle: 'proj5'}]}) 

*/

/* 
let arr = navArr;
let _push = arr.push;
arr.push = function () {
  for (var n in arguments) {
    console.log(arguments[n]);
  }
  console.log('pushing new arguments');
  funcToExecute();
  return _push.apply(this, arguments);
}; */

let navMenu = document.querySelector('.nav_menu');

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
      navMenu.append(li);
    });
  } else {
    console.log('no array found');
  }
}

createNav(navArr);

function removeNavHTML() {
  navMenu.innerHTML = '';
}

function changeNavData() {
  console.log('changes has been made');
  removeNavHTML();
  createNav(navArr);
}

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
/* 
function checkObject(arr) {
  const result = Array.isArray(arr);

  if (result) {
    console.log(`[${arr}] is an array.`);
  } else {
    console.log(`${arr} is not an array.`);
  }
}
 */
