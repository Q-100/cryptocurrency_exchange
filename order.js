//localStorage.setItem("KRW", 100000);
//localStorage.setItem("BTC", 0);
//localStorage.setItem("ask_bid", 0);
//localStorage.setItem("ask_price", 0);
let BTC_cur = localStorage.getItem("BTC");

function order_coin(all_price) {
    let cur_price = document.getElementById("t14_price").innerText; // 현재가
    let KRW_cur = localStorage.getItem("KRW");


    //console.log(all_price, buy_price, amount);
    if (all_price == 0) {
        alert("0원 이상 금액을 적어주세요.");
    }
    else if (parseInt(KRW_cur) < parseInt(all_price)) {
        alert("잔액이 부족합니다.");
    }
    else {
        //localStorage.setItem("ask_price", buy_price);
        let BTC_tmp = (parseInt(all_price) / parseInt(cur_price));// 현재가보다 높은 가격을 호가하면 현재가에 사짐
        BTC_tmp = Math.round(BTC_tmp * 100000000) / 100000000;
        let BTC_tmp1 = BTC_tmp;

        BTC_tmp = BTC_tmp1 + parseFloat(localStorage.getItem("BTC"));
        let average_price_tmp = parseInt(localStorage.getItem("my_average_price")) * parseFloat(localStorage.getItem("BTC"));
        average_price_tmp = (average_price_tmp + (parseInt(cur_price) * BTC_tmp1)) / BTC_tmp;
        average_price_tmp = Math.round(average_price_tmp * 10) / 10;

        let KRW_tmp = parseInt(localStorage.getItem("KRW")) - parseInt(all_price);
        localStorage.setItem("BTC", BTC_tmp);
        localStorage.setItem("KRW", KRW_tmp);
        alert(BTC_tmp1 + "개의 BTC를 매수하였습니다.(1개당" + cur_price + "원)");
        localStorage.setItem("ask_price", -1); // 구매되었으니 매수주문 삭제

        localStorage.setItem("my_average_price", average_price_tmp); // 구매 가격
        let my_coin = document.getElementById("my_btc");
        my_coin.innerText = localStorage.getItem("BTC") + "BTC"; // 현재 코인갯수
        let my_coin1 = document.getElementById("BTC_div4");
        my_coin1.innerText = localStorage.getItem("BTC");

        // 버그로 인해 주석처리
        // if (parseInt(buy_price) >= parseInt(cur_price)) {
        //     let BTC_tmp = parseFloat(amount);// 현재가보다 높은 가격을 호가하면 현재가에 사짐
        //     BTC_tmp = parseFloat(BTC_tmp) + parseFloat(localStorage.getItem("BTC"));
        //     let KRW_tmp = parseInt(localStorage.getItem("KRW")) - parseInt(all_price);
        //     localStorage.setItem("BTC", BTC_tmp);
        //     localStorage.setItem("KRW", KRW_tmp);
        //     alert(BTC_tmp + "개의 BTC를 구입하였습니다.(1개당" + cur_price + "원)");
        //     localStorage.setItem("ask_price", -1); // 구매되었으니 매수주문 삭제
        //     localStorage.setItem("my_average_price", cur_price); // 구매 가격
        //     let my_coin = document.getElementById("my_btc");
        //     my_coin.innerText = localStorage.getItem("BTC") + "BTC"; // 현재 코인갯수
        //     let my_coin1 = document.getElementById("BTC_div2");
        //     my_coin1.innerText = localStorage.getItem("BTC");
        // }
        // else {
        //     alert(localStorage.getItem("ask_price") + "KRW /" + amount + "개 매수 주문이 등록되었습니다.");
        //     let KRW_tmp = parseInt(localStorage.getItem("KRW")) - parseInt(all_price);
        //     localStorage.setItem("KRW", KRW_tmp);
        //     localStorage.setItem("BTC_ask", amount);
        // }
    }
}
function sell_coin(all_price) {
    let cur_price = document.getElementById("t14_price").innerText; // 현재가
    let BTC_cur = localStorage.getItem("BTC");

    if (all_price == 0) {
        alert("0개 이상의 코인을 입력해주세요.");
    }
    else if (parseFloat(BTC_cur) < parseFloat(all_price)) {
        alert("코인이 부족합니다.");
    }
    else {
        let sell_price = parseInt(cur_price) * parseFloat(all_price);
        alert(all_price + "개의 코인을 매도하였습니다.");

        sell_price = parseInt(localStorage.getItem("KRW")) + sell_price;
        localStorage.setItem("KRW", sell_price);

        let btc_tmp2 = parseFloat(localStorage.getItem("BTC")) - parseFloat(all_price);
        btc_tmp2 = Math.round(btc_tmp2 * 100000000) / 100000000;
        localStorage.setItem("BTC", btc_tmp2);
    }
}