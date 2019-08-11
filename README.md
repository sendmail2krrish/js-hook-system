# JS Hook System

## Installation 
<pre>
<script src="./src/hook.js"></script>
</pre>

## Example of uses 
<pre>
    &gt;p id="product-name"&gt;&lt;/p&gt;
    &gt;p id="product-price"&gt;&lt;/p&gt;

<script>
    function test() {
        var name = document.getElementById('product-name');
        var price = document.getElementById('product-price');

        // Set up the hooks
        Hook.register('_PRODUCT_NAME', function (args) {
            return args + ' <small style="color: blue;">Test Category</small>';
        });

        Hook.register('_PRODUCT_PRICE', function (args) {
            return args + 10;
        });
        Hook.register('_PRODUCT_PRICE', function (args) {
            return args + 10;
        });
        Hook.register('_PRODUCT_PRICE', function (args) {
            return args + 10;
        });
        Hook.register('_PRODUCT_PRICE', function (args) {
            return args + 10;
        });


        name.innerHTML = 'Product Name: ' + Hook.call('_PRODUCT_NAME', 'Test Product');
        price.innerHTML = 'Product Price: $' + Hook.call('_PRODUCT_PRICE', 10);
    }

    test();
</script>
</pre>

## Output 
<p>Product Name: Test Product Test Category</p>
<p>Product Price: $50</p>