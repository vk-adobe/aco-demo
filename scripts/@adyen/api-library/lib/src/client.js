"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const httpURLConnectionClient_1 = __importDefault(require("./httpClient/httpURLConnectionClient"));
class Client {
    constructor(options) {
        var _a, _b;
        if (options.config) {
            this.config = options.config;
        }
        else {
            this.config = new config_1.default();
        }
        this.liveEndpointUrlPrefix = (_a = options.liveEndpointUrlPrefix) !== null && _a !== void 0 ? _a : "";
        const environment = (_b = options.environment) !== null && _b !== void 0 ? _b : this.config.environment;
        if (environment) {
            this.setEnvironment(environment, options.liveEndpointUrlPrefix);
            if (options.username && options.password) {
                this.config.username = options.username;
                this.config.password = options.password;
                if (options.applicationName) {
                    this.config.applicationName = options.applicationName;
                }
            }
            if (options.apiKey) {
                this.config.apiKey = options.apiKey;
            }
        }
        if (options.httpClient) {
            this._httpClient = options.httpClient;
        }
    }
    setEnvironment(environment, liveEndpointUrlPrefix) {
        // ensure environment and liveUrlPrefix is set in config
        this.config.environment = environment;
        this.liveEndpointUrlPrefix = liveEndpointUrlPrefix !== null && liveEndpointUrlPrefix !== void 0 ? liveEndpointUrlPrefix : "";
        if (environment === "TEST") {
            this.config.marketPayEndpoint = Client.MARKETPAY_ENDPOINT_TEST;
            this.config.terminalApiCloudEndpoint = Client.TERMINAL_API_ENDPOINT_TEST;
        }
        else if (environment === "LIVE") {
            this.config.marketPayEndpoint = Client.MARKETPAY_ENDPOINT_LIVE;
            this.config.terminalApiCloudEndpoint = Client.TERMINAL_API_ENDPOINT_LIVE;
        }
    }
    get httpClient() {
        if (!this._httpClient) {
            this._httpClient = new httpURLConnectionClient_1.default();
        }
        return this._httpClient;
    }
    set httpClient(httpClient) {
        this._httpClient = httpClient;
    }
    setApplicationName(applicationName) {
        this.config.applicationName = applicationName;
    }
    setTimeouts(connectionTimeoutMillis) {
        this.config.connectionTimeoutMillis = connectionTimeoutMillis;
    }
}
Client.MARKETPAY_ENDPOINT_TEST = "https://cal-test.adyen.com/cal/services";
Client.MARKETPAY_ENDPOINT_LIVE = "https://cal-live.adyen.com/cal/services";
Client.MARKETPAY_ACCOUNT_API_VERSION = "v6";
Client.MARKETPAY_FUND_API_VERSION = "v6";
Client.MARKETPAY_HOP_API_VERSION = "v6";
Client.MARKETPAY_NOTIFICATION_API_VERSION = "v5";
Client.MARKETPAY_NOTIFICATION_CONFIGURATION_API_VERSION = "v6";
Client.TERMINAL_API_ENDPOINT_TEST = "https://terminal-api-test.adyen.com";
Client.TERMINAL_API_ENDPOINT_LIVE = "https://terminal-api-live.adyen.com";
exports.default = Client;
//# sourceMappingURL=client.js.map