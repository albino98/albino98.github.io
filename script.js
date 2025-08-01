const body = document.body;
const btnTheme = document.getElementById('btn-theme');

const addThemeClass = (bodyClass) => {
  body.classList.add(bodyClass);
};

const getBodyTheme = localStorage.getItem('portfolio-theme');

if (getBodyTheme) {
  addThemeClass(getBodyTheme);
}

const isDark = () => body.classList.contains('dark');

const setTheme = (bodyClass) => {
  const previousTheme = localStorage.getItem('portfolio-theme');
  if (previousTheme) body.classList.remove(previousTheme);

  body.classList.add(bodyClass);
  localStorage.setItem('portfolio-theme', bodyClass);
};

const toggleTheme = () =>
  isDark() ? setTheme('light') : setTheme('dark');

btnTheme.addEventListener('click', toggleTheme);

const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}

btnHamburger.addEventListener('click', displayList)

const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)
