'use strict';

// Carrega API do Facebook
/*FB.init({
    appId  : '1325800984199647',
	status : true, // verifica status do login
	cookie : true, // habilita cookies para permitir acesso via servidor
	xfbml  : true  // habilita parser XFBML
});*/

// 
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        /*js.src = "//connect.facebook.net/en_US/sdk.js";*/
        js.src = "//connect.facebook.net/pt_BR/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//
window.fbAsyncInit = function() {
    FB.init({
        appId    : '1325800984199647',
        cookie   : true,  
        //status : true,                           
        xfbml    : true,  
        version  : 'v2.8' 
    });
    
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
};

//
function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

//
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
        sistemafgweb();
    } else if (response.status === 'not_authorized'){
        console.log('A pessoa está conectada ao Facebook, mas não se conectou ao seu aplicativo');
    } else if (response.status === 'unknown') {
        console.log('A pessoa não está conectada ao Facebook');
    } else {
        document.getElementById('status').innerHTML = 'Please log into this app.';
    }
}
   
//
function sistemafgweb() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', {fields: 'name, email'}, function(response) {
        console.log('Successful login for: ' + response.name);
        console.log(JSON.stringify(response));
        document.getElementById('inputName').value = response.name;
        document.getElementById('inputEmail').value = response.email;
        document.getElementById('enviar').disabled = false;      
        //document.getElementById('inputName').innerHTML = response.name;
        //document.getElementById('inputEmail').innerHTML = response.email;
        //document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';
    });
}

//
function refresh() {
    location.reload();
    console.log('passou refresh');
}