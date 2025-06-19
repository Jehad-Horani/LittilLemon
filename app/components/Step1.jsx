import styles from './Step1.module.css';

export default function Step1({ data, updateForm, errors }) {
    return (
        <div className={styles.step1}>
            <div className={styles.row}>
                <div className={styles.inputBox}>
                    <label>Pick a date</label>
                    <input
                        type="date"
                        value={data.date}
                        onChange={(e) => {
                            updateForm('date', e.target.value);
                        }}
                        className={errors.includes('date') ? styles.error : ''}
                    />
                </div>

                <div className={styles.inputBox}>
                    <label htmlFor="time">Pick duration time</label>
                    <select
                        value={data.duration}
                        onChange={(e) => updateForm('duration', e.target.value)}
                        className={errors.includes('duration') ? styles.error : ''}
                        aria-placeholder='Select duration'
                    >
                        <option value="">Select duration</option>
                        <option value="1">1 hour</option>
                        <option value="1.5">1.5 hours</option>
                        <option value="2">2 hours</option>
                    </select>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.inputBox}>
                    <label>Pick start time</label>
                    <input
                        type="time"
                        value={data.time}
                        onChange={(e) => updateForm('time', e.target.value)}
                        className={errors.includes('time') ? styles.error : ''}
                    />
                </div>

                <div className={styles.inputBox}>
                    <label>Occasion</label>
                    <select
                        value={data.occasion}
                        onChange={(e) => updateForm('occasion', e.target.value)}
                        className={errors.includes('occasion') ? styles.error : ''}
                    >
                        <option value="">Select occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="meeting">Business Meeting</option>
                        <option value="other">other.... Please write the occasion down</option>

                    </select>
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.inputBox}>
                    <label>Number of guests</label>
                    <input
                        type="number"
                        min="1"
                        max="20"
                        value={data.guests}
                        onChange={(e) => updateForm('guests', e.target.value)}
                        className={errors.includes('guests') ? styles.error : ''}
                    />
                </div>

                <div className={styles.inputBox}>
                    <label>Seating</label>
                    <div className={styles.radioGroup}>
                        <label>
                            <input
                                className={styles.radiobutten}
                                type="radio"
                                name="seating"
                                value="indoor"
                                checked={data.indoorOutdoor === 'indoor'}
                                onChange={() => updateForm('indoorOutdoor', 'indoor')}
                            />
                            Indoor
                        </label>
                        <label>
                            <input
                                className={styles.radiobutten}
                                type="radio"
                                name="seating"
                                value="outdoor"
                                checked={data.indoorOutdoor === 'outdoor'}
                                onChange={() => updateForm('indoorOutdoor', 'outdoor')}
                            />
                            Outdoor
                        </label>
                        {errors.includes('indoorOutdoor') && (
                            <div className={styles.errorText}>Please select a seating option.</div>
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.specialRequest}>
                <label>Add special request</label>
                <textarea
                    rows={3}
                    value={data.specialRequest}
                    onChange={(e) => updateForm('specialRequest', e.target.value)}
                />
            </div>
        </div>
    );
}
