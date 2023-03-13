var counter=0;
function print(){
    console.error(`-----------------------------------------------------${++counter}----------------------------------------------`);
}
function Bank(bankName, location, ifscCode, branchCode)
{
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;
    
    this.show = function ()
    {
        console.log(`Bank Name: "${this.bankName}" Location: "${this.location}" ifscCode: "${this.ifscCode}" Branch Name: "${branchCode}"`);
    }
}
print();
console.log("Bank Details :");
let yesBank =new Bank("YES Bank", "Pune", "YESB0000008","YES1230912");
yesBank.show();
let sbiBank =new Bank("SBI Bank", "Solapur", "SBI0000208","SBI1230912");
sbiBank.show();
let axisBank =new Bank("Axis Bank", "Mumabi", "AXIS0000008","AXIS45630912");
axisBank.show();
let maharashtraBank =new Bank("Maharashtra Bank", "Sangola", "MH231000008","MH3451230912");
maharashtraBank.show();
print();
Bank.prototype.openTime ="9 AM IST";
Bank.prototype.closeTime ="6 PM IST";
console.log(`'${sbiBank.bankName}' opening time is '${sbiBank.openTime}' & Closing time is '${sbiBank.closeTime}'`);
print();
console.log(`'${axisBank.bankName}' opening time is '${axisBank.openTime}' & Closing time is '${axisBank.closeTime}'`);
print();
console.log(`'${yesBank.bankName}' having branchcode  '${yesBank.branchCode}'  opening at '${axisBank.openTime}' & Closing time is '${axisBank.closeTime}'`);
