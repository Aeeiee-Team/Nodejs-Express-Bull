const successResponse = (res, status, message, data) => {
    const response = { status:true, message, data}
    return res.status(status).json(response)
}

const errorHelper = (res, status, message) => {
    const response = { status:false, message}
    return res.status(status).json(response)
}

module.exports = { successResponse, errorHelper }