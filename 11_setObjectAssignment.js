class Bank
{
    constructor(bank_name, location,account_no,ifsc,interest_rate)
     {
        this.bank_name= bank_name;
        this.location=location;
        this.account_no=account_no;
        this.interest_rate= interest_rate;
     }
}
let axisBank = new Bank("AXIS Bank","Pune",2423423422,"10%");
let sbiBank = new  Bank("SBI Bank", "Mumbai",34563562262,"11.5%");
let iciciBank = new Bank("ICICI Bank","Nashik",4234235523,"9%");
let kotakBank = new Bank("KOTAK Bank","solapur",4234736745,"10.4%");
let hdfcBank =new Bank("HDFC Bank","Satara",2349347223,"8%");
let Maharashtra_bank =new Bank("MAHARASHTRA Bank","Pandharpur",75367345634,"5%");

let bankSet =new Set();
bankSet.add(axisBank);
bankSet.add(sbiBank);
bankSet.add(iciciBank);
bankSet.add(kotakBank);
bankSet.add(hdfcBank);
bankSet.add(Maharashtra_bank);
console.log("Iterating the object of the Set: \n")
for (const iterator of bankSet) {
      console.log(`BankName: '${iterator.bank_name}', Location: '${iterator.location}' `); 
}


