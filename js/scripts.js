window.onload = function generateSkillsCloud() {
	var texts = [
	'Angular', 'Bootstrap', 'JavaScript',
	'CSS', 'HTML', 'AJAX',
	'JSON', 'JQuery', 'less',
	'Grunt', 'MySQL', '508 Compliance',
	'REST', 'MVC', 'Github', 
	'SVN', 'SpringBoot', 'npm',
	'TypeScript', 'RxJs',
	];
	var tagCloud = TagCloud('.content', texts,{
	    // radius in px
	    radius: 275,
	    // animation speed
	    // slow, normal, fast
	    maxSpeed: 'slow',
	    initSpeed: 'fast',
	    // 0 = top
	    // 90 = left
	    // 135 = right-bottom
	    direction: 135,
	    // interact with cursor move on mouse out
	    keep: false
	});

	var mybutton = document.getElementById("goToTop");
	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			mybutton.style.display = "block";
		} else {
			mybutton.style.display = "none";
		}
	}
}
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}