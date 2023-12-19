import React from "react";

const PhoneNumberFormatter = ({ phoneNumber }) => {
    if (phoneNumber && phoneNumber.length > 1 && phoneNumber[0] === "0") {
        phoneNumber = phoneNumber.slice(1);
    }

    // Tambahkan awalan '62' ke nomor telepon
    const newPhoneNumber = "62" + phoneNumber;

    return <span>{newPhoneNumber}</span>;
};

export default PhoneNumberFormatter;
