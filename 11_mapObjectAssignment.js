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
let axisBank = new Bank("AXIS Bank","Pune",2423423422,32452345,"10%");
let sbiBank = new  Bank("SBI Bank", "Mumbai",34563562262,2345354546,"11.5%");
let iciciBank = new Bank("ICICI Bank","Nashik",4234235523,663242435,"9%");
let kotakBank = new Bank("KOTAK Bank","solapur",4234736745,45645634525,"10.4%");
let hdfcBank =new Bank("HDFC Bank","Satara",2349347223,63423466434,"8%");
let Maharashtra_bank =new Bank("MAHARASHTRA Bank","Pandharpur",75367345634,23745724562,"5%");

let bankSet =new Map();
bankSet.set(axisBank.account_no,axisBank);
bankSet.set(sbiBank.account_no,sbiBank);
bankSet.set(iciciBank.account_no,iciciBank);
bankSet.set(kotakBank.account_no,kotakBank);
bankSet.set(hdfcBank.account_no,hdfcBank);
bankSet.set(Maharashtra_bank.account_no,Maharashtra_bank);
console.log("Iterating the object of the Map: \n")


for (const i of bankSet.values()) {
       console.log(`Bank Name: ${i.bank_name}, AccountNo: ${i.account_no}, Rate of Interest: ${i.interest_rate} `)
}