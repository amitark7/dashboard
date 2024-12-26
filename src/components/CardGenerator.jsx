import React from "react";

const CardGenerator = ({ selectedUser }) => {
  return (
    selectedUser && (
      <div
        id="user-card"
        style={{
          width: "600px",
          top: "-800%",
          height: "350px",
          backgroundColor: "#ffec52",
          border: "5px solid #b37700",
          margin: "20px auto",
          padding: "20px",
          position: "absolute",
          display: "visible",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#ff0000" }}>
          श्री श्री दुर्गा पूजा महोत्सव
        </h2>
        <p style={{ textAlign: "center", fontSize: "14px", color: "#555" }}>
          यह देवी महोत्सव शक्ति-कल्याण समर्पित |
        </p>
        <p style={{ textAlign: "center", color: "#ff0000", fontSize: "16px" }}>
          || Sarvjanik Durga Puja Bathauli ||
        </p>
        <p style={{ textAlign: "right", margin: "0", color: "#000" }}>
          दिनांक: {new Date().toLocaleDateString()}
        </p>

        <div
          style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
        >
          <img
            src="https://images.unsplash.com/photo-1479030160180-b1860951d696?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Durga Mata"
            style={{ width: "150px", height: "150px", marginRight: "20px" }}
          />
          <div>
            <p style={{ fontSize: "18px", margin: "5px 0" }}>
              <strong>नं॰:</strong> {selectedUser.id}
            </p>
            <p style={{ fontSize: "18px", margin: "5px 0" }}>
              <strong>नाम:</strong> {selectedUser.name}
            </p>
            <p style={{ fontSize: "18px", margin: "5px 0" }}>
              <strong>पता:</strong> {selectedUser.address}
            </p>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#ffd966",
            padding: "10px 20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ margin: 0 }}>₹ {selectedUser.amount} /-</h3>
        </div>
      </div>
    )
  );
};

export default CardGenerator;
