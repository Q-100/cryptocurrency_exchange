//localStorage.setItem("KRW", 100000);
//localStorage.setItem("BTC", 0);
//localStorage.setItem("ask_bid", 0);
//localStorage.setItem("ask_price", 0);
let KRW_cur = localStorage.getItem("KRW");
let BTC_cur = localStorage.getItem("BTC");
console.log("현재 보유 KRW : ", KRW_cur);


function order_coin(all_price, buy_price) {
    let cur_price = document.getElementById("t14_price").innerText; // 현재가
    if (parseInt(KRW_cur) < parseInt(all_price)) {
        alert("잔액이 부족합니다.");
    }
    else {
        localStorage.setItem("ask_price", buy_price);
        if (parseInt(buy_price) >= parseInt(cur_price)) {
            let BTC_tmp = parseInt(all_price) / parseInt(cur_price); // 현재가보다 높은 가격을 호가하면 현재가에 사짐
            BTC_tmp = parseFloat(BTC_tmp) + parseFloat(localStorage.getItem("BTC"));
            BTC_tmp.toFixed(5);// 비트코인 자릿수 수정할 것
            let KRW_tmp = parseInt(localStorage.getItem("KRW")) - parseInt(all_price);
            localStorage.setItem("BTC", BTC_tmp);
            localStorage.setItem("KRW", KRW_tmp);
            alert(parseInt(all_price) / parseInt(buy_price) + "개의 BTC를 구입하였습니다.(개당" + cur_price + "원)");
            localStorage.setItem("ask_price", -1); // 구매되었으니 매수주문 삭제
            localStorage.setItem("my_average_price", cur_price); // 구매 가격
            let my_coin = document.getElementById("my_btc");
            my_coin.innerText = localStorage.getItem("BTC") + "BTC"; // 현재 코인갯수

        }
        else {
            alert();
        }
    }
}