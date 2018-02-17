    function solve(arr) {
        let totalMoneyWeGot = 0;
        let bitcoinPrice = 11949.16 ;
        let goldPrice = 67.51;
        let firstPurchesed = 0;


        for (let i = 1; i <= arr.length; i++) {
            if(i % 3 === 0 &&  (i - 1) !== 0  ){
                let number = Number(arr[i - 1]);
                totalMoneyWeGot += ((number - (number*30)/100 )) * goldPrice
            }else {
                totalMoneyWeGot += Number(arr[i - 1]) * goldPrice
            }
            if(firstPurchesed === 0 && (totalMoneyWeGot / bitcoinPrice) >= 1 ){
                firstPurchesed = i;
            }
        }

        let leftMoney = (totalMoneyWeGot % bitcoinPrice).toFixed(2)

        console.log(`Bought bitcoins: ${Math.floor(totalMoneyWeGot / bitcoinPrice)}`)
        if(firstPurchesed !== 0){
            console.log(`Day of the first purchased bitcoin: ${firstPurchesed}`)
        }
        console.log(`Left money: ${leftMoney} lv.`)


    }

let input = ['100','200','300']

solve(input)