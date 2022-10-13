// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

//Mine:
function domainName(url){
    if(url.includes('www.')){
       return url.substring((url.indexOf('.')+1),(url.indexOf('.',(url.indexOf('.')+1))))
    }else if(url.includes('//')){
        return url.substring((url.indexOf('/')+2),(url.indexOf('.',(url.indexOf('/')+2))))
    }else {
        return url.substring(0, url.indexOf('.'))
    }
}

// Top Solution:
function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };

// //Test:
console.log(domainName("https://youtube.com"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("http://www.zombie-bites.com"))
console.log(domainName('rvscqid.jp/users'))