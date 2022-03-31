jQuery(document).ready(function () {
	$('.js-toggle-theme').on('click', function () {
		$(this).toggleClass('header__theme-toggle--dark-mode');
		$('.body').toggleClass('body__light-mode');
	});

	$('.js-tab-option').on('click', function () {
		let option = $(this).attr('data-id');

		$(this).parent().find('.multi-code__option').removeClass('multi-code__option--selected');
		$(this).addClass('multi-code__option--selected');
		$(this).parent().parent().find('.multi-code__pane').removeClass('multi-code__pane--selected');
		$(this).parent().parent().find('.multi-code__pane[data-pane=' + option + ']').addClass('multi-code__pane--selected');
	});

	$('.js-social-dropdown-trigger').on('click', function () {
		$(this).parent().find('.js-social-dropdown').toggleClass('social-links--closed');
	});
});