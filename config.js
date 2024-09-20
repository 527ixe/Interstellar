const config = {
  challenge: false, // Set to true if you want to enable password protection.
  blocked: {
    // Normal users can ignore this option. This is for the owner of the website.
    "gointerstellar.app": "",
    localhost: "",
  },
  users: {
    // You can add multiple users by doing username: 'password'.
    interstellar: "school123",
    admin: "jonathan12#3", 
    
  },
};

export default config;
