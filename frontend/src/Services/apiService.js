const BASE_URL = 'http://localhost:4000'; 

const apiService = {
  initiatePayment: async (orderId) => {
    try {
      const response = await fetch(`${BASE_URL}/payment/pay`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ orderId })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to initiate payment');
    }
  },
  getOrderStatus: async (orderId) => {
    try {
      const response = await fetch(`${BASE_URL}/order/${orderId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch order status');
    }
  },
  generateBill: async (orderId) => {
    try {
      const response = await fetch(`${BASE_URL}/order/${orderId}/generate-bill`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to generate bill');
    }
  },
  updateOrderStatus: async (orderId, status) => {
    try {
      const response = await fetch(`${BASE_URL}/order/${orderId}/update-status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to update order status');
    }
  }
};

export default apiService;
