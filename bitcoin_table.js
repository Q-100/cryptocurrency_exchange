function gap_calc(coin_json, data) {
    let ask_num = 14;
    let bid_num = 15;
    let bithumb = JSON.parse(data);
    let buySellGb_tmp = bithumb.content.list[0].buySellGb;
    let contPrice_tmp = bithumb.content.list[0].contPrice;
    let gap_price = 0;

    if (buySellGb_tmp == 1) {
        if (coin_json[0].orderbook_units[0].bid_price > contPrice_tmp) {
            gap_price = coin_json[0].orderbook_units[0].bid_price - contPrice_tmp;
            print_table("minus");
        }
        else {
            gap_price = contPrice_tmp - coin_json[0].orderbook_units[0].bid_price;
            print_table("plus");
        }
    }
    else if (buySellGb_tmp == 2) {
        if (coin_json[0].orderbook_units[0].ask_price > contPrice_tmp) {
            gap_price = coin_json[0].orderbook_units[0].ask_price - contPrice_tmp;
            print_table("minus");
        }
        else {
            gap_price = contPrice_tmp - coin_json[0].orderbook_units[0].ask_price;
            print_table("plus");
        }
    }
    console.log("빗썸 현재가 : " + contPrice_tmp, "차이 : " + gap_price, "gb : " + buySellGb_tmp);

    function print_table(sign) {
        for (let i = 0; i < 15; i++) {
            let ask_price_tmp = document.getElementById("t" + ask_num + "_price");
            let ask_size_tmp = document.getElementById("t" + ask_num + "_amount");

            let bid_price_tmp = document.getElementById("t" + bid_num + "_price");
            let bid_size_tmp = document.getElementById("t" + bid_num + "_amount");

            if (sign == "minus") {
                ask_price_tmp.innerText = coin_json[0].orderbook_units[i].ask_price - gap_price;
                ask_size_tmp.innerText = coin_json[0].orderbook_units[i].ask_size;

                bid_price_tmp.innerText = coin_json[0].orderbook_units[i].bid_price - gap_price;
                bid_size_tmp.innerText = coin_json[0].orderbook_units[i].bid_size;
            }
            else if (sign == "plus") {
                ask_price_tmp.innerText = coin_json[0].orderbook_units[i].ask_price + gap_price;
                ask_size_tmp.innerText = coin_json[0].orderbook_units[i].ask_size;

                bid_price_tmp.innerText = coin_json[0].orderbook_units[i].bid_price + gap_price;
                bid_size_tmp.innerText = coin_json[0].orderbook_units[i].bid_size;

            }
            ask_num -= 1;
            bid_num += 1;
        }
    }

}
