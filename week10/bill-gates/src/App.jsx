import { useMemo, useState } from "react";
import { PRODUCTS } from "./products";
import { formatMoney } from "./utils";
import "./styles.css";

const START_BALANCE = 100_000_000_000; // $100B

export default function App() {
  const [cart, setCart] = useState(() =>
    Object.fromEntries(PRODUCTS.map((p) => [p.id, 0]))
  );
  const spent = useMemo(
    () => PRODUCTS.reduce((s, p) => s + cart[p.id] * p.price, 0),
    [cart]
  );
  const balance = START_BALANCE - spent;

  const buy = (id, qty = 1) => {
    const p = PRODUCTS.find((p) => p.id === id);
    if (!p || p.price * qty > balance) return; // yeterli bakiye yoksa engelle
    setCart((c) => ({ ...c, [id]: c[id] + qty }));
  };

  const sell = (id, qty = 1) => {
    setCart((c) => {
      const have = c[id];
      if (have <= 0) return c; // hiç yoksa engelle
      const next = Math.max(0, have - qty);
      return { ...c, [id]: next };
    });
  };

  return (
    <div className="wrap">
      <header className="topbar">{formatMoney(balance)}</header>

      <main className="grid">
        {PRODUCTS.map((p) => {
          const count = cart[p.id];
          const canSell = count > 0;
          const canBuy = p.price <= balance;

          return (
            <div key={p.id} className="card">
              <div className="title">{p.name}</div>
              <div className="price">{formatMoney(p.price)}</div>

              <div className="actions">
                <button
                  className="sell"
                  disabled={!canSell}
                  onClick={() => sell(p.id)}
                >
                  Sell
                </button>

                <input className="qty" value={count} readOnly />

                <button
                  className="buy"
                  disabled={!canBuy}
                  onClick={() => buy(p.id)}
                >
                  Buy
                </button>
              </div>
            </div>
          );
        })}
      </main>

      <section className="receipt">
        <h2>Your Receipt</h2>
        <ul>
          {PRODUCTS.filter((p) => cart[p.id] > 0).map((p) => (
            <li key={p.id}>
              <span>{p.name}</span>
              <span className="muted">x{cart[p.id]}</span>
              <span className="amount">
                {formatMoney(cart[p.id] * p.price)}
              </span>
            </li>
          ))}
        </ul>
        <div className="total">
          <span>TOTAL</span>
          <span>{formatMoney(spent)}</span>
        </div>
      </section>
    </div>
  );
}
