
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://api1-xusong.taihe.com/auth/`;
const method = `POST`;
const headers = {
'Cookie' : `JSESSID=712b1ab30727143158DF1747924c672eef50386137`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `api1-xusong.taihe.com`,
'User-Agent' : `VaeHome/2.4.1 (iPhone; iOS 13.5; Scale/2.00)`,
'Accept-Language' : `zh-Hans-CN;q=1`
};
const body = `q=Du4edFQxtrMs2PGGMouKQYPav2RdZHmZZcsBD0/5aWKeLm1B%2BqJ3oEiLm3TKthnJSasxe9Bim1A9qIfJjGli9diTQuT9wHhEcGCFqpQnYpP01iTj/ZvBVtSM6keaFBj/JYHN8jJXrBN/v%2Bgv0v/pyeN5ZIxaEmBxWPyjShhNR%2BYaflyINEfxVKc/rx4uhfAs2PwSnWdUuqNBvCf6Ct0XId7rsCUU4zX9adTTbN1Ij26Z90cGRQ7RIx8q/vueOTqQnpfJ81iQ0PW%2BtQaNkYS2mbF3FbRONyz8lWhqk6jvfPJP91YFAKlZDFn%2BEQ1nDUV3titVAzi6BpMP4uXX8m7BWYLbXDqFCAYiiDsrjrUvK3YuD1OTvnK7tg9%2BdmLrM15aazjSq9VUmFKmP%2BF6NotbD7uddERMlQ8lodWXwhjiARBl%2B0qpBRUZnz%2B1haQ041nNjIAEF1ZYhq4VfpLgQLa7kwjVbZLjjobXb8MICqxleiOX1o88eLGp9Gnkm3LrTwvYT3dr5S3RwGYazreWhlq4gHq9PFNNvQ6wipzxndPtKLu34eRplqEDWelQiJKSBzZEJPiMj4eXLSdOXb5uH7bm85s/TTFUqHcQ2FRIhr1Nwk%2BAny2zeAMVKQ8nygAPwjqtIu5CbKZafU71phU9jBndORyzr16Hk32JLWXE7taPpJuakKLVWa9PZkGbwOt07OzsYb3djhWxM8IGRIDzICxqP714hYeNhaQYDHmFNxS8nKCu257tzOCS29%2BnGd9xscggUcSfG2UsPV1Yn8a73cA84/U3WNhh2E5hgre/jl80bbphN7trHN6/n435gEZ3rrv%2BahopxZgqdQUipQ/FguXanA%3D%3D`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});