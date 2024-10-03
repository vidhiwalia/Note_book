// import React, { useState } from 'react';

// const Chatbot = () => {
//   const [showChatbot, setShowChatbot] = useState(true);

//   // const toggleChatbot = () => {
//   //   setShowChatbot(!showChatbot);
//   // };

//   return (
//     <div>
//       {/* Button to open/close chatbot */}
//       {/* <button onClick={toggleChatbot}>
//         {showChatbot ? 'Close Chatbot' : 'Open Chatbot'}
//       </button> */}

//       {/* Display chatbot in iframe if showChatbot is true */}
//       {showChatbot && (
//         <iframe
//           src="http://localhost:4000" // The port where your chatbot is running
//           title="Chatbot"
//           style={{
//             width: '400px', // Adjust width as needed
//             height: '600px', // Adjust height as needed
//             border: 'none',
//             position: 'center',
//             bottom: '10px',
//             right: '10px',
//             zIndex: '1000',

//           }}
//         ></iframe>
//       )}
//     </div>
//   );
// };

// export default Chatbot;



import React, { useState } from 'react';

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(true);

  // const toggleChatbot = () => {
  //   setShowChatbot(!showChatbot);
  // };

  return (
    <div>
      {/* Button to open/close chatbot */}
      {/*<button onClick={toggleChatbot} style={{ margin: '20px' }}>
        {showChatbot ? 'Close Chatbot' : 'Open Chatbot'}
      </button>*/}

      {/* Display chatbot in iframe if showChatbot is true */}
      {showChatbot && (
        <div style={styles.chatbotContainer}>
          <iframe
            src="http://localhost:4000" // Replace with your chatbot URL
            title="Chatbot"
            style={styles.iframe}
          ></iframe>
        </div>
      )}
    </div>
  );
};

const styles = {
  chatbotContainer: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', // Centers the iframe horizontally and vertically
    zIndex: '1000', // Ensures the chatbot is above other content
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iframe: {
    width: '500px', // Adjust width as needed
    height: '500px', // Adjust height as needed
    border: 'none',
  },
};

export default Chatbot;
