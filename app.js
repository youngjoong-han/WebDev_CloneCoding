//alert("hi");
//document.title = "Hello! From JS";

//const title = document.getElementById("title");
//console.dir(title);
//title.innerText = "Got you!";

/// Use hello class
//const hellos = document.getElementsByClassName("hello");
/// 같은 className을 갖는 element를 찾아 array(collections of elements)에 저장
//console.log(hellos);


/// Use Tag
/// Tag는 anchor, div, section, button 같은 것들을 의미
//const title = document.getElementsByTagName("h1");
//console.log(title);


/// querySelector , querySelectorAll
/// querySelector는 element를 CSS 방식으로 검색
/// 단 하나의 element를 return
/// 같은 것이 복수 있는 경우, 가장 처음 element return
/// 같은 것 복수 검색은 querySelectorAll을 사용. array로 return
//const title = document.querySelector(".hello h1"); // -> CSS Selector
//console.log(title);


/// document.querySelector("#hello");
/// document.getElementById("hello"); 두 api 같은 것을 수행. #은 id를 의미.


/// Style 변경
//const title = document.querySelector("div.hello:first-child h1");
//title.style.color = "blue";

/// Click Event Listen
const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     console.log("title was clicked!");
//     h1.style.color = "blue";
// }
// function handleMouseEnter(){
//     h1.innerText = "Mouse is here!";
// }
// function handleMouseLeave(){
//     h1.innerText = "Mouse is gone!";
// }
// h1.addEventListener("click", handleTitleClick); // = title.onclick = handleTitleClick;
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

/// Window Event
// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy(){
//     alert("copier!");
// }
// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);

/// CSS
function handleTitleClick(){
    h1.classList.toggle("active");

    /// toggle 구현되어있는 형태
    // if(h1.classList.contains(clickedClass))
    //     h1.classList.remove(clickedClass);
    // else
    //     h1.classList.add(clickedClass);
}
h1.addEventListener("click", handleTitleClick);

