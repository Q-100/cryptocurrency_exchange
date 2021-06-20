function gap_calc(coin_json, data) { // 업비트 빗썸 가격 계산
    let ask_num = 14;
    let bid_num = 15;
    let bithumb = JSON.parse(data);
    let buySellGb_tmp = bithumb.content.list[0].buySellGb;
    let contPrice_tmp = bithumb.content.list[0].contPrice; // 현재가
    let gap_price = 0;



    console.log("현재가" + contPrice_tmp);
    if (buySellGb_tmp == 1) {
        if (coin_json[0].orderbook_units[0].bid_price > contPrice_tmp) {
            gap_price = coin_json[0].orderbook_units[0].bid_price - contPrice_tmp;
            print_table("minus", gap_price);
            print_checkbox(15); // bid 호가창 
        }
        else {
            gap_price = contPrice_tmp - coin_json[0].orderbook_units[0].bid_price;
            print_table("plus", gap_price);
            print_checkbox(15); // bid 호가창 
        }
    }
    else if (buySellGb_tmp == 2) {
        if (coin_json[0].orderbook_units[0].ask_price > contPrice_tmp) {
            gap_price = coin_json[0].orderbook_units[0].ask_price - contPrice_tmp;
            print_table("minus", gap_price);
            print_checkbox(14); // ask 호가창 
        }
        else {
            gap_price = contPrice_tmp - coin_json[0].orderbook_units[0].ask_price;
            print_table("plus", gap_price);
            print_checkbox(14); // ask 호가창 
        }
    }
    //console.log("현재가 : " + contPrice_tmp, "차이 : " + gap_price, "gb : " + buySellGb_tmp);
    earning_rate_calc(contPrice_tmp);



    function print_table(sign, gap) { // 호가창 출력
        for (let i = 0; i < 15; i++) {
            let ask_price_tmp = document.getElementById("t" + ask_num + "_price");
            let ask_size_tmp = document.getElementById("t" + ask_num + "_amount");

            let bid_price_tmp = document.getElementById("t" + bid_num + "_price");
            let bid_size_tmp = document.getElementById("t" + bid_num + "_amount");

            if (sign == "minus") {
                ask_price_tmp.innerText = coin_json[0].orderbook_units[i].ask_price - gap;
                ask_size_tmp.innerText = coin_json[0].orderbook_units[i].ask_size;

                bid_price_tmp.innerText = coin_json[0].orderbook_units[i].bid_price - gap;
                bid_size_tmp.innerText = coin_json[0].orderbook_units[i].bid_size;
            }
            else if (sign == "plus") {
                ask_price_tmp.innerText = coin_json[0].orderbook_units[i].ask_price + gap;
                ask_size_tmp.innerText = coin_json[0].orderbook_units[i].ask_size;

                bid_price_tmp.innerText = coin_json[0].orderbook_units[i].bid_price + gap;
                bid_size_tmp.innerText = coin_json[0].orderbook_units[i].bid_size;

            }
            ask_num -= 1;
            bid_num += 1;
        }
    }
    function print_checkbox(num) { // 호가창 체결 박스
        let cur_box_ask = document.getElementById("t" + num);
        if (num == 15) {
            let reset_box = document.getElementById("t14");
            reset_box.style.border = "none";
        }
        else {
            let reset_box = document.getElementById("t15");
            reset_box.style.border = "none";
        }
        cur_box_ask.style.border = "solid";
    }
    function earning_rate_calc(contPrice_tmp) { // 수익률 계산
        let earning_rate_id = document.getElementById("earning_rate");
        let my_average_price = localStorage.getItem("my_average_price");
        let earning_rate = ((parseInt(contPrice_tmp) - parseInt(my_average_price)) / parseInt(my_average_price)) * 100;
        console.log(earning_rate);
        earning_rate = Math.round(earning_rate * 100) / 100;
        earning_rate_id.innerText = earning_rate + "%";
    }
}

