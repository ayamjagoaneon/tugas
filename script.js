let nilai =prompt("masukan nilai");
let hasil ="";

switch (true){
    case nilai >=91&& nilai <=100:
        hasil="A"
        break;
    case nilai >=81&& nilai <=90:
         hasil="B"
         break;
     case nilai >=71&& nilai <=80:
          hasil="C"
         break;
     case nilai >=61&& nilai <=70:
         hasil="D"
         break;
     case nilai >=0&& nilai <=60:
         hasil="E"
         break;

    default:
    document.write(`tidak ada`)

}
document.write(`nilai anda ${hasil}`)