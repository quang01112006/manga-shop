import "./Cart.css";
export default function Cart({ cartItems, removeFromCart }) {
  return (
    <>
      <div className="cart-container">
        <p>My Cart</p>
        <div className="cart-table">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Cover</th>
                <th>Title</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => (
                <tr key={item.id}>
                  <td>{idx + 1}</td>
                  <td>
                    <img src={item.cover} width="50" />
                  </td>
                  <td className="bookTitle">{item.title}</td>
                  <td className="bookQuantity">{item.quantity}</td>
                  <td className="bookPrice">
                    {item.price.toLocaleString("vi-VN")}₫
                  </td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
