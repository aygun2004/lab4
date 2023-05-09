            var sayi;
            var netice=1;
            sayi=document.getElementById("sayiInput").value;
                for (let index = 1; index <=sayi; index++) {
                    netice=netice*index;   
                }
                alert("Nəticə: " + netice);