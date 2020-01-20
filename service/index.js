if (process.server) {
    config.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}

