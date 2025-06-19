import styles from './Step3.module.css';

export default function Step3({ data, updateForm, errors }) {
  return (
    <div className={styles.step3}>
      <h3>Your Details</h3>

      <div className={styles.field}>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={data.name}
          onChange={(e) => updateForm('name', e.target.value)}
          className={errors.includes('name') ? styles.error : ''}

        />
      </div>

      <div className={styles.field}>
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={data.email}
          onChange={(e) => updateForm('email', e.target.value)}
          className={errors.includes('email') ? styles.error : ''}

        />
      </div>

      <div className={styles.field}>
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Optional"
          value={data.phone || ''}
          onChange={(e) => updateForm('phone', e.target.value)}
          className={errors.includes('phone') ? styles.error : ''}
        />
      </div>
    </div>
  );
}
