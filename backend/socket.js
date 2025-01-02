const socketIo = require("socket.io");
const userModel = require("./models/user.model");
const captainModel = require("./models/captain.model");

let io;

function initializeSocket(server) {
  io = socketIo(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on("join", async (data) => {
      const { userId, userType } = data;

    //   console.log(`user ${userId} joined as ${userType}`);

      if (userType === "user") {
        await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
      } else if (userType === "captain") {
        await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
      }
    });

    socket.on("update-location-captain", async (data) => {
      const { userId, location } = data;
    
      if (!userId || !location || !location.ltd || !location.lng) {
          return socket.emit("error", { message: "Invalid location data" });
      }
  
      try {
          const updatedCaptain = await captainModel.findByIdAndUpdate(userId, {
              location: {
                  ltd: location.ltd,
                  lng: location.lng
              }
          }, { new: true });
      
          if (updatedCaptain) {
              // console.log('Location updated successfully', { userId, location });
          } else {
              console.error('Captain not found for userId:', userId);
              socket.emit("error", { message: "Captain not found" });
          }
      } catch (error) {
          console.error('Error updating location:', error);
          socket.emit("error", { message: "Error updating location" });
      }
  });
  

    socket.on("disconnect", () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
}

const sendMessageToSocketId = (socketId, messageObject) => {
  console.log(messageObject);

  if (io) {
    io.to(socketId).emit(messageObject.event, messageObject.data);
  } else {
    console.log("Socket.io not initialized.");
  }
};

module.exports = { initializeSocket, sendMessageToSocketId };
