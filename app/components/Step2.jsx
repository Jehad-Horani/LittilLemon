import styles from './Step2.module.css';

export default function Step2({ data, updateForm }) {
  return (
    <div className={styles.step2}>
      <h2>Preorder</h2>
      <p>If you would like to preorder meals or drinks, please enter them below:</p>
      <textarea
        value={data.preorder}
        onChange={(e) => updateForm('preorder', e.target.value)}
        placeholder="e.g. 2x Caesar Salad, 1x Orange Juice"
        rows={6}
      />
    </div>
  );
}
