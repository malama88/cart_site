/*
	
see bottom of page for cookies.

		
*/

var now = new Date();
var expdate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);

function findCookie(val) {
   var cookie = null;
   var findVal = val + "=";
//alert(val);
   var dc = document.cookie;
   if (dc.length > 0) {
      var start = dc.indexOf(findVal);
      if (start >= 0) {
         start += findVal.length;
         lastVal = dc.indexOf(";", start);
         if (lastVal == -1) {
            lastVal = dc.length;
	 }
         cookie = (dc.substring(start, lastVal));
      } else {
         return cookie;
      }
   }
   return cookie;
}


function delProd(prod){
   document.cookie = "myitem"+prod+" = ;expires = Thu, 01-Jan-70 00:00:01 GMT;";
   location.reload();
}


function showOrder(){
	var subTot = 0;
	var prod = new Array();
	prod[0] = findCookie("myitem0");
	prod[1] = findCookie("myitem1");
	prod[2] = findCookie("myitem2");
	prod[3] = findCookie("myitem3");
	prod[4] = findCookie("myitem4");
	prod[5] = findCookie("myitem5");
	prod[6] = findCookie("myitem6");
	prod[7] = findCookie("myitem7");
	prod[8] = findCookie("myitem8");
	prod[9] = findCookie("myitem9");
        prod[10] = findCookie("myitem10");
	prod[11] = findCookie("myitem11");
	
	if((prod[0] == null)&&(prod[1] == null)&&(prod[2] == null)&&(prod[3] == null)&&(prod[4] == null)&&(prod[5] == null)&&(prod[6] == null)&&(prod[7] == null)&&(prod[8] == null)&&(prod[9] == null)&&(prod[10] == null)&&(prod[11] == null))
		{
			document.write("<tr><td>");
			document.write("Your cart is empty.");
			document.write("</td></tr>");
		}
	for(i=0;i<=prod.length;i++)
		{
		if((prod[i] != null)&&(prod[i] != ""))
			{
			document.write("<tr><td>");
			start =  prod[i].substring(0,6);
			document.write(start+"</td><td>");

			name = prod[i].indexOf(",")+1;
			name2 = prod[i].indexOf(",",name);
			prod_name = prod[i].substring(name,name2);
			document.write(prod_name+"</td><td class=right'>");

			price = prod[i].indexOf(",",name2)+1;
			price2 = prod[i].indexOf(",",price);
			prod_price = parseFloat(prod[i].substring(price,price2));
			price = prod_price.toFixed(2);
			document.write("$"+price+"</td><td class='center'>");

			quant = parseInt(prod[i].substring(prod[i].length-1,prod[i].length));
			document.write(quant+"</td><td class='right'>");

			cost_raw = quant*prod_price;
			cost_tot = cost_raw;
			subTot += cost_tot;
			cost = cost_raw.toFixed(2);
			document.write("$"+cost+"</td><td>");
			document.write("<a href=# onclick = 'delProd("+[i]+")'>Remove Item</a>");
			document.write("</td><td>");
			}
	  	}
		//
		
		   document.write("<tr></tr><tr><td></td><td></td><td></td><th>Total: </th><td class='center'>$" + subTot.toFixed(2) + "</td></tr>");
		
}
// cookies to confirm submit of form.
formInfo = null;
var name

function confirm() {
   if (document.cookie!=document.cookie) {
      index = document.cookie.indexOf(formInfo);
   }else {
      index = -1;
   }
   if (index == -1) {
      name=document.registration_form.first_name.value;
      document.cookie=formInfo+"="+name+"; expires= " + expdate.toGMTString();
   alert("Thank you for your order "+ name +" .");   
}

}