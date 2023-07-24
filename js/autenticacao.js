
const login = JSON.parse(localStorage.getItem( 'login'));

if(!(login)){
    goTo('login/aviso')
}