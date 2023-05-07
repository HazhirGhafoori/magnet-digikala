window.onload = function() {
    let tipOfVideo, selectTipOfVideo;
    tipOfVideo = "tip2";
    let select = document.getElementById("selectTipOfVideo");

    let mainBox = document.getElementById("mainBox");
    let divTip12 = document.getElementById("videoTip1-2Box");
    let divLive = document.getElementById("videoLive");
    let talentNamee,
        productLinke1, productLinke2, productLinke3,
        productName1, productName2, productName3,
        productID1, productID2, productID3,
        transferLinke,
        magnetLinke,
        isPorFroshe,
        isSellerOrdere,
        copyButtone;

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


    copyButtone.onclick = async function() {

        talentNamee = document.getElementById("talentName").value;
        productLinke1 = document.getElementById("productLink1").value;
        productLinke2 = document.getElementById("productLink2").value;
        productLinke3 = document.getElementById("productLink3").value;
        transferLinke = document.getElementById("transferLink").value;
        magnetLinke = document.getElementById("magnetLink").value;

        isPorFroshe = isPorFroshe.options[isPorFroshe.selectedIndex].text;
        isSellerOrdere = isSellerOrdere.options[isSellerOrdere.selectedIndex].text;


        //go to get Name Of Product in DigiKala Product Page


        //End of Go to get Name Of Product in DigiKala Product Page


        //split Product IDs
        productLinke1 = productLinke1.replace("https://www.digikala.com/product/", "");
        productID1 = productLinke1.slice(0, (productLinke1.search("/")));

        productLinke2 = productLinke2.replace("https://www.digikala.com/product/", "");
        productID2 = productLinke2.slice(0, productLinke2.search("/"));

        productLinke3 = productLinke3.replace("https://www.digikala.com/product/", "");
        productID3 = productLinke3.slice(0, productLinke3.search("/"));
        //End Of Split Product Ids

        var htmlsrc = (await (await fetch('https://www.digikala.com/product/dkp-10738143')).text());
        var doc = new DOMParser().parseFromString(html, 'text/html');
        console.log(doc.title);









        if (tipOfVideo == "tip1") {
            tipOfVideo = "تیپ 1";
        } else if (tipOfVideo == "tip2") {
            tipOfVideo = "تیپ 2";
        } else if (tipOfVideo == "tip3") {
            tipOfVideo = "تیپ 3 | لایو";
        }

        // console.log(productLinke1, "pr ID" + productID1);
        var msg = "📍نام تلنت: " + talentNamee + "<br>📍تیپ ویدیو: " + tipOfVideo + "<br>📍اسم کالا(ها) در سایت: <br>" + productName1 + "<br>" + productName2 + "<br>" + productName3 + "<br>📍شناسه کالا(ها): <br>" + productID1 + "<br>" + productID2 + "<br>" + productID3 + "<br>📍لینک ترنسفر: " + transferLinke + "<br>📍لینک مگنت: " + magnetLinke + "<br>📍آیا کالا(ها)ی این ویدیو رو از لیست‌ کالاهای پرفروش انتخاب کرده‌اید؟ " + isPorFroshe + "<br>📍آیا این ویدیو سفارش برند/سلر بوده است؟ " + isSellerOrdere;
        document.getElementById('finalText').innerHTML = msg;


    }






    select.addEventListener("change", () => {
        tipOfVideo = select.options[select.selectedIndex].value;
        if (tipOfVideo == "tip1") {
            console.log("tip is 1");




        } else if (tipOfVideo == "tip2") {
            console.log("tip is 2");




        } else if (tipOfVideo == "tip3") {
            console.log("tip is 3");
        }
    });






};