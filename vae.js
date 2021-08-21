
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
'User-Agent' : `VaeHome/2.5.1 (iPhone; iOS 13.5; Scale/2.00)`,
'Accept-Language' : `zh-Hans-CN;q=1`
};
const body = `q=821G1tnPpcsGmHJNexU4hLkabeyz4V04fAjUT0QYETxUe2/iMeOBaGJ/yTiuOamZZSVzrWAiPQmD38bssDSCSXL/ICFaHJ0n5gj0KGmenhbV8a9P5MBE3P0e1kI/hKZaz5BUwvTWkeLNAkuiDcCSf8bszCAsB/y/nIoCYLrYxjlKYlzblvyPCLcYDO8gCTslgzyBbpeSGw/5Vxww9eD%2BJHw9ml%2Bejw20f2/kgVchiPpVoKBIsXfrzBHjfHqEUufnMRkHZF6nK58GsFa/EXbUE3KHCTxwVzh%2BMW8Zh0fN4eV4fNNypbWV6UCXUzWUUfASodvBWBm9IBqIceBRzH1BxqJKnYnQe5/aqwC/gp6VVYO/yfJyJ93gD7ow1Wk9HqGnuda9r%2BePs9qVToQk%2BWxAKwaStC0Sv%2BGFoJT46v0qOL9SWoxqs0ekg0uFrA9vqFx9ju3WJp1HqNhohiEO14bOsb3mQbVTqwcBLADFMhW/Kb7eA0Lv1c%2B3Sdab5etf7iWBINZq2O/jyDpSWFqWnE/RBXs/EJSzEX6Ri4IKzJg8UBvm487RMWEiBiemywuQEnV3dKf1Q%2B4rNi2K/3JWoXO3We5Oekvnvc9f1ZMYsFhyZikfKDOUs7ty8ys2ZZX9k268E3kohxUQDMctSund1pe1I%2BgnwOgG%2Be76zFCdFlC5MZ8pSvEUehokRJGHayuB1PR/b4EwMlZ7qzTD%2Bp4tvA1YgYYxAcalANVvC0qJUw9GYjHRB0r3cXxsQPEKZ74l%2BqyrB/d2VMjHiW8GqfSqxHVCnDt3p/aTjZaWDmR/UqMZMKTnQSIxT7wVuyb87iQFvYJeJIB112haoPbIxsWaW1dgMQ%3D%3D`;

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
