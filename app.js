var typed = new Typed(".auto_type", {
    strings: ["<b><i>Web Developer</i></b>", "I turn ideas into beautiful <b><i>websites</i></b>"],
    typeSpeed: 50,
    backSpeed: 45,
    loop: true
});


function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display ='flex';

}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display ='none';
}
