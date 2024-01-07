const authService = {
    isAuthenticated: false,
  
    login: async (username, password) => {
      try {
        // Make API call to login endpoint
        const response = await fetch('http://localhost:8080/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        if (response.ok) {
          // Login successful
          authService.isAuthenticated = true;
          return true;
        } else {
          // Login failed
          return false;
        }
      } catch (error) {
        console.error('Error during login:', error);
        return false;
      }
    },
  
    logout: () => {
      // Perform any necessary cleanup
      authService.isAuthenticated = false;
    },
  };
  
  export default authService;