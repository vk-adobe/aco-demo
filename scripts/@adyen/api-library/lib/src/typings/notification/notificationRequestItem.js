"use strict";
/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRequestItem = void 0;
class NotificationRequestItem {
    static getAttributeTypeMap() {
        return NotificationRequestItem.attributeTypeMap;
    }
}
exports.NotificationRequestItem = NotificationRequestItem;
NotificationRequestItem.discriminator = undefined;
NotificationRequestItem.attributeTypeMap = [
    {
        "name": "additionalData",
        "baseName": "additionalData",
        "type": "AdditionalData"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "Amount"
    },
    {
        "name": "pspReference",
        "baseName": "pspReference",
        "type": "string"
    },
    {
        "name": "eventCode",
        "baseName": "eventCode",
        "type": "NotificationRequestItem.EventCodeEnum"
    },
    {
        "name": "eventDate",
        "baseName": "eventDate",
        "type": "string"
    },
    {
        "name": "merchantAccountCode",
        "baseName": "merchantAccountCode",
        "type": "string"
    },
    {
        "name": "operations",
        "baseName": "operations",
        "type": "Array<NotificationRequestItem.OperationsEnum>"
    },
    {
        "name": "merchantReference",
        "baseName": "merchantReference",
        "type": "string"
    },
    {
        "name": "originalReference",
        "baseName": "originalReference",
        "type": "string"
    },
    {
        "name": "paymentMethod",
        "baseName": "paymentMethod",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    },
    {
        "name": "success",
        "baseName": "success",
        "type": "NotificationRequestItem.SuccessEnum"
    }
];
(function (NotificationRequestItem) {
    let EventCodeEnum;
    (function (EventCodeEnum) {
        EventCodeEnum["Autorescue"] = "AUTORESCUE";
        EventCodeEnum["Authorisation"] = "AUTHORISATION";
        EventCodeEnum["AuthorisationAdjustment"] = "AUTHORISATION_ADJUSTMENT";
        EventCodeEnum["CancelAutorescue"] = "CANCEL_AUTORESCUE";
        EventCodeEnum["Cancellation"] = "CANCELLATION";
        EventCodeEnum["CancelOrRefund"] = "CANCEL_OR_REFUND";
        EventCodeEnum["Capture"] = "CAPTURE";
        EventCodeEnum["CaptureFailed"] = "CAPTURE_FAILED";
        EventCodeEnum["Chargeback"] = "CHARGEBACK";
        EventCodeEnum["ChargebackReversed"] = "CHARGEBACK_REVERSED";
        EventCodeEnum["Donation"] = "DONATION";
        EventCodeEnum["Expire"] = "EXPIRE";
        EventCodeEnum["HandledExternally"] = "HANDLED_EXTERNALLY";
        EventCodeEnum["IssuerComments"] = "ISSUER_COMMENTS";
        EventCodeEnum["ManualReviewAccept"] = "MANUAL_REVIEW_ACCEPT";
        EventCodeEnum["ManualReviewReject"] = "MANUAL_REVIEW_REJECT";
        EventCodeEnum["NotificationOfChargeback"] = "NOTIFICATION_OF_CHARGEBACK";
        EventCodeEnum["NotificationOfFraud"] = "NOTIFICATION_OF_FRAUD";
        EventCodeEnum["OfferClosed"] = "OFFER_CLOSED";
        EventCodeEnum["OrderClosed"] = "ORDER_CLOSED";
        EventCodeEnum["OrderOpened"] = "ORDER_OPENED";
        EventCodeEnum["PaidoutReversed"] = "PAIDOUT_REVERSED";
        EventCodeEnum["Pending"] = "PENDING";
        EventCodeEnum["PostponedRefund"] = "POSTPONED_REFUND";
        EventCodeEnum["PrearbitrationLost"] = "PREARBITRATION_LOST";
        EventCodeEnum["PrearbitrationWon"] = "PREARBITRATION_WON";
        EventCodeEnum["ProcessRetry"] = "PROCESS_RETRY";
        EventCodeEnum["PayoutDecline"] = "PAYOUT_DECLINE";
        EventCodeEnum["PayoutExpire"] = "PAYOUT_EXPIRE";
        EventCodeEnum["PayoutThirdparty"] = "PAYOUT_THIRDPARTY";
        EventCodeEnum["RecurringContract"] = "RECURRING_CONTRACT";
        EventCodeEnum["Refund"] = "REFUND";
        EventCodeEnum["RefundFailed"] = "REFUND_FAILED";
        EventCodeEnum["RefundedReversed"] = "REFUNDED_REVERSED";
        EventCodeEnum["RefundWithData"] = "REFUND_WITH_DATA";
        EventCodeEnum["ReportAvailable"] = "REPORT_AVAILABLE";
        EventCodeEnum["RequestForInformation"] = "REQUEST_FOR_INFORMATION";
        EventCodeEnum["SecondChargeback"] = "SECOND_CHARGEBACK";
        EventCodeEnum["TechnicalCancel"] = "TECHNICAL_CANCEL";
        EventCodeEnum["VoidPendingRefund"] = "VOID_PENDING_REFUND";
    })(EventCodeEnum = NotificationRequestItem.EventCodeEnum || (NotificationRequestItem.EventCodeEnum = {}));
    let OperationsEnum;
    (function (OperationsEnum) {
        OperationsEnum["Cancel"] = "CANCEL";
        OperationsEnum["Capture"] = "CAPTURE";
        OperationsEnum["Refund"] = "REFUND";
    })(OperationsEnum = NotificationRequestItem.OperationsEnum || (NotificationRequestItem.OperationsEnum = {}));
    let SuccessEnum;
    (function (SuccessEnum) {
        SuccessEnum["True"] = "true";
        SuccessEnum["False"] = "false";
    })(SuccessEnum = NotificationRequestItem.SuccessEnum || (NotificationRequestItem.SuccessEnum = {}));
})(NotificationRequestItem = exports.NotificationRequestItem || (exports.NotificationRequestItem = {}));
//# sourceMappingURL=notificationRequestItem.js.map