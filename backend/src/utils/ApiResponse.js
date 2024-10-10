export default function ApiResponse(statusCode, data, message = "success") {
    return {
        statusCode,
        data,
        message,
        success: statusCode < 400
    };
}