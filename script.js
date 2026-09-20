const navigationLinks = document.querySelectorAll('.nav a[href^="#"]');

navigationLinks.forEach((link) => {
	link.addEventListener('click', () => {
		navigationLinks.forEach((item) => item.classList.remove('active'));
		link.classList.add('active');
	});
});

const sections = document.querySelectorAll('main section[id]');

const sectionObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) return;

		const currentLink = document.querySelector(`.nav a[href="#${entry.target.id}"]`);
		if (!currentLink) return;

		navigationLinks.forEach((link) => link.classList.remove('active'));
		currentLink.classList.add('active');
	});
}, { rootMargin: '-25% 0px -60% 0px' });

sections.forEach((section) => sectionObserver.observe(section));
