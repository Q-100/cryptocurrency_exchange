var socket = new WebSocket("wss://pubwss.bithumb.com/pub/ws");
const url = 'https://api.upbit.com/v1/orderbook?markets=KRW-BTC';
const options = { method: 'GET', headers: { Accept: 'application/json' } };
// 웹소켓 연결 해제
function closeWS() {
	if (socket != undefined) {
		console.log("closing requested");
		socket.close();
		socket = undefined;
	}
}

// 웹소켓 요청
function filterRequest(filter) {
	if (socket == undefined) {
		alert('no connect exists');
		console.log("error");
		return;
	}
	socket.send(filter);
}

function test() {
	socket.onopen = function (e) {
		filterRequest('{"type":"transaction","symbols":["BTC_KRW"]}');
	};
	socket.onmessage = function (e) {
		fetch(url, options)
			.then(res => res.json())
			.then(json => gap_calc(json, e.data))
			.catch(err => console.error('error:' + err));
	};
	setTimeout(function () {
		closeWS();
	}, 50000);

}
test();