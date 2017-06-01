
// Transformção dos dados de entradas em xml.
function dadosXml() {
    var nome = document.atendimento.nome.value;
	var email = document.atendimento.email.value;
	var telefone = document.atendimento.telefone.value;
	var departamento = document.atendimento.departamento.value;
	var mensagem = document.atendimento.mensagem.value;

	//var data = Date

	var xml = '';

	xml =  '<chamado>\n'
	xml += '  <nome>' + nome + ' </nome>\n';
	xml += '  <email>' + email + ' </email>\n';
	xml += '  <telefone>' + telefone + ' </telefone>\n';
	xml += '  <departamento>' + departamento + ' </departamento>\n';
	xml += '  <mensagem>' + mensagem + ' </mensagem>\n';
	xml += '</chamado>';
	
	download('chamado.xml', xml);          
}

// Faz o download do arquivo no formato xml.
function download(filename, text) {
	var element = document.createElement('a');

	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}