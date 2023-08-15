
import { useState } from 'react';
import { useEffect } from 'react';

const Verify = () => {
    const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState('');
  const [answer, setAnswer] = useState('');
  useEffect(() => {
    generateNumbers();
  }, []);

  const generateNumbers = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setNumber1(num1);
    setNumber2(num2);
    setResult('');
    setAnswer('');
  };

  const verifyAnswer = () => {
    const sum = number1 + number2;
    if (parseInt(answer) === sum) {
      setResult('Verification Successful!');
    } else {
      setResult('Verification Failed!');
    }
  };

  useEffect(() => {
    if (answer !== '') {
      verifyAnswer();
    }
  }, [answer]);
    return (
        <div className='flex grid-cols-1 pt-5 gap-4'>
      <h3 className='font-medium'> Are You Human?</h3>
      <p className='font-bold'>
        
        {number1} + {number2} = 
      </p>
      <input className='w-20 h-7'
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <p>{result}</p>
    </div>
    );
};

export default Verify;