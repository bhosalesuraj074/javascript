sbiBank = {
    bankName: "SBI",
    location : "Pune",
    accountNumber :12345543298,
    ifsc :"SBIN0000455",
    rateOfInterest : 0.2
}
axisBank = {
    bankName: "Axis Bank",
    location : "Pune",
    accountNumber :745633543298,
    ifsc :"UTIB0000037",
    rateOfInterest : 0.7
}
hdfcBank = {
    bankName: "HDFC Bank",
    location : "Pune",
    accountNumber :3456255543298,
    ifsc :"HDFC0000148",
    rateOfInterest : 0.3
}
yesBank = {
    bankName: "YES Bank",
    location : "Pune",
    accountNumber :8456645543298,
    ifsc :"YESB0000008",
    rateOfInterest : 0.9
}
function print(){
    console.error("-------------------------------------------------------------------------------------------------------------------------");
}
show = function(bank)
{
    console.log("Bank Details: ", bank);
}

print();
show(sbiBank);
print();
show(axisBank);
print();
show(hdfcBank);
print();
show(yesBank);
console.error("-------------------------------------------------------------------------------------------------------------------------");