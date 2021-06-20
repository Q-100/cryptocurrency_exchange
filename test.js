
// // fetch('https://api.upbit.com/v1/ticker?markets=KRW-XRP', options)
// //     .then(response => response.json())
// //     .then(response => console.log(response))
// //     .catch(err => console.error(err));

// // fetch('https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=1', options)
// //     .then(res => res.json())
// //     .then(json => console.log(json))
// //     .catch(err => console.error('error:' + err));

const url = 'https://api.upbit.com/v1/orderbook?markets=KRW-BTC';
const options = { method: 'GET', headers: { Accept: 'application/json' } };

fetch(url, options)
    .then(res => res.json())
    .then(json => print_table(json))
    .catch(err => console.error('error:' + err));


// const url = 'https://api.bithumb.com/public/orderbook/BTC_KRW';
// fetch(url, options, { credentials: "include" })
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.error('error:' + err));
