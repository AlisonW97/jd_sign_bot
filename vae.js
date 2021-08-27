
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://api1-xusong.taihe.com/auth/`;
const method = `POST`;
const headers = {
'Cookie' : `JSESSID=895c1f2d8f37988658DF13110c5cfd5a3823f70a02`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `api1-xusong.taihe.com`,
'User-Agent' : `VaeHome/2.5.1 (iPhone; iOS 13.5; Scale/2.00)`,
'Accept-Language' : `zh-Hans-FR;q=1`
};
const body = `q=mPgC6dQGLdxrC70y%2B%2BMIMEzCwcJ5RJEXTV%2BWSNz/6%2Bg2WlzcmOLknTpKBgeMkVdn%2BpoXYEQUM4x%2BDqJcQ8BSw4TqYCk58C1m4pQx7i7kOF8QpJJQFmTkoCx/yVkvdFpO1A%2BTffQ0GIs0Mwy4S9HPmEUbwXaq4M2nIPnAwWKHcpKbUTZ6spLD090TKhfnrgOlAN6wVLZ%2BmEcF8SYx5MM1LZ/3puhmVcCHfoCT6AIf0WxiKpF/ct1gIbdoviZvTd0PNa%2BbT/LVFuVDEhxFWpDYZti3J0hkwEADQcZUpBLt0%2BJv4ARfM77oM6xKe7oDEQqLIJ4UICmBElDY0MUsUvcDUYdFxyYbaHo1hLzaw2MJPM5wmN7a29URi8Kh5o4vRGWP9In%2Bag5b2c9By6%2BLLGPVmP4knZw%2Bp1VQQWW/XhjsrxrpeFnGLIqWnRTnH7r3%2BfT5HzWwZuufY7XroEGqYfu6aZnmQk83fYyAOTg0MD2gi7eAD7pPD8AWKhpc6cigvobiTvVLapRPlKvsHl5DmOQv3Aq6Y6yXK7nHqHvNuy%2BTEtsieZPZHoemfpHI4b47pJcGE9R%2Bwn8iuVJIZt3cKWa5gy1scisO4F0TqqouBx%2BT7KKt5CRbSPELssaf%2BdoQhK5iXRbdowUfEkoWG4u%2BLG26Q3exNogeDERwiz61l%2BIOz98Sn24trMNe9qgYD9FbRKIcrbLrJbIvXqj/YAB%2Bfs1MhLEHcNCgmOeKEuXQWNvHSZPW0UGqOJnIZTIvY037wegcsrWEJMC/%2BSzd9K%2Bi7DNj3tKUV2fIH658cgvbo%2B/Zv6uNubZDg1KwQlXPdYbYitjQ/Cu4QKzvmPXoouv847PNqw%3D%3D`;

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
