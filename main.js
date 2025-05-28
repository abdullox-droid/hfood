
        const foodData = [
            {
            name: "яблоко",
            calories: 52
            },
            {
            name: "банан",
            calories: 89
            },
            {
            name: "апельсин",
            calories: 47
            },
            {
            name: "груша",
            calories: 57
            },
            {
            name: "киви",
            calories: 61
            },
            {
            name: "манго",
            calories: 60
            },
            {
            name: "ананас",
            calories: 50
            },
            {
            name: "виноград",
            calories: 69
            },
            {
            name: "персик",
            calories: 39
            },
            {
            name: "клубника",
            calories: 32
            },
            {
            name: "помидор",
            calories: 18
            },
            {
            name: "огурец",
            calories: 15
            },
            {
            name: "морковь",
            calories: 41
            },
            {
            name: "картофель жареный",
            calories: 312
            },
            {
            name: "лук репчатый",
            calories: 40
            },
            {
            name: "перец болгарский",
            calories: 27
            },
            {
            name: "капуста белокочанная",
            calories: 25
            },
            {
            name: "брокколи",
            calories: 34
            },
            {
            name: "кабачок",
            calories: 17
            },
            {
            name: "свёкла",
            calories: 43
            },
           {
            name: "миндаль",
            calories: 579
           },
            {
            name: "грецкий орех",
            calories: 654
            },
            {
            name: "фундук",
            calories: 628
            },
            {
            name: "кешью",
            calories: 553
            },
            {
            name: "арахис",
            calories: 567
            },
            {
            name: "фисташки",
            calories: 562
            }
        ]

        let div = document.querySelector(".products");

        foodData.forEach((item) => {
            div.insertAdjacentHTML("beforeend", `
                <div class="product">
                    <div class="product__name">${item.name}</div>
                    <div class="product__calories">${item.calories}</div>
                <div>
                 
                `)
        })
            
   