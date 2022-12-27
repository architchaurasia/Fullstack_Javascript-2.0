function URL(url, domain){
    let connection = 'https://';
    let result = connection + url + domain;
    return result;
}

let web = URL('spotify', '.com');

console.log(web);