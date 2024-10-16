export default function ApiResponse(statusCode, message, data) {
    return {
        statusCode,
        data,
        message: message ? message : "success",
        success: statusCode < 400
    };
}