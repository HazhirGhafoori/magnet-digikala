window.onload = function() {


    var tipOfVideo, selectTipOfVideo;
    tipOfVideo = "tip2";
    var select = document.getElementById("selectTipOfVideo");

    var mainBox = document.getElementById("mainBox");
    var divTip12 = document.getElementById("videoTip1-2Box");
    var divLive = document.getElementById("videoLive");
    var talentNamee,
        productLinke1, productLinke2, productLinke3,
        productName1, productName2, productName3,
        productID1, productID2, productID3,
        talentNameLive, ProductLinkLive, DateOfLive, productNameLive, productIDlive,
        transferLinke,
        magnetLinke,
        isPorFroshe,
        isSellerOrdere, successSendMsg, successSendMsgdiv,
        copyButtone, sendButton;

    talentNamee = document.getElementById("talentName");
    productLinke1 = document.getElementById("productLink1");
    productLinke2 = document.getElementById("productLink2");
    productLinke3 = document.getElementById("productLink3");
    transferLinke = document.getElementById("transferLink");
    magnetLinke = document.getElementById("magnetLink");
    isPorFroshe = document.getElementById("selectIsPorFrosh");
    isSellerOrdere = document.getElementById("selectOrderSeller");
    selectIsPorFrosh = document.getElementById("selectIsPorFrosh");
    selectOrderSeller = document.getElementById("selectOrderSeller");
    copyButtone = document.getElementById("copyButton");
    sendButton = document.getElementById("sendButton");
    successSendMsg = document.getElementById("successSendMsg");
    successSendMsgdiv = document.getElementById("successSendMsgdiv");


    talentNameLive = document.getElementById("talenNameLive");
    ProductLinkLive = document.getElementById("ProductLinkLive");
    DateOfLive = document.getElementById("DateOfLive");




    mainBox.style.display = "none";
    document.getElementById("selectTipOfVideo").addEventListener("change", function() {
        var style = this.value == 1 ? "none" : "block";
        document.getElementById("mainBox").style.display = style;
    });

    select.addEventListener("change", function handleChange(event) {
        if (event.target.value === "tip3") {

            divTip12.style.display = "none";
            divLive.style.display = "block";
        } else {
            divTip12.style.display = "block";
            divLive.style.display = "none";
        }
    });


    select.addEventListener("change", () => {
        tipOfVideo = select.options[select.selectedIndex].value;
        if (tipOfVideo == "tip1" || tipOfVideo == "tip2") {
            console.log("tip is 1");
            sendButton.onclick = async function() {

                talentNamee = document.getElementById("talentName").value;
                productLinke1 = document.getElementById("productLink1").value;
                productLinke2 = document.getElementById("productLink2").value;
                productLinke3 = document.getElementById("productLink3").value;
                transferLinke = document.getElementById("transferLink").value;
                magnetLinke = document.getElementById("magnetLink").value;

                isPorFroshe = isPorFroshe.options[isPorFroshe.selectedIndex].text;
                isSellerOrdere = isSellerOrdere.options[isSellerOrdere.selectedIndex].text;


                //split Product IDs
                productLinke1 = productLinke1.replace("https://www.digikala.com/product/", "");
                productID1 = productLinke1.slice(0, (productLinke1.search("/")));

                productLinke2 = productLinke2.replace("https://www.digikala.com/product/", "");
                productID2 = productLinke2.slice(0, productLinke2.search("/"));

                productLinke3 = productLinke3.replace("https://www.digikala.com/product/", "");
                productID3 = productLinke3.slice(0, productLinke3.search("/"));
                //End Of Split Product Ids


                //go to get Name Of Product in DigiKala Product Page
                productName1 = productLinke1.replace(productID1 + "/", "");
                productName1 = decodeQueryParam(productName1);
                productName2 = productLinke2.replace(productID2 + "/", "");
                productName2 = decodeQueryParam(productName2);
                productName3 = productLinke3.replace(productID3 + "/", "");
                productName3 = decodeQueryParam(productName3);
                //End of Go to get Name Of Product in DigiKala Product Page


                magnetLinke = magnetLinke.replace("سلام!  این رو ببین، به نظرم جالبه ", "");
                console.log(magnetLinke);


                if (tipOfVideo == "tip1") {
                    tipOfVideo = "تیپ 1";
                } else if (tipOfVideo == "tip2") {
                    tipOfVideo = "تیپ 2";
                } else if (tipOfVideo == "tip3") {
                    tipOfVideo = "3 لایو";
                }

                // console.log(productLinke1, "pr ID" + productID1);
                var msg = "📍نام تلنت: " + talentNamee + "<br>📍تیپ ویدیو: " + tipOfVideo + "<br>📍اسم کالا(ها) در سایت: <br>" + productName1 + "<br>" + productName2 + "<br>" + productName3 + "<br>📍شناسه کالا(ها): <br>" + productID1 + "<br>" + productID2 + "<br>" + productID3 + "<br>📍لینک ترنسفر: <br>" + transferLinke + "<br>📍لینک مگنت: <br>" + magnetLinke + "<br>📍آیا کالا(ها)ی این ویدیو رو از لیست‌ کالاهای پرفروش انتخاب کرده‌اید؟ <br>" + isPorFroshe + "<br>📍آیا این ویدیو سفارش برند/سلر بوده است؟ <br>" + isSellerOrdere;
                document.getElementById('finalText').innerHTML = msg;

                copyToClipboard('#finalText');
                var delayInMilliseconds = 4000; //1 second


                copyButtone.onclick = async function() {

                    fetch('https://sheetdb.io/api/v1/075378egpgsdr', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                data: [{
                                    'id': "INCREMENT",
                                    'talentName': talentNamee,
                                    'talentTip': tipOfVideo,
                                    'productName1': productName1,
                                    'productName2': productName2,
                                    'productName3': productName3,
                                    'productID1': productID1,
                                    'productID2': productID2,
                                    'productID3': productID3,
                                    'transferLink': transferLinke,
                                    'isPorFroosh': isPorFroshe,
                                    'isOrdered': isSellerOrdere

                                }]
                            })
                        })
                        .then((response) => response.json())
                        .then((data) => console.log(data));

                    successSendMsgdiv.style.display = "block";
                    successSendMsg.style.display = "block";
                    successSendMsg.innerHTML = "در حال ارسال به سرور...";


                    if (data = 1) {

                        setTimeout(function() {
                            successSendMsg.innerHTML = "با موفقیت به سرور ارسال شد.";
                        }, delayInMilliseconds);
                    } else {
                        successSendMsg.innerHTML = "ارسال به سرور با خطا روبرو شد";
                    }



                }




            }




        } else if (tipOfVideo == "tip3") {
            console.log("tip is 3");
            sendButton.onclick = async function() {


                talentNameLive = document.getElementById("talentNameLive").value;
                ProductLinkLive = document.getElementById("ProductLinkLive").value;
                DateOfLive = document.getElementById("DateOfLive").value;

                //split Product IDs
                ProductLinkLive = ProductLinkLive.replace("https://www.digikala.com/product/", "");
                productIDlive = ProductLinkLive.slice(0, (ProductLinkLive.search("/")));

                //End Of Split Product Ids


                //go to get Name Of Product in DigiKala Product Page
                productNameLive = ProductLinkLive.replace(productIDlive + "/", "");
                productNameLive = decodeQueryParam(productNameLive);




                if (tipOfVideo == "tip1") {
                    tipOfVideo = "تیپ 1";
                } else if (tipOfVideo == "tip2") {
                    tipOfVideo = "تیپ 2";
                } else if (tipOfVideo == "tip3") {
                    tipOfVideo = "3 لایو";
                }

                // console.log(productLinke1, "pr ID" + productID1);
                var msg = "📍نام تلنت: " + talentNameLive + "</br>📍تیپ ویدیو: " + tipOfVideo + "</br>📍اسم کالا(ها) در سایت: </br>" + productNameLive + "</br>📍شناسه کالا(ها): <br>" + productIDlive + "</br>📍تاریخ اجرا لایو:</br>" + DateOfLive;
                document.getElementById('finalText').innerHTML = msg;
                copyToClipboard('#finalText');
                var delayInMilliseconds = 4000; //1 second

                copyButtone.onclick = async function() {
                    fetch('https://sheetdb.io/api/v1/ghz2ftz1pd2f7', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                data: [{
                                    'liveID': "INCREMENT",
                                    'talentNameLive': talentNameLive,
                                    'talentTipLive': tipOfVideo,
                                    'productNameLive': productNameLive,
                                    'productIDLive': productIDlive,
                                    'dateOfLive': DateOfLive


                                }]
                            })
                        })
                        .then((response) => response.json())
                        .then((data) => console.log(data));
                    successSendMsgdiv.style.display = "block";
                    successSendMsg.style.display = "block";
                    successSendMsg.innerHTML = "در حال ارسال به سرور...";


                    if (data = 1) {

                        setTimeout(function() {
                            successSendMsg.innerHTML = "با موفقیت به سرور ارسال شد.";
                        }, delayInMilliseconds);
                    } else {
                        successSendMsg.innerHTML = "ارسال به سرور با خطا روبرو شد";
                    }
                }



            }
        }
    });


    function copyToClipboard(element) {
        // REPLACE <BR> AND CREATE CLEAN STRING
        var brRegex = /<br\s*[\/]?>/gi;
        var cleanString = $(element).html().replace(brRegex, "\r\n");

        // TEMP VAR TO SELECT TEXT FROM
        var $temp = $("<textarea>");

        // ADD TEMP TO BODY
        $("body").append($temp);

        // SET TEMP VALUE
        $temp.val(cleanString);

        // SELECT TEMP
        $temp.select();

        // EXECUTE COPY
        document.execCommand("copy");

        // REMOVE TEMP ELEMENT
        $temp.remove();
    }


    function decodeQueryParam(p) {
        var i = decodeURIComponent(p.replace(/\+/g, " "));
        i = i.replace(/-/g, " ");
        i = i.replace("/", "");
        return i;
    }



};