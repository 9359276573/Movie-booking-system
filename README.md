<!DOCTYPE html>
<html lang="en">
<head>
   
   


</head>
<body>
    <div class="register-container">
        <h2>User Registration</h2>
        <form id="register-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>
            <input type="submit" value="Register">
        </form>
    </div>
</body>
</html>




<!-- Login.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="login-container">
        <h2>User Login</h2>
        <form id="login-form">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>
            <input type="submit" value="Login">
        </form>
    </div>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    
  
</head>
<body>
   

<!-- Movies.html -->
<div class="movie-list">
  <h2>Movie Selection</h2>
  <ul>
    <li>
      <h3>Movie Title</h3>
      <p>Genre: Action</p>
      <p>Showtimes: 3:00 PM, 6:00 PM, 9:00 PM</p>
      <button class="select-movie">Select</button>
    </li>
    <!-- Repeat for each movie -->
  </ul>
</div>





<!-- SeatSelection.html -->
<div class="seat-map">
  <h2>Seat Selection</h2>
  <div class="screen">Screen</div>
  <div class="seats">
    <!-- Repeat for each seat -->
    <div class="seat" data-seat="A1">
      <span>A1</span>
    </div>
  </div>
</div>



<!-- Reservation.html -->
<div class="reservation">
  <h2>Ticket Reservation</h2>
  <form>
    <label for="num-tickets">Number of Tickets:</label>
    <input type="number" id="num-tickets" min="2" max="15">
    <button class="proceed-payment">Proceed to Payment</button>
  </form>
</div>



<!-- Confirmation.html -->
<div class="confirmation">
  <h2>Booking Confirmation</h2>
  <p>Movie: <span>Hanuman</span></p>
  <p>Showtime: <span>3:00 PM</span></p>
  <p>Seats: <span>A1, A2, A3</span></p>
  <p>Total Price: <span>$20.00</span></p>
  <p>Movie: <span>Satyaprem Ki Katha</span></p>
  <p>Showtime: <span>5:00 PM</span></p>
  <p>Seats: <span>B1, B2, B3</span></p>
  <p>Total Price: <span>$30.00</span></p>
</div>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    
</head>
<body>
    <!-- Menu.html -->
<div class="menu-container">
    <h2>Menu</h2>
    <ul>
      <li>
        <h3>Pizza</h3>
        <p>Tasty and delicious</p>
        <p>Price: $10.99</p>
        <h3>PopCorn</h3>
        <p>Popcorn: The tiny treat with big joy</p>
        <p>Price: $15.99</p>
        <button class="add-to-cart">Add to Cart</button>
      </li>
      <!-- Repeat for each menu item -->
    </ul>
  </div>
  
  
  
  
  
  <!-- Cart.html -->
  <div class="cart-container">
    <h2>Cart</h2>
    <ul>
      <li>
        <h3>Item Name</h3>
        <p>Quantity: <input type="number" value="1"></p>
        <p>Subtotal: $10.99</p>
        <button class="remove-from-cart">Remove</button>
      </li>
      <!-- Repeat for each cart item -->
    </ul>
    <p>Total: $10.99</p>
    <button class="proceed-checkout">Proceed to Checkout</button>
  </div>
  
  
  
  
  <!-- Checkout.html -->
  <div class="checkout-container">
    <h2>Checkout</h2>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" required>
      <label for="payment-method">Payment Method:</label>
      <select id="payment-method">
        <option>Cash</option>
        <option>Card</option>
      </select>
      <button class="place-order">Place Order</button>
    </form>
  </div>
  
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    
    




</head>
<body>
    <!-- SeatAvailability.html -->
<div class="seat-map">
    <h2>Seat Map</h2>
    <div class="seats">
      <!-- Repeat for each seat -->
      <div class="seat" data-seat-id="1" data-available="true">
        <span>Seat 60</span>
      </div>
    </div>
  </div>
  
  
  
  
  <!-- LockSeat.html -->
  <div class="lock-seat">
    <h2>Lock Seat</h2>
    <h2>45</h2>
    <form>
      <input type="hidden" id="seat-id" value="1">
      <button class="lock-btn">Lock Seat</button>
    </form>
  </div>
  
  
  
  
  <!-- ReleaseSeat.html -->
  <div class="release-seat">
    <h2>Release Seat</h2>
    <h2>15</h2>
    <form>
      <input type="hidden" id="seat-id" value="1">
      <button class="release-btn">Release Seat</button>
    </form>
  </div>
  
  
    
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    
  
</head>
<body>
    

<div class="screen-selection">
  <h2>Select Screen</h2>
  <form>
    <select id="screen-select">
      <option value="screen-1">Screen Near</option>
      <option value="screen-2">Screen Farr</option>
      <!-- Repeat for each screen -->
    </select>
  </form>
  <div class="seat-limit">
    <h2>Seat Limit</h2>
    <p>Maximum capacity: <span id="max-capacity">45</span> seats</p>
    <p>Remaining seats: <span id="remaining-seats">15</span></p>
  </div>
</div>


</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    
   
</head>
<body>
    <div class="admin-panel">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li><a href="#screen-management">Screen Management</a></li>
            <li><a href="#booking-management">Booking Management</a></li>
            <li><a href="#food-menu-management">Food Menu Management</a></li>
          </ul>
        </nav>
        <div class="content">
          <div id="screen-management">
            <!-- Screen management content -->
          </div>
          <div id="booking-management">
            <!-- Booking management content -->
          </div>
          <div id="food-menu-management">
            <!-- Food menu management content -->
          </div>
        </div>
      </div>
      
      
<!DOCTYPE html>
<html lang="en">
<head>
  
  
   
</head>
<body>
    <div class="notification-container">
        <div class="notification" id="booking-confirmation">
          <h2>Booking Confirmation</h2>
          <p>Your booking has been successful!</p>
          <button class="btn-ok">OK</button>
        </div>
        <div class="notification" id="seat-availability-alert">
          <h2>Seat Availability Alert</h2>
          <p>Sorry, your selected seats are no longer available.</p>
          <button class="btn-ok">OK</button>
        </div>
      </div>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    
    

</head>
<body>
  

<div class="login-container">
  <form id="login-form">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username"><br><br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password"><br><br>
    <button id="login-btn">Login</button>
  </form>
</div>

</body>
</html>




