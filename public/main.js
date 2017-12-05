document.addEventListener("DOMContentLoaded", function() {
    var forms = document.querySelectorAll("form");
    var form = forms[0];

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var name = document.querySelectorAll("#name")[0].value;
        var quantity = document.querySelectorAll("#quantity")[0].value;
        var price = document.querySelectorAll("#price")[0].value;

        var message = document.querySelectorAll("#message")[0];
        message.innerHTML = message.innerHTML + "<span>" + quantity + " " + name + " por " + price + " soles c/u" + "</span>";

        var payload = {
            'name': name,
            'quantity': quantity,
            'price': price,
        }

        $.post("/find", payload);
      }
    );
})
