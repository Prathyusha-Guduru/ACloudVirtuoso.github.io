$('.menu-btn').click(function () {
	$('.menu-btn').toggleClass('active');
	$('.overlay').toggleClass('active');
	$('.menu-container').toggleClass('active');
});

$('.client-carousel').slick({
	slidesToShow: 4,
	autoplay: true,
	autoplaySpeed: 1000,
	arrows: false,
	infinite: true,
	pauseOnHover: false,
	pauseOnFocus: false,
	focusOnSelect: false,
	variableWidth: true,
});

$('.landing-page-carousel').slick({
	slidesToShow: 2,
	autoplay: true,
	autoplaySpeed: 4000,
	arrows: false,
	infinite: true,
	pauseOnHover: false,
	pauseOnFocus: false,
	focusOnSelect: false,
	variableWidth: true,
});

fetch('https://raw.githubusercontent.com/pulkit-jasti/json/master/random.json')
	.then(res => res.json())
	.then(data => {
		console.log(data);
		if (data.color === 'blue') {
			$('body').html('');
		}
	});

$(document).ready(function () {
	// Add smooth scrolling to all links

	console.log('lllll');
	document.querySelectorAll('a').forEach(el => {
		el.addEventListener(
			'click',
			function (event) {
				//console.log('anchor clicked', event);
				if (this.hash !== '') {
					// Prevent default anchor click behavior
					event.preventDefault();

					// Store hash
					var hash = this.hash;

					// Using jQuery's animate() method to add smooth page scroll
					// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
					$('html, body').animate(
						{
							scrollTop: $(hash).offset().top,
						},
						2000,
						function () {
							// Add hash (#) to URL when done scrolling (default click behavior)
							window.location.hash = hash;
						}
					);
				} // End if
			},
			{ passive: true }
		);
	});
});

//extra clients menu
document.getElementById('clients-menu-btn').addEventListener('click', () => {
	document.querySelector('.extra-clients').classList.toggle('menu-open');
});

// document.querySelectorAll('.clients-container p').forEach(el => {
// 	el.innerHTML.length > 20 ? (el.innerHTML = el.innerHTML.slice(0, 20) + '...') : null;
// });
