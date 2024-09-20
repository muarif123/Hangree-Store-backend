class ApiResponse {
    constructor(status, message, data) {
      this.status = status;
      this.success = status=="success" ? true : false ;
      this.message = message;
      this.data = data || null;
    }
  
    send(res) {
      res.json({
        status: this.status,
        success: this.success,
        message: this.message,
        data: this.data
      });
    }
  }

  module.exports = ApiResponse;
  