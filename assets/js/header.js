const btn = document.querySelector("#btnmenu");
const menu = document.querySelector("#hs");
const xmenu = document.querySelector("#xmenu");

const btnadmin = document.querySelector("#btnmenuadmin")
const menuadmin = document.querySelector("#hd")
const xmenuadmin = document.querySelector("#xmenuadmin");

if(btn){
  btn.addEventListener("click", () => {
      menu.classList.add("header-search__search");
      menu.classList.remove("header-search__search--hide");
  });
  xmenu.addEventListener("click", () => {
    menu.classList.add("header-search__search--hide");
    menu.classList.remove("header-search__search");
  });
}else{  
  btnadmin.addEventListener("click", () => {
  menuadmin.classList.add("header-search__search--admin");
  menuadmin.classList.remove("header-search__search--admin--hide");
  })
  xmenuadmin.addEventListener("click", () => {
  menuadmin.classList.add("header-search__search--admin--hide");
  menuadmin.classList.remove("header-search__search--admin");
  })
}





/* const fun = () => {
    menu.classList.add('header-search__search');
    menu.classList.remove('header-search__search--hide');
  }*/