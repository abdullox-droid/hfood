
        const foodData = {
            "яблоко": 52,
            "банан": 89,
            "апельсин": 47,
            "груша": 57,
            "киви": 61,
            "манго": 60,
            "ананас": 50,
            "виноград": 69,
            "персик": 39,
            "клубника": 32,
            "помидор": 18,
            "огурец": 15,
            "морковь": 41,
            "картофель жареный": 312,
            "лук репчатый": 40,
            "перец болгарский": 27,
            "капуста белокочанная": 25,
            "брокколи": 34,
            "кабачок": 17,
            "свёкла": 43,
            "миндаль": 579,
            "грецкий орех": 654,
            "фундук": 628,
            "кешью": 553,
            "арахис": 567,
            "фисташки": 562
        };

        function calculateCalories() {
            const input = document.getElementById("input").value.toLowerCase().trim();
            const resultDiv = document.getElementById("result");

            if (!input) {
                resultDiv.innerHTML = "Пожалуйста, введите продукты.";
                return;
            }

            const items = input.split(",");
            let totalCalories = 0;
            let details = [];

            for (let item of items) {
                item = item.trim();
                if (!item) continue;

                const lastSpaceIndex = item.lastIndexOf(" ");
                if (lastSpaceIndex === -1) {
                    resultDiv.innerHTML = "Ошибка: проверьте формат ввода (например, 'помидор 150').";
                    return;
                }

                const food = item.substring(0, lastSpaceIndex).trim();
                const weightStr = item.substring(lastSpaceIndex + 1).trim();
                const weightNum = parseFloat(weightStr);

                if (!food || isNaN(weightNum)) {
                    resultDiv.innerHTML = "Ошибка: проверьте формат ввода (например, 'помидор 150').";
                    return;
                }

                if (!(food in foodData)) {
                    resultDiv.innerHTML = `Ошибка: продукт '${food}' не найден.`;
                    return;
                }

                const calories = (foodData[food] * weightNum) / 100;
                totalCalories += calories;
                details.push(`${food} (${weightNum} г): ${calories.toFixed(1)} ккал`);
            }

            resultDiv.innerHTML = `
                <h3>Результат:</h3>
                <p>${details.join("<br>")}</p>
                <p><strong>Итого: ${totalCalories.toFixed(1)} ккал</strong></p>
            `;
        }

