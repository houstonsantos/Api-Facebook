
// Transformção dos dados de entradas em xml.
function dadosXml() {
    var nome = document.atendimento.nome.value;
	var email = document.atendimento.email.value;
	var telefone = document.atendimento.telefone.value;
	var departamento = document.atendimento.departamento.value;
	var mensagem = document.atendimento.mensagem.value;

	//var data = Date

	var xml = '';
	
	xml = '<?xml version="1.0" encoding="UTF-8"?>'
	xml += '<tns:chamado xmlns:tns="http://sistemafgweb.com.br:8080/arq" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://sistemafgweb.com.br:8080/arq/fg.xsd">'
	xml += '<tns:nome>tns:' + nome + '</tns:nome>'
	xml += '<tns:email>tns:' + email + '</tns:email>'
	xml += '<tns:telefone>' + telefone +'</tns:telefone>'
	xml += '<tns:departamento>tns:' + departamento + '</tns:departamento>'
	xml += '<tns:mensagem>tns:' + mensagem + '</tns:mensagem>'
	xml += '</tns:chamado>';

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