$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list__item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_list__item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_list__item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		//==========OCULTANDO PRODUCTOS =======
		$('.products-list__item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.products-list__item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.products-list__item[category="'+catProduct+'"]').show();
			$('.products-list__item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_list__item[category="all"]').click(function(){
		function showAll(){
			$('.products-list__item').show();
			$('.products-list__item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});