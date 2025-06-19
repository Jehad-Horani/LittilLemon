'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './reservation.module.css';

import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import Step4 from '../components/Step4';

import Footersec from '../components/Footer';

export default function ReservationPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState([]);

 

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    duration: '',
    occasion: '',
    specialRequest: '',
    indoorOutdoor: '',
    preorder: '',
    name: '',
    email: '',
    phone: '',
    paymentMethod: '',
  });

  const requiredFieldsByStep = {
    1: ['date', 'time', 'guests', 'duration', 'occasion', 'indoorOutdoor'],
    2: [],
    3: ['name', 'email', 'phone'],
    4: ['paymentMethod']
  };

  const updateForm = (field, value) => {
    setFormData({ ...formData, [field]: value });

    // Remove error when user types
    if (errors.includes(field) && value.trim() !== '') {
      setErrors(errors.filter(err => err !== field));
    }
  };

  const nextStep = () => {
    const currentRequired = requiredFieldsByStep[step];
    const emptyFields = currentRequired.filter(field =>
      !formData[field] || formData[field].toString().trim() === ''
    );

    if (emptyFields.length > 0) {
      setErrors(emptyFields);
      alert('Please fill in all required fields before proceeding.');
      return;
    }

    setErrors([]);
    setStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    console.log('Reservation Submitted:', formData);
    console.table(formData);
    alert('Reservation submitted successfully!');
    router.push('/');
  };

  return (
    <div>
      <div className={styles.container}>
        {/* العنوان */}
        <div className={styles.header}>
          <h1>Reserve a table</h1>
          <hr />
          <p>
            Table reservation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>
        </div>

        {/* خطوات التنقل */}
        <div className={styles.steps}>
          <span className={step === 1 ? styles.activeStep : ''}>1. FIND A TABLE</span>
          <span className={step === 2 ? styles.activeStep : ''}>2. PREORDER</span>
          <span className={step === 3 ? styles.activeStep : ''}>3. YOUR DETAILS</span>
          <span className={step === 4 ? styles.activeStep : ''}>4. PAYMENT</span>
        </div>

        {/* محتوى كل خطوة */}
        <div className={styles.stepContent}>
          {step === 1 && <Step1 data={formData} updateForm={updateForm} errors={errors} />}
          {step === 2 && <Step2 data={formData} updateForm={updateForm} errors={errors} />}
          {step === 3 && <Step3 data={formData} updateForm={updateForm} errors={errors} />}
          {step === 4 && <Step4 data={formData} updateForm={updateForm} errors={errors} />}
        </div>

        {/* أزرار التنقل */}
        <div className={styles.navButtons}>
          <button onClick={prevStep} disabled={step === 1}>←</button>
          <button onClick={nextStep} disabled={step === 4}>→</button>
        </div>
        <br />

        {/* زر الإرسال */}
        {step === 4 && (
          <div className={styles.submitBtnContainer}>
            <button onClick={handleSubmit} className={styles.submitBtn}>
              Submit Reservation
            </button>
          </div>
        )}
      </div>
      <br />
      <Footersec />
    </div>
  );
}
