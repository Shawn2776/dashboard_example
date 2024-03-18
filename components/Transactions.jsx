import Image from "next/image";
import React from "react";

const Transactions = () => {
  return (
    <div className="p-5 mt-5 rounded-lg bg-bgSoft">
      <h2 className="mb-5 font-extralight text-textSoft">
        Latest Transactions
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <Image
                  src="/noavatar2.png"
                  alt="avatar"
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td>
              <span className="p-2 text-sm rounded-lg text-text bg-pending">
                Pending
              </span>
            </td>
            <td>02.14.2024</td>
            <td>$3,200.00</td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <Image
                  src="/noavatar2.png"
                  alt="avatar"
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td>
              <span className="p-2 text-sm rounded-lg text-text bg-approved">
                Approved
              </span>
            </td>
            <td>02.14.2024</td>
            <td>$3,200.00</td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <Image
                  src="/noavatar2.png"
                  alt="avatar"
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td>
              <span className="p-2 text-sm rounded-lg text-text bg-canceled">
                Canceled
              </span>
            </td>
            <td>02.14.2024</td>
            <td>$3,200.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
