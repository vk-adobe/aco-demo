"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Adyen NodeJS API Library
 * Copyright (c) 2023 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
const typings_1 = require("../typings");
class ManagementWebhookHandler {
    constructor(jsonPayload) {
        this.payload = JSON.parse(jsonPayload);
    }
    // Return generic webhook type
    getGenericWebhook() {
        const type = this.payload["type"];
        if (Object.values(typings_1.managementWebhooks.MerchantCreatedNotificationRequest.TypeEnum).includes(type)) {
            return this.getMerchantCreatedNotificationRequest();
        }
        if (Object.values(typings_1.managementWebhooks.MerchantUpdatedNotificationRequest.TypeEnum).includes(type)) {
            return this.getMerchantUpdatedNotificationRequest();
        }
        if (Object.values(typings_1.managementWebhooks.PaymentMethodCreatedNotificationRequest.TypeEnum).includes(type)) {
            return this.getPaymentMethodCreatedNotificationRequest();
        }
        if (Object.values(typings_1.managementWebhooks.PaymentMethodRequestRemovedNotificationRequest.TypeEnum).includes(type)) {
            return this.getPaymentMethodRequestRemovedNotificationRequest();
        }
        if (Object.values(typings_1.managementWebhooks.PaymentMethodScheduledForRemovalNotificationRequest.TypeEnum).includes(type)) {
            return this.getPaymentMethodScheduledForRemovalNotificationRequest();
        }
        throw new Error("Could not parse the json payload: " + this.payload);
    }
    getMerchantCreatedNotificationRequest() {
        return typings_1.managementWebhooks.ObjectSerializer.deserialize(this.payload, "MerchantCreatedNotificationRequest");
    }
    getMerchantUpdatedNotificationRequest() {
        return typings_1.managementWebhooks.ObjectSerializer.deserialize(this.payload, "MerchantUpdatedNotificationRequest");
    }
    getPaymentMethodCreatedNotificationRequest() {
        return typings_1.managementWebhooks.ObjectSerializer.deserialize(this.payload, "PaymentMethodCreatedNotificationRequest");
    }
    getPaymentMethodRequestRemovedNotificationRequest() {
        return typings_1.managementWebhooks.ObjectSerializer.deserialize(this.payload, "PaymentMethodRequestRemovedNotificationRequest");
    }
    getPaymentMethodScheduledForRemovalNotificationRequest() {
        return typings_1.managementWebhooks.ObjectSerializer.deserialize(this.payload, "PaymentMethodScheduledForRemovalNotificationRequest");
    }
}
exports.default = ManagementWebhookHandler;
//# sourceMappingURL=managementWebhookHandler.js.map