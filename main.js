/*
Casus - Bank
Wij zijn een bank en we hebben meerdere klanten die graag een bedrag van hun account willen opnemen.
Elke individuele klant wordt vastgelegd in een object en alle klanten gezamenlijk (alle objecten) in een array.
Om geld op te kunnen nemen, moet de combinatie rekeningnummer en pincode overeenkomen (valideren)

Input:
- Rekeningnummer opgeven
- Pincode opgeven
- Op te nemen bedrag

Output:
- Saldo voor opname
- Saldo na opname

Stappenplan:
1. Variabelen declareren voor ingevulde pincode en rekeningnummer en bedrag
2. Klantgegevens wilt ophalen obv variabel
3. Valideren of pincode overeenkomt met rekeningnummer
4. Bedrag opnemen en saldo bijwerken
5. Tonen van een succesbericht en nieuwe saldo
*/

const bankAccounts = [
    {
        id: 1,
        name: 'Axel',
        accountNr: 'NL23INGB0325264330',
        pin: 5722,
        saldo: 1000,
    },
    {
        id: 2,
        name: 'Barend',
        accountNr: 'NL23INGB0456355891',
        pin: 8316,
        saldo: 700,
    },
    {
        id: 3,
        name: 'Charlotte',
        accountNr: 'NL23INGB0163292325',
        pin: 1430,
        saldo: 100,
    },
]

// 1. Variabelen declareren voor ingevulde pincode en rekeningnummer en bedrag
const providedAccountNr = 'NL23INGB0456355891';
const providedPin = 8316;
const withDrawel = 100;

// 2. Klantgegevens wilt ophalen obv variabel
for ( let i = 0; i < bankAccounts.length; i++) {
    const currentBankAccount = bankAccounts[i];

    if (providedAccountNr === currentBankAccount.accountNr) {
        console.log(`Welkom ${currentBankAccount.name} uw bankrekeningnummer is ${currentBankAccount.accountNr}`);
        // Dit is een alternatieve annotatie om bovenstaande te loggen >> console.log('Welkom ' + currentBankAccount.name + ' uw bankrekeningnummer is ' + currentBankAccount.accountNr );

        // 3. Valideren of pincode overeenkomt met rekeningnummer
        if (providedPin === currentBankAccount.pin) {
            console.log('Pincode is juist');
            console.log(`Uw saldo was ${currentBankAccount.saldo} euro`);
            // 4. Bedrag opnemen en saldo bijwerken
            currentBankAccount.saldo = currentBankAccount.saldo - withDrawel;

            // 5. Tonen van een succesbericht en nieuwe saldo
            console.log(`Bedankt voor uw opname van ${withDrawel}, uw nieuwe saldo is ${currentBankAccount.saldo} euro`);

        } else {

            console.log(`Uw opgegeven pincode van ${providedPin} is onjuist`);
        }
    } else {

        // console.log('Bankrekening komt niet overeen');
    }
}

