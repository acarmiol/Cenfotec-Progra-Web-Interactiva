angular.factory('xml.services', [])
.factory('$exchangerate', function  ($http) {
	var compra,
	venta;
	function getExchangeRate (type) {
			if (type = 'compra') {
				url = 'indicadoreseconomicos.bccr.fi.cr/indicadoreseconomicos/WebServices/wsIndicadoresEconomicos.asmx/ObtenerIndicadoresEconomicosXML?tcIndicador=317&tcFechaInicio=07/12/2015&tcFechaFinal=07/12/2015&tcNombre=Cenfotec&tnSubNiveles=No
';
			}else{
				url = 'indicadoreseconomicos.bccr.fi.cr/indicadoreseconomicos/WebServices/wsIndicadoresEconomicos.asmx/ObtenerIndicadoresEconomicosXML?tcIndicador=318&tcFechaInicio=07/12/2015&tcFechaFinal=07/12/2015&tcNombre=Cenfotec&tnSubNiveles=No
';
			};
			$http(url).then(function(data){
				console.log(data);
			}, function  (error) {
				console.error(error);
			})
	};
	getExchangeRate('compra');
	getExchangeRate('venta')
	return {
		compra: compra,
		venta: venta

	};
});