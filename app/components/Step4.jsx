import styles from './Step4.module.css';

export default function Step4({ data, updateForm }) {
  return (
    <div className={styles.step4}>
      <h3>Payment Method</h3>
      <div className={styles.field}>
        <label>Select a payment option</label>
        <select
          value={data.paymentMethod}
          onChange={(e) => updateForm('paymentMethod', e.target.value)}
        >
          <option value="">-- Choose --</option>
          <option value="credit">Credit Card</option>
          <option value="cash">Cash</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>
    </div>
  );
}
