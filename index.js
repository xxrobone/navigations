console.log('always check connection');

let navArr = [
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
  },
  {
    title: 'contact',
    href: '',
    cls: '.nav_item',
  },
];

let nav_menu = document.querySelector('.nav_menu');

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
});
