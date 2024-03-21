import React from "react";

const TestPage = () => {
  const handleForm = async (formData) => {
    "use server";

    const username = formData.get("name");
  };

  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="name" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default TestPage;
