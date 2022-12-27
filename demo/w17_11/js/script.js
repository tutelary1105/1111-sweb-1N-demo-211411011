function change(index) {

    const p = document.querySelector('.show-classdemo');
    console.log('p', p);

    switch(index) {
        case 1:
            p.innerHTML = `<iframe src="../../../demo/w01_11/index.html" width="100%" height="100%" />`
            break;
        case 2:
            p.innerHTML = `<iframe src="../../../demo/w02_11/card_11.html" width="100%" height="100%" />`
            break;
        case 3:
            p.innerHTML = `<iframe src="../../../demo/w04_11/blog_11.html" width="100%" height="100%" />`
            break;
        case 4:
            p.innerHTML = `<iframe src="../../../demo/w06_11/blog_11.html" width="100%" height="100%" />`
            break;
        case 5:
            p.innerHTML = `<iframe src="../../../demo/w10_11/multipage_11.html" width="100%" height="100%" />`
            break;
        case 6:
            p.innerHTML = `<iframe src="../../../demo/w16_11_portfolio/portfolio/index.html" width="100%" height="100%" />`
            break;
        case 7:
            p.innerHTML = `<iframe src="./works/works.html" width="100%" height="100%" />`
            break;
        case 8:
            p.innerHTML = `<iframe src="./resume/resume.html" width="100%" height="100%" />`
            break;
        case 9:
            p.innerHTML = `<iframe src="./learning/learn_11.html" width="100%" height="100%" />`
            break;
    }

}

const navbar = document.querySelector('#navbar')

//add fixed class to navbar

window.addEventListener('scroll', function () {

    if (window.pageYOffset > 100) {
        navbar.classList.add('navbar-fixed');
    } else {
        navbar.classList.remove('navbar-fixed');
    }
});