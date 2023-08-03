import $ from "jquery";

$("document").ready(function(){
    // var total_price = 0;
// Early Bird
    // Academic
    $("#flexRadioDefault1").click(function(){
        var text = $("#early-academic").text();
        var price = $("#flexRadioDefault1").val();
        $("#add-to-cart-text").text(text);
        $("#add-to-cart-price").text(price);
        $("#total_price").text(price);
        if($("#acc_price").text() !== "--"){
            var acc_price = $("#acc_price").text();
            acc_price = acc_price.split("$");
            var total_price = $("#total_price").text();
            total_price = parseInt(total_price) + parseInt(acc_price[1]);
            $("#total_price").text(total_price);
        }
        if($("#acc_discount").text() !== ""){
            var acc_discount = $("#acc_discount").text();
            acc_discount = acc_discount.split("$");
            acc_price = $("#acc_price").text();
            acc_price = acc_price.split("$");
            total_price = $("#total_price").text();
            total_price = parseInt(total_price) - parseInt(acc_discount[1]);
            $("#total_price").text(total_price);
        }
        if($("#reg_discount").text() !== ""){
            var reg_discount_value = $("#reg_discount").text();
            reg_discount_value = reg_discount_value.split("$");
            total_price = parseInt($("#total_price").text());
            total_price = total_price - reg_discount_value[1];
            $("#total_price").text(total_price);
        }
        if($("#discount_code_both").text() !== ""){
            var discount_value = $("#discount_code_both").text();
            discount_value = discount_value.split("$");
            total_price = parseInt($("#total_price").text());
            total_price = total_price - discount_value[1];
            $("#total_price").text(total_price);
        }
        if($("#extra_night_price").text() !== "--"){
            var extra_night_price = $("#extra_night_price").text();
            extra_night_price = extra_night_price.split("$");
            total_price = $("#total_price").text();
            total_price = parseInt(total_price) + parseInt(extra_night_price[1]);
            $("#total_price").text(total_price);
        }
    });
    // 
    // Industry
    $("#flexRadioDefault2").click(function(){
        var text = $("#early-industry").text();
        var price = $("#flexRadioDefault2").val();
        $("#add-to-cart-text").text(text);
        $("#add-to-cart-price").text(price);
        $("#total_price").text(price);
        if($("#acc_price").text() !== "--"){
            var acc_price = $("#acc_price").text();
            acc_price = acc_price.split("$");
            var total_price = $("#total_price").text();
            total_price = parseInt(total_price) + parseInt(acc_price[1]);
            $("#total_price").text(total_price);
        }
        if($("#acc_discount").text() !== ""){
            var acc_discount = $("#acc_discount").text();
            acc_discount = acc_discount.split("$");
            acc_price = $("#acc_price").text();
            acc_price = acc_price.split("$");
            total_price = $("#total_price").text();
            total_price = parseInt(total_price) - parseInt(acc_discount[1]);
            $("#total_price").text(total_price);
        }
        if($("#reg_discount").text() !== ""){
            var reg_discount_value = $("#reg_discount").text();
            reg_discount_value = reg_discount_value.split("$");
            total_price = parseInt($("#total_price").text());
            total_price = total_price - reg_discount_value[1];
            $("#total_price").text(total_price);
        }
        if($("#discount_code_both").text() !== ""){
            var discount_value = $("#discount_code_both").text();
            discount_value = discount_value.split("$");
            total_price = parseInt($("#total_price").text());
            total_price = total_price - discount_value[1];
            $("#total_price").text(total_price);
        }
        if($("#extra_night_price").text() !== "--"){
            var extra_night_price = $("#extra_night_price").text();
            extra_night_price = extra_night_price.split("$");
            total_price = $("#total_price").text();
            total_price = parseInt(total_price) + parseInt(extra_night_price[1]);
            $("#total_price").text(total_price);
        }
    });
    // 
    // Federal
    $("#flexRadioDefault3").click(function(){
        var text = $("#early-federal").text();
        var price = $("#flexRadioDefault3").val();
        $("#add-to-cart-text").text(text);
        $("#add-to-cart-price").text(price);
        $("#total_price").text(price);
        if($("#acc_price").text() !== "--"){
            var acc_price = $("#acc_price").text();
            acc_price = acc_price.split("$");
            var total_price = $("#total_price").text();
            total_price = parseInt(total_price) + parseInt(acc_price[1]);
            $("#total_price").text(total_price);
        }
        if($("#acc_discount").text() !== ""){
            var acc_discount = $("#acc_discount").text();
            acc_discount = acc_discount.split("$");
            acc_price = $("#acc_price").text();
            acc_price = acc_price.split("$");
            total_price = $("#total_price").text();
            total_price = parseInt(total_price) - parseInt(acc_discount[1]);
            $("#total_price").text(total_price);
        }
        if($("#reg_discount").text() !== ""){
            var reg_discount_value = $("#reg_discount").text();
            reg_discount_value = reg_discount_value.split("$");
            total_price = parseInt($("#total_price").text());
            total_price = total_price - reg_discount_value[1];
            $("#total_price").text(total_price);
        }
        if($("#discount_code_both").text() !== ""){
            var discount_value = $("#discount_code_both").text();
            discount_value = discount_value.split("$");
            total_price = parseInt($("#total_price").text());
            total_price = total_price - discount_value[1];
            $("#total_price").text(total_price);
        }
        if($("#extra_night_price").text() !== "--"){
            var extra_night_price = $("#extra_night_price").text();
            extra_night_price = extra_night_price.split("$");
            total_price = $("#total_price").text();
            total_price = parseInt(total_price) + parseInt(extra_night_price[1]);
            $("#total_price").text(total_price);
        }
    });
    // 
    // Delegate
    $("#flexRadioDefault4").click(function(){
        var text = $("#early-delegate").text();
        var price = $("#flexRadioDefault4").val();
        $("#add-to-cart-text").text(text);
        $("#add-to-cart-price").text(price);
        $("#total_price").text(price);
        if($("#acc_price").text() !== "--"){
            var acc_price = $("#acc_price").text();
            acc_price = acc_price.split("$");
            var total_price = $("#total_price").text();
            total_price = parseInt(total_price) + parseInt(acc_price[1]);
            $("#total_price").text(total_price);
        }
        if($("#acc_discount").text() !== ""){
            var acc_discount = $("#acc_discount").text();
            acc_discount = acc_discount.split("$");
            acc_price = $("#acc_price").text();
            acc_price = acc_price.split("$");
            total_price = $("#total_price").text();
            total_price = parseInt(total_price) - parseInt(acc_discount[1]);
            $("#total_price").text(total_price);
        }
        if($("#reg_discount").text() !== ""){
            var reg_discount_value = $("#reg_discount").text();
            reg_discount_value = reg_discount_value.split("$");
            total_price = parseInt($("#total_price").text());
            total_price = total_price - reg_discount_value[1];
            $("#total_price").text(total_price);
        }
        if($("#discount_code_both").text() !== ""){
            var discount_value = $("#discount_code_both").text();
            discount_value = discount_value.split("$");
            total_price = parseInt($("#total_price").text());
            total_price = total_price - discount_value[1];
            $("#total_price").text(total_price);
        }
        if($("#extra_night_price").text() !== "--"){
            var extra_night_price = $("#extra_night_price").text();
            extra_night_price = extra_night_price.split("$");
            total_price = $("#total_price").text();
            total_price = parseInt(total_price) + parseInt(extra_night_price[1]);
            $("#total_price").text(total_price);
        }
    });
    // 
    // Student
    $("#flexRadioDefault5").click(function(){
        var text = $("#early-student").text();
        var price = $("#flexRadioDefault5").val();
        $("#add-to-cart-text").text(text);
        $("#add-to-cart-price").text(price);
        $("#total_price").text(price);
        if($("#acc_price").text() !== "--"){
            var acc_price = $("#acc_price").text();
            acc_price = acc_price.split("$");
            var total_price = $("#total_price").text();
            total_price = parseInt(total_price) + parseInt(acc_price[1]);
            $("#total_price").text(total_price);
        }
        if($("#acc_discount").text() !== ""){
            var acc_discount = $("#acc_discount").text();
            acc_discount = acc_discount.split("$");
            acc_price = $("#acc_price").text();
            acc_price = acc_price.split("$");
            total_price = $("#total_price").text();
            total_price = parseInt(total_price) - parseInt(acc_discount[1]);
            $("#total_price").text(total_price);
        }
        if($("#reg_discount").text() !== ""){
            var reg_discount_value = $("#reg_discount").text();
            reg_discount_value = reg_discount_value.split("$");
            total_price = parseInt($("#total_price").text());
            total_price = total_price - reg_discount_value[1];
            $("#total_price").text(total_price);
        }
        if($("#discount_code_both").text() !== ""){
            var discount_value = $("#discount_code_both").text();
            discount_value = discount_value.split("$");
            total_price = parseInt($("#total_price").text());
            total_price = total_price - discount_value[1];
            $("#total_price").text(total_price);
        }
        if($("#extra_night_price").text() !== "--"){
            var extra_night_price = $("#extra_night_price").text();
            extra_night_price = extra_night_price.split("$");
            total_price = $("#total_price").text();
            total_price = parseInt(total_price) + parseInt(extra_night_price[1]);
            $("#total_price").text(total_price);
        }
    });
    // 
    // Virtual
    $("#flexRadioDefault6").click(function(){
        var text = $("#early-virtual").text();
        var price = $("#flexRadioDefault6").val();
        $("#add-to-cart-text").text(text);
        $("#add-to-cart-price").text(price);
        $("#total_price").text(price);
        if($("#acc_price").text() !== "--"){
            var acc_price = $("#acc_price").text();
            acc_price = acc_price.split("$");
            var total_price = $("#total_price").text();
            total_price = parseInt(total_price) + parseInt(acc_price[1]);
            $("#total_price").text(total_price);
        }
        if($("#acc_discount").text() !== ""){
            var acc_discount = $("#acc_discount").text();
            acc_discount = acc_discount.split("$");
            acc_price = $("#acc_price").text();
            acc_price = acc_price.split("$");
            total_price = $("#total_price").text();
            total_price = parseInt(total_price) - parseInt(acc_discount[1]);
            $("#total_price").text(total_price);
        }
        if($("#reg_discount").text() !== ""){
            var reg_discount_value = $("#reg_discount").text();
            reg_discount_value = reg_discount_value.split("$");
            total_price = parseInt($("#total_price").text());
            total_price = total_price - reg_discount_value[1];
            $("#total_price").text(total_price);
        }
        if($("#discount_code_both").text() !== ""){
            var discount_value = $("#discount_code_both").text();
            discount_value = discount_value.split("$");
            total_price = parseInt($("#total_price").text());
            total_price = total_price - discount_value[1];
            $("#total_price").text(total_price);
        }
        if($("#extra_night_price").text() !== "--"){
            var extra_night_price = $("#extra_night_price").text();
            extra_night_price = extra_night_price.split("$");
            total_price = $("#total_price").text();
            total_price = parseInt(total_price) + parseInt(extra_night_price[1]);
            $("#total_price").text(total_price);
        }
    });
    //
    // single-accommodation
    $("#flexRadioDefault1-acc1").click(function(){
        var price = parseInt($("input[type=radio][name=r1]:checked").val());
        var text = $("#single-accommodation").text().split("$");
        var accs_text = text[1].split(" ");
        var accs_price = $("#flexRadioDefault1-acc1").val();
        $("#acc_checkin_date").text("04/09/2023");
        $("#acc_checkout_date").text("04/12/2023");
        $("#acc_text").text(accs_text[1]+" "+accs_text[2]);
        $("#acc_price").text("$"+accs_price);
        $("#extra_accommodation").attr("disabled", false);
        var total_price = price + parseInt(accs_price);
        $("#total_price").text(total_price);
        if($("#add-to-cart-number").text() === 3){
            $("#add-to-cart-number").text("3");
        }
        else{
            $("#add-to-cart-number").text("2");
        }
        var acc_discount = $("#acc_discount").text();
        var discount = acc_discount.split("$");
        if(acc_discount !== ""){
            total_price = parseInt($("#total_price").text());
            total_price = total_price - discount[1];
            $("#total_price").text(total_price);
        }
        if($("#reg_discount").text() !== ""){
            var reg_discount_value = $("#reg_discount").text();
            reg_discount_value = reg_discount_value.split("$");
            total_price = parseInt($("#total_price").text());
            total_price = total_price - reg_discount_value[1];
            $("#total_price").text(total_price);
        }
        if($("#discount_code_both").text() !== ""){
            var discount_value = $("#discount_code_both").text();
            reg_discount_value = discount_value.split("$");
            total_price = parseInt($("#total_price").text());
            total_price = total_price - reg_discount_value[1];
            $("#total_price").text(total_price);
        }
        if($("#extra_night_price").text() !== "--"){
            var extra_night_price = $("#extra_night_price").text();
            extra_night_price = extra_night_price.split("$");
            total_price = $("#total_price").text();
            total_price = parseInt(total_price) + parseInt(extra_night_price[1]);
            $("#total_price").text(total_price);
        }
    });
    //
    // double-accommodation
    $("#flexRadioDefault1-acc2").click(function(){
        var price = parseInt($("input[type=radio][name=r1]:checked").val());
        var text = $("#double-accommodation").text().split("$");
        var accd_text = text[1].split(" ");
        var accd_price = parseInt($("#flexRadioDefault1-acc2").val());
        $("#acc_checkin_date").text("04-09-2023");
        $("#acc_checkout_date").text("04-12-2023");
        $("#acc_text").text(accd_text[1]+" "+accd_text[2]);
        $("#acc_price").text("$"+accd_price);
        $("#extra_accommodation").attr("disabled", false);
        var total_price = price + accd_price;
        $("#total_price").text(total_price);
        if($("#add-to-cart-number").text() === 3){
            $("#add-to-cart-number").text("3");
        }
        else{
            $("#add-to-cart-number").text("2");
        }
        var acc_discount = $("#acc_discount").text();
        var discount = acc_discount.split("$");
        if(acc_discount !== ""){
            total_price = parseInt($("#total_price").text());
            total_price = total_price - discount[1];
            $("#total_price").text(total_price);
        }
        if($("#reg_discount").text() !== ""){
            var reg_discount_value = $("#reg_discount").text();
            reg_discount_value = reg_discount_value.split("$");
            total_price = parseInt($("#total_price").text());
            total_price = total_price - reg_discount_value[1];
            $("#total_price").text(total_price);
        }
        if($("#discount_code_both").text() !== ""){
            var discount_value = $("#discount_code_both").text();
            reg_discount_value = discount_value.split("$");
            total_price = parseInt($("#total_price").text());
            total_price = total_price - reg_discount_value[1];
            $("#total_price").text(total_price);
        }
        if($("#extra_night_price").text() !== "--"){
            var extra_night_price = $("#extra_night_price").text();
            extra_night_price = extra_night_price.split("$");
            total_price = $("#total_price").text();
            total_price = parseInt(total_price) + parseInt(extra_night_price[1]);
            $("#total_price").text(total_price);
        }
    });
    //
    // extra Nights
    $("#extra_accommodation").click(function(){
        if($("#acc_price").text() === "--" || $("#acc_price").text() === "")
        {
            alert("For Extra Nights Accommodation Please Select an Accommodation to Stay!");
            // $("#extra_accommodation").prop('checked',false);
            $("#flexRadioDefault1-acc1").focus();
        }
        else
        {
            if($("input:checkbox[name=extraaccommodation]").is(':checked'))
            {
                alert("Plese select the No Of Nights!");
                $("#numberof_days").focus();
                $("#add-to-cart-number").text("3");
                $("#numberof_days").change(function()
                {
                    $("#dateof_accommodation").val(0);
                    $("checkoutdate").val("CheckOutDates");
                    var no_of_days = $("#numberof_days").val();
                    $("#acc_checkin_date").text("--");
                    $("#acc_checkout_date").text("--");
                    alert("Plese select the Check-in Date!");
                    $("#dateof_accommodation").focus();
                    switch (no_of_days) {
                        case "1":
                        var price = 150;
                        var reg_price = $("#add-to-cart-price").text();
                        var acc_price = $("#acc_price").text();
                        acc_price = acc_price.split("$");
                        if($("#reg_discount").text() !== ""){
                            var reg_discount_value = $("#reg_discount").text();
                            reg_discount_value = reg_discount_value.split("$");
                            var total_price = parseInt(acc_price[1]) + (parseInt(reg_price) - parseInt(reg_discount_value[1])) + price;
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(1)");
                            $("#total_price").text(total_price);
                        }
                        else if($("#discount_code_both").text() !== ""){
                            var discount_code_both = $("#discount_code_both").text();
                            discount_code_both = discount_code_both.split("$");
                            total_price = parseInt(reg_price) + parseInt(acc_price[1]) + price - parseInt(discount_code_both[1]);
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(1)");
                            $("#total_price").text(total_price);
                        }
                        else{

                            total_price = parseInt(acc_price[1]) + parseInt(reg_price) + price; 
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(1)");
                            $("#total_price").text(total_price);
                        }
                            break;
                    
                        case "2":
                        price = 300;
                        reg_price = $("#add-to-cart-price").text();
                        acc_price = $("#acc_price").text();
                        acc_price = acc_price.split("$");
                        if($("#reg_discount").text() !== ""){
                            reg_discount_value = $("#reg_discount").text();
                            reg_discount_value = reg_discount_value.split("$");
                            total_price = parseInt(acc_price[1]) + (parseInt(reg_price) - parseInt(reg_discount_value[1])) + price;
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(2)");
                            $("#total_price").text(total_price);
                        }
                        else if($("#acc_discount").text() !== ""){
                            var acc_discount = $("#acc_discount").text();
                            acc_discount = acc_discount.split("$");
                            total_price = parseInt(reg_price) + (parseInt(acc_price[1]) - parseInt(acc_discount[1])) + price;
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(2)");
                            $("#total_price").text(total_price);
                        }
                        else if($("#acc_discount").text() !== ""){
                            acc_discount = $("#acc_discount").text();
                            acc_discount = acc_discount.split("$");
                            total_price = parseInt(reg_price) + (parseInt(acc_price[1]) - parseInt(acc_discount[1])) + price;
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(2)");
                            $("#total_price").text(total_price);
                        }
                        else if($("#discount_code_both").text() !== ""){
                            discount_code_both = $("#discount_code_both").text();
                            discount_code_both = discount_code_both.split("$");
                            total_price = parseInt(reg_price) + parseInt(acc_price[1]) + price - parseInt(discount_code_both[1]);
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(2)");
                            $("#total_price").text(total_price);
                        }
                        else{

                            total_price = parseInt(acc_price[1]) + parseInt(reg_price) + price; 
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(2)");
                            $("#total_price").text(total_price);
                        }
                            break;

                        case "3":
                        price = 450;
                        reg_price = $("#add-to-cart-price").text();
                        acc_price = $("#acc_price").text();
                        acc_price = acc_price.split("$");
                        if($("#reg_discount").text() !== ""){
                            reg_discount_value = $("#reg_discount").text();
                            reg_discount_value = reg_discount_value.split("$");
                            total_price = parseInt(acc_price[1]) + (parseInt(reg_price) - parseInt(reg_discount_value[1])) + price;
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(3)");
                            $("#total_price").text(total_price);
                        }
                        else if($("#acc_discount").text() !== ""){
                            var acc_discount = $("#acc_discount").text();
                            acc_discount = acc_discount.split("$");
                            var total_price = parseInt(reg_price) + (parseInt(acc_price[1]) - parseInt(acc_discount[1])) + price;
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(3)");
                            $("#total_price").text(total_price);
                        }
                        else if($("#discount_code_both").text() !== ""){
                            var discount_code_both = $("#discount_code_both").text();
                            discount_code_both = discount_code_both.split("$");
                            var total_price = parseInt(reg_price) + parseInt(acc_price[1]) + price - parseInt(discount_code_both[1]);
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(4)");
                            $("#total_price").text(total_price);
                        }
                        else{

                            var total_price = parseInt(acc_price[1]) + parseInt(reg_price) + price; 
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(3)");
                            $("#total_price").text(total_price);
                        }
                            break;

                        case "4":
                        var price = 600;
                        var reg_price = $("#add-to-cart-price").text();
                        var acc_price = $("#acc_price").text();
                        acc_price = acc_price.split("$");
                        if($("#reg_discount").text() !== ""){
                            var reg_discount_value = $("#reg_discount").text();
                            reg_discount_value = reg_discount_value.split("$");
                            var total_price = parseInt(acc_price[1]) + (parseInt(reg_price) - parseInt(reg_discount_value[1])) + price;
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(4)");
                            $("#total_price").text(total_price);
                        }
                        else if($("#acc_discount").text() !== ""){
                            var acc_discount = $("#acc_discount").text();
                            acc_discount = acc_discount.split("$");
                            var total_price = parseInt(reg_price) + (parseInt(acc_price[1]) - parseInt(acc_discount[1])) + price;
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(4)");
                            $("#total_price").text(total_price);
                        }
                        else if($("#discount_code_both").text() !== ""){
                            var discount_code_both = $("#discount_code_both").text();
                            discount_code_both = discount_code_both.split("$");
                            var total_price = parseInt(reg_price) + parseInt(acc_price[1]) + price - parseInt(discount_code_both[1]);
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(4)");
                            $("#total_price").text(total_price);
                        }
                        else{

                            var total_price = parseInt(acc_price[1]) + parseInt(reg_price) + price; 
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(4)");
                            $("#total_price").text(total_price);
                        }
                            break;

                        case "5":
                        var price = 750;
                        var reg_price = $("#add-to-cart-price").text();
                        var acc_price = $("#acc_price").text();
                        acc_price = acc_price.split("$");
                        if($("#reg_discount").text() !== ""){
                            var reg_discount_value = $("#reg_discount").text();
                            reg_discount_value = reg_discount_value.split("$");
                            var total_price = parseInt(acc_price[1]) + (parseInt(reg_price) - parseInt(reg_discount_value[1])) + price;
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(5)");
                            $("#total_price").text(total_price);
                        }
                        else if($("#acc_discount").text() !== ""){
                            var acc_discount = $("#acc_discount").text();
                            acc_discount = acc_discount.split("$");
                            var total_price = parseInt(reg_price) + (parseInt(acc_price[1]) - parseInt(acc_discount[1])) + price;
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(5)");
                            $("#total_price").text(total_price);
                        }
                        else if($("#discount_code_both").text() !== ""){
                            var discount_code_both = $("#discount_code_both").text();
                            discount_code_both = discount_code_both.split("$");
                            var total_price = parseInt(reg_price) + parseInt(acc_price[1]) + price - parseInt(discount_code_both[1]);
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(5)");
                            $("#total_price").text(total_price);
                        }
                        else{

                            var total_price = parseInt(acc_price[1]) + parseInt(reg_price) + price; 
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(5)");
                            $("#total_price").text(total_price);
                        }
                            break;
                    
                        case "6":
                        var price = 900;
                        var reg_price = $("#add-to-cart-price").text();
                        var acc_price = $("#acc_price").text();
                        acc_price = acc_price.split("$");
                        if($("#reg_discount").text() !== ""){
                            var reg_discount_value = $("#reg_discount").text();
                            reg_discount_value = reg_discount_value.split("$");
                            var total_price = parseInt(acc_price[1]) + (parseInt(reg_price) - parseInt(reg_discount_value[1])) + price;
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(6)");
                            $("#total_price").text(total_price);
                        }
                        else if($("#acc_discount").text() !== ""){
                            var acc_discount = $("#acc_discount").text();
                            acc_discount = acc_discount.split("$");
                            var total_price = parseInt(reg_price) + (parseInt(acc_price[1]) - parseInt(acc_discount[1])) + price;
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(6)");
                            $("#total_price").text(total_price);
                        }
                        else if($("#discount_code_both").text() !== ""){
                            var discount_code_both = $("#discount_code_both").text();
                            discount_code_both = discount_code_both.split("$");
                            var total_price = parseInt(reg_price) + parseInt(acc_price[1]) + price - parseInt(discount_code_both[1]);
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(6)");
                            $("#total_price").text(total_price);
                        }
                        else{
                            var total_price = parseInt(acc_price[1]) + parseInt(reg_price) + price; 
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(6)");
                            $("#total_price").text(total_price);
                        }
                            break;
                    
                        case "7":
                        var price = 1050;
                        var reg_price = $("#add-to-cart-price").text();
                        var acc_price = $("#acc_price").text();
                        acc_price = acc_price.split("$");
                        if($("#reg_discount").text() !== ""){
                            var reg_discount_value = $("#reg_discount").text();
                            reg_discount_value = reg_discount_value.split("$");
                            var total_price = parseInt(acc_price[1]) + (parseInt(reg_price) - parseInt(reg_discount_value[1])) + price;
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(7)");
                            $("#total_price").text(total_price);
                        }
                        else if($("#acc_discount").text() !== ""){
                            var acc_discount = $("#acc_discount").text();
                            acc_discount = acc_discount.split("$");
                            var total_price = parseInt(reg_price) + (parseInt(acc_price[1]) - parseInt(acc_discount[1])) + price;
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(7)");
                            $("#total_price").text(total_price);
                        }
                        else if($("#discount_code_both").text() !== ""){
                            var discount_code_both = $("#discount_code_both").text();
                            discount_code_both = discount_code_both.split("$");
                            var total_price = parseInt(reg_price) + parseInt(acc_price[1]) + price - parseInt(discount_code_both[1]);
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(7)");
                            $("#total_price").text(total_price);
                        }
                        else{

                            total_price = parseInt(acc_price[1]) + parseInt(reg_price) + price; 
                            $("#extra_night_price").text("$"+price);
                            $("#extra_night_no_of_days").text("(7)");
                            $("#total_price").text(total_price);
                        }
                            break;
                    
                        default:
                            break;
                    }
                    $("#dateof_accommodation").change(function()
                    {
                        var dateof_accommodation = $("#dateof_accommodation").val();
                        if(no_of_days === "1"){
                            switch (dateof_accommodation) 
                            {
                                case "04/8/2023":   $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/12/2023");
                                                    $("#checkoutdate").val("04-12-2023");
                                break;
                                case "04/9/2023":   $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/13/2023");
                                                    $("#checkoutdate").val("04-13-2023");
                                break;
                                case "04/10/2023":  $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/14/2023");
                                                    $("#checkoutdate").val("04-14-2023");
                                break;
                            }
                        }
                        if(no_of_days === "2"){
                            switch (dateof_accommodation) 
                            {
                                case "04/8/2023":   $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/13/2023");
                                                    $("#checkoutdate").val("04-13-2023");
                                break;
                                case "04/9/2023":   $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/14/2023");
                                                    $("#checkoutdate").val("04-14-2023");
                                break;
                                case "04/10/2023":  $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/15/2023");
                                                    $("#checkoutdate").val("04-15-2023");
                                break;
                            }
                        }
                        if(no_of_days === "3"){
                            switch (dateof_accommodation) 
                            {
                                case "04/8/2023":   $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/14/2023");
                                                    $("#checkoutdate").val("04-14-2023");
                                break;
                                case "04/9/2023":   $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/15/2023");
                                                    $("#checkoutdate").text("04-15-2023");
                                break;
                                case "04/10/2023":  $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/16/2023");
                                                    $("#checkoutdate").text("04-16-2023");
                                break;
                            }
                        }
                        if(no_of_days === "4"){
                            switch (dateof_accommodation) 
                            {
                                case "04/8/2023":   $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/15/2023");
                                                    $("#checkoutdate").val("04-15-2023");
                                break;
                                case "04/9/2023":   $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/16/2023");
                                                    $("#checkoutdate").val("04-16-2023");
                                break;
                                case "04/10/2023":  $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/17/2023");
                                                    $("#checkoutdate").val("04-17-2023");
                                break;
                            }
                        }
                        if(no_of_days === "5"){
                            switch (dateof_accommodation) 
                            {
                                case "04/8/2023":   $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/16/2023");
                                                    $("#checkoutdate").val("04-16-2023");
                                break;
                                case "04/9/2023":   $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/17/2023");
                                                    $("#checkoutdate").val("04-17-2023");
                                break;
                                case "04/10/2023":  $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/18/2023");
                                                    $("#checkoutdate").val("04-18-2023");
                                break;
                            }
                        }
                        if(no_of_days === "6"){
                            switch (dateof_accommodation) 
                            {
                                case "04/8/2023":   $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/17/2023");
                                                    $("#checkoutdate").val("04-17-2023");
                                break;
                                case "04/9/2023":   $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/18/2023");
                                                    $("#checkoutdate").val("04-18-2023");
                                break;
                                case "04/10/2023":  $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/19/2023");
                                                    $("#checkoutdate").val("04-19-2023");
                                break;
                            }
                        }
                        if(no_of_days === "7"){
                            switch (dateof_accommodation) 
                            {
                                case "04/8/2023":   $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/18/2023");
                                                    $("#checkoutdate").val("04-18-2023");
                                break;
                                case "04/9/2023":   $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/19/2023");
                                                    $("#checkoutdate").val("04-19-2023");
                                break;
                                case "04/10/2023":  $("#acc_checkin_date").text(dateof_accommodation);
                                                    $("#acc_checkout_date").text("04/20/2023");
                                                    $("#checkoutdate").val("04-20-2023");
                                break;
                            }
                        }
                        $("#extra_night_no_of_days").text("("+no_of_days+")");
                        $("#extra_night_check-in").text(dateof_accommodation +" to ");
                        if($("#acc_price").text() === "--")
                        {
                            $("#add-to-cart-number").text("2")
                        }
                        else
                        {
                            $("#add-to-cart-number").text("3");
                        }
                    })
                })
            }
            else
            {
                $("#extra_night_no_of_days").text("");
                $("#extra_night_check-in").text("");
                $("#numberof_days").val(0);
                $("#dateof_accommodation").val(0);
                $("#add-to-cart-number").text(parseInt($("#add-to-cart-number").text()) - 1);
            }
        }
    })
    //
    // discount
    $("#promo-btn").click(function(){
        var discount_code = $("#discount_code").val();
        if(discount_code.trim() === ""){
            alert("Enter the Discount Code!");
            $("#discount_code").focus();
        }
        // discount Registration
        else if(discount_code === "12345"){
            var reg_discount_value = 49;
            var reg_price = parseInt($("#add-to-cart-price").text());
            if($("#acc_discount").text() !== ""){
                alert("Already Discount Code Applied!");
                $("#discount_code").val("");
            }
            else if($("#discount_code_both").text() !== ""){
                alert("Already Discount Code Applied!");
                $("#discount_code").val("");
            }
            else if($("#reg_discount").text() !== ""){
                alert("Already Discount Code Applied!");
                $("#discount_code").val("");
            }
            else if(reg_price === ""){
                alert("To Apply Registration Discount Please select an Registration!");
                $("#discount_code").val("");
                $("#flexRadioDefault1").focus();
            }
            else{
                var total_price = parseInt($("#total_price").text());
                total_price = total_price - reg_discount_value;
                $("#discount_code").val("");
                $("#reg_discount").text("- $"+reg_discount_value);
                $("#promo_code_text").text("Promo code");
                $("#promo_code_type").text("(Applied For Registration");
                $("#total_price").text(total_price);
            }
        }
        // 
        // discount Accommodation
        else if(discount_code === "12345_acc"){
                var acc_discount_value = 19;
                var acc_price = $("#acc_price").text();
                if($("#reg_discount").text() !== ""){
                    alert("Already Discount Code Applied!");
                    $("#discount_code").val("");
                }
                else if($("#discount_code_both").text() !== ""){
                    alert("Already Discount Code Applied!");
                    $("#discount_code").val("");
                }
                else if($("#acc_discount").text() !== ""){
                    alert("Already Discount Code Applied!");
                    $("#discount_code").val("");
                }
                else if(acc_price === "--" || acc_price === ""){
                    alert("To Apply Accommodation Discount Please Select an Accommodation!");
                    $("#discount_code").val("");
                    $("#flexRadioDefault1-acc1").focus();
                }
                else{
                    total_price = parseInt($("#total_price").text());
                    total_price = total_price - acc_discount_value;
                    $("#discount_code").val("");
                    $("#acc_discount").text("- $"+acc_discount_value);
                    $("#promo_code_text").text("Promo code");
                    $("#promo_code_type").text("(Applied For Accommodation");
                    $("#total_price").text(total_price);

                }
        }
        // discount Both (Accommodation $ Registration)
        else if(discount_code === '123456'){
            var discount_value = 99;
            if($("#reg_discount").text() !== ""){
                alert("Already Discount Code Applied!");
                $("#discount_code").val("");
            }
            else if($("#acc_discount").text() !== ""){
                alert("Already Discount Code Applied!");
                $("#discount_code").val("");
            }
            else if($("#discount_code_both").text() !== ""){
                alert("Already Discount Code Applied!");
                $("#discount_code").val("");
            }
            else{
                total_price = parseInt($("#total_price").text());
                total_price = total_price - discount_value;
                $("#discount_code").val("");
                $("#promo_code_text").text("Promo code");
                $("#promo_code_type").text(discount_code);
                $("#discount_code_both").text("- $"+discount_value)
                $("#total_price").text(total_price);
            }
        }
        else{
            alert("Please enter an valid code!");
            $("#discount_code").focus();
            $("#discount_code").val("");
        }
    })

})