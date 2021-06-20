localStorage.setItem("KRW", 100000);
let KRW = localStorage.getItem("KRW");
let BTC = localStorage.getItem("BTC");
console.log("현재 보유 KRW : ", KRW);

function order_coin(all_price, buy_price) {
    console.log(KRW, BTC);
    console.log("주문 총액 : ", all_price, "주문가격:", buy_price);
    if (KRW < all_price) {
        alert("잔액이 부족합니다.");
    }
    else {
        let BTC_tmp = all_price / buy_price;
        BTC_tmp.toFixed(5);
        localStorage.setItem("BTC", BTC + BTC_tmp);
        localStorage.setItem("KRW", KRW - all_price);
        alert(BTC_tmp + "개의 BTC를 구입하였습니다.")
    }
}