
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Capture input values
    const name = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;
    const tea = document.querySelector('input[name="tea"]:checked').value;
    const message = document.getElementById('message').value;
    const payment = document.getElementById('payment').value;

    // Log the order details to the console
    console.log(`Order placed:
        Name: ${name},
        Quantity: ${quantity},
        Tea: ${tea},
        Message: ${message || 'No special instructions'},
        Payment: ${payment}`);

    // Show order status and play bell sound
    const orderStatus = document.getElementById('order-status');
    orderStatus.style.display = 'block';


    const bellSound = document.getElementById('bellSound');
    bellSound.play();

    // Simulate order processing
    orderStatus.querySelector('p').textContent = 'Your order is being processed...';
    
    // Simulate delay for order acceptance
    setTimeout(function() {
        orderStatus.querySelector('p').textContent = 'Your order has been accepted!';
        alert('Order accepted successfully!');
    }, 5000);  // 5 seconds delay
});
fetch('http://localhost:3000/api/orders')
