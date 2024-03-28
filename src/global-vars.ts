




export default {
    install(app: any, options: any) {
        app.config.globalProperties.$MyUrl = options.MyUrl;
    }
};