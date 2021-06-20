function print_table(coin_json, data) {
    let ask_num = 14;
    let bid_num = 15;
    let bithumb = JSON.parse(data);
    let buySellGb_tmp = bithumb.content.list[0].buySellGb;
    let contPrice_tmp = bithumb.content.list[0].contPrice;

    console.log("빗썸 현재가 : " + bithumb.content.list[0].contPrice), "통과";


    for (let i = 0; i < 15; i++) {

        let ask_price_tmp = document.getElementById("t" + ask_num + "_price");
        let ask_size_tmp = document.getElementById("t" + ask_num + "_amount");

        let bid_price_tmp = document.getElementById("t" + bid_num + "_price");
        let bid_size_tmp = document.getElementById("t" + bid_num + "_amount");

        ask_price_tmp.innerText = coin_json[0].orderbook_units[i].ask_price;
        ask_size_tmp.innerText = coin_json[0].orderbook_units[i].ask_size;

        bid_price_tmp.innerText = coin_json[0].orderbook_units[i].bid_price;
        bid_size_tmp.innerText = coin_json[0].orderbook_units[i].bid_size;
        ask_num -= 1;
        bid_num += 1;

        //console.log("ask_num:" + ask_num, "bid_num:" + bid_num, "i: " + i);
    }
}