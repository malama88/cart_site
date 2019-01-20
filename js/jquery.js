$(document).ready(function() {
    $("#sizes").tabs();
    // jQuery UI Draggable
    $("#product li").draggable({
    
        // brings the item back to its place when dragging is over
        revert:true,

        // once the dragging starts, we decrease the opactiy of other items
        // Appending a class as we do that with CSS
        drag:function () {
            $(this).addClass("active");
            $(this).closest("#product").addClass("active");
        },

        // removing the CSS classes once dragging is over.
        stop:function () {
            $(this).removeClass("active").closest("#product").removeClass("active");
        }
    });

    // jQuery Ui Droppable
    $(".basket").droppable({
    
        // The class that will be appended to the to-be-dropped-element (basket)
        activeClass:"active",

        // The class that will be appended once we are hovering the to-be-dropped-element (basket)
        hoverClass:"hover",

        // The acceptance of the item once it touches the to-be-dropped-element basket
        // For different values http://api.jqueryui.com/droppable/#option-tolerance
        tolerance:"touch",
        drop:function (event, ui) {
        
            var basket = $(this),
                move = ui.draggable,
                itemId = basket.find("ul li[data-id='" + move.attr("data-id") + "']");
    
            // To increase the value by +1 if the same item is already in the basket
            if (itemId.html() != null) {
                itemId.find("input").val(parseInt(itemId.find("input").val()) + 1);
            }
            else {
                // Add the dragged item to the basket
                addBasket(basket, move);
    
                // Updating the quantity by +1" rather than adding it to the basket
                move.find("input").val(parseInt(move.find("input").val()) + 1);
            }
        }
    });

        // This function runs once an item is added to the basket
        
        function addBasket(basket, move) {
            basket.find("ul").append('<li data-id="' + move.attr("data-id") + '">'
                + '<span class="name">' + move.find("h3").html()
                + '</span>'
                + '<input class="count" value="1" type="text">'
                + '<button class="delete">&#10005;</button>')
                + '<span class="price">' + move.find(".cost").html()
                + '</span>';
	}
        var data = {"total":0,"rows":[]};
        var totalCost = 0;
        function addProduct(name,price){
            function add(){
                for(var i=0; i<data.total; i++){
                    var row = data.rows[i];
                    if (row.name == name){
                        row.quantity += 1;
                        return;
                    }
                }
        data.total += 1;
        data.rows.push({
            name:name,
            quantity:1,
            price:price
        });
    }
    add();
    totalCost += price;
    $('#cartcontent').datagrid('loadData', data);
    $('div.cart .total').html('Total: $'+totalCost);
}    

        // The function that is triggered once delete button is pressed
        $(".basket ul li button.delete").live("click", function () {
            $(this).closest("li").remove();
        });
             

 // float the basket 
  var   $sidebar = $(".basket"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 15;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });  
   
   
    

}); // end ready