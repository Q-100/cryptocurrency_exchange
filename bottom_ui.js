function print_ui(num) {
    let div_frame1 = document.getElementById("div_buy");
    let div_frame2 = document.getElementById("div_sell");
    let div_frame3 = document.getElementById("div_market_buy");
    let div_frame4 = document.getElementById("div_market_sell");
    let button_buy = document.getElementById("market_buy_button");
    let button_sell = document.getElementById("market_sell_button");
    let button_buy1 = document.getElementById("market_buy_button1");
    let button_sell1 = document.getElementById("market_sell_button1");
    console.log(div_frame2);

    div_frame1.style.display = "none";
    div_frame2.style.display = "none";
    div_frame3.style.display = "none";
    div_frame4.style.display = "none";
    button_buy.style.color = "aliceblue";
    button_sell.style.color = "aliceblue";
    button_buy1.style.color = "aliceblue";
    button_sell1.style.color = "aliceblue";
    if (num == 1) {
        div_frame1.style.display = "";
    }
    else if (num == 2) {
        div_frame2.style.display = "";
    }
    else if (num == 3) {
        div_frame3.style.display = "";
        button_buy.style.color = "red";
        button_buy1.style.color = "red";
    }
    else if (num == 4) {
        div_frame4.style.display = "";
        button_sell.style.color = "blue";
        button_sell1.style.color = "blue";
    }

}