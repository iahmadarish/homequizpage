import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import lgoai from "../utils/ai.png"
import lgo from "../utils/lgoo.svg"

const OtpInput = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const navigate = useNavigate();

  // Check if OTP is complete
  useEffect(() => {
    const isOtpComplete = otp.every(value => value !== "");
    if (isOtpComplete) {
      // Wait for a short delay before navigation to show the last digit
      setTimeout(() => {
        navigate("/applying");
      }, 500);
    }
  }, [otp, navigate]);

  const handleChange = (value: any, index: any) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input field automatically
    if (value !== "" && index < 4) {
      document.getElementById(`otp-input-${index + 1}`)?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center text-center">
        <img
          src="/api/placeholder/48/48"
          alt="Robot"
          className="w-12 h-12 mb-4"
        />
        <h2 className="text-lg font-semibold">Nice to meet you, Imam! 🤝</h2>
        <p className="text-gray-700 mt-2">
          Please <span className="font-semibold">check your email</span> and enter the code below.
        </p>
      </div>
      
      <div className="flex space-x-3 mt-6">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            id={`otp-input-${index}`}
            value={value}
            onChange={(e) => handleChange(e.target.value, index)}
            className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl focus:outline-none focus:border-blue-500"
          />
        ))}
      </div>
    </div>
  );
};

export default OtpInput;