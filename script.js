var scroll_Y = scrollY;
var scroll_X = scrollX;
var scroll_Height = document.body.scrollHeight;

function onLoad() {
    if (scroll_Y < 50) {
        scrollToBottom();
    }
}

function scrollToBottom() {
    setInterval(() => {
        setInterval(() => {
            scroll_Y = scroll_Y + 4;
            if (scroll_Y < scroll_Height) {
                window.scrollTo(scroll_X, scroll_Y);
            } else {
                clearInterval(scrollToBottom);
            }
        }, 10);
    }, 500);
}

function dpHover() {
    document.querySelector(".designer-text").classList.add("blur");
    document.querySelector(".designer-stroke").classList.add("blur");
    document.querySelector(".developer-text").classList.add("blur");

    document.querySelector(".comment1-img").classList.add("comment-hover");
    document.querySelector(".comment1-txt").classList.add("comment-hover");

    document.querySelector(".comment2-img").classList.add("comment-hover");
    document.querySelector(".comment2-txt").classList.add("comment-hover");

}

function dpLeave() {
    document.querySelector(".designer-text").classList.remove("blur");
    document.querySelector(".designer-stroke").classList.remove("blur");
    document.querySelector(".developer-text").classList.remove("blur");

    document.querySelector(".comment2-img").classList.remove("comment-hover");
    document.querySelector(".comment2-txt").classList.remove("comment-hover");

    document.querySelector(".comment1-img").classList.remove("comment-hover");
    document.querySelector(".comment1-txt").classList.remove("comment-hover");

}

function designerHover() {
    document.querySelector(".dp-img").classList.add("blur");
    document.querySelector(".developer-text").classList.add("blur");
}

function designerLeave() {
    document.querySelector(".dp-img").classList.remove("blur");
    document.querySelector(".developer-text").classList.remove("blur");
}


function developerHover() {
    document.querySelector(".dp-img").classList.add("blur");
    document.querySelector(".designer-stroke").classList.add("blur");
    document.querySelector(".designer-text").classList.add("blur");
}

function developerLeave() {
    document.querySelector(".dp-img").classList.remove("blur");
    document.querySelector(".designer-stroke").classList.remove("blur");
    document.querySelector(".designer-text").classList.remove("blur");
}

function btn(reDirect) {
    window.location.href = reDirect;
}


// const move = document.getElementById("move");

// document.body.onpointermove = event => {
//     const { clientX, clientY } = event;

//     move.animate({
//         left: `${clientX}px`,
//         top: `${clientY}px`

//     }, {duration: 1000, fill: "forwards"})

// }

document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.body.style.pointerEvents = "none";
    } else {
        setTimeout(() => {
            document.querySelector(".loader-div").classList.add('hidden');
            document.body.style.pointerEvents = "all";
        }, 1500);
    }
};
