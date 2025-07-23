export declare class Modification {
    /**
    * The direction of the money movement.
    */
    'direction'?: string;
    /**
    * Our reference for the modification.
    */
    'id'?: string;
    /**
    * Your reference for the modification, used internally within your platform.
    */
    'reference'?: string;
    /**
    * The status of the transfer event.
    */
    'status'?: Modification.StatusEnum;
    /**
    * The type of transfer modification.
    */
    'type'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace Modification {
    enum StatusEnum {
        ApprovalPending = "approvalPending",
        AtmWithdrawal = "atmWithdrawal",
        AtmWithdrawalReversalPending = "atmWithdrawalReversalPending",
        AtmWithdrawalReversed = "atmWithdrawalReversed",
        AuthAdjustmentAuthorised = "authAdjustmentAuthorised",
        AuthAdjustmentError = "authAdjustmentError",
        AuthAdjustmentRefused = "authAdjustmentRefused",
        Authorised = "authorised",
        BankTransfer = "bankTransfer",
        BankTransferPending = "bankTransferPending",
        Booked = "booked",
        BookingPending = "bookingPending",
        Cancelled = "cancelled",
        CapturePending = "capturePending",
        CaptureReversalPending = "captureReversalPending",
        CaptureReversed = "captureReversed",
        Captured = "captured",
        CapturedExternally = "capturedExternally",
        Chargeback = "chargeback",
        ChargebackExternally = "chargebackExternally",
        ChargebackPending = "chargebackPending",
        ChargebackReversalPending = "chargebackReversalPending",
        ChargebackReversed = "chargebackReversed",
        Credited = "credited",
        DepositCorrection = "depositCorrection",
        DepositCorrectionPending = "depositCorrectionPending",
        Dispute = "dispute",
        DisputeClosed = "disputeClosed",
        DisputeExpired = "disputeExpired",
        DisputeNeedsReview = "disputeNeedsReview",
        Error = "error",
        Expired = "expired",
        Failed = "failed",
        Fee = "fee",
        FeePending = "feePending",
        InternalTransfer = "internalTransfer",
        InternalTransferPending = "internalTransferPending",
        InvoiceDeduction = "invoiceDeduction",
        InvoiceDeductionPending = "invoiceDeductionPending",
        ManualCorrectionPending = "manualCorrectionPending",
        ManuallyCorrected = "manuallyCorrected",
        MatchedStatement = "matchedStatement",
        MatchedStatementPending = "matchedStatementPending",
        MerchantPayin = "merchantPayin",
        MerchantPayinPending = "merchantPayinPending",
        MerchantPayinReversed = "merchantPayinReversed",
        MerchantPayinReversedPending = "merchantPayinReversedPending",
        MiscCost = "miscCost",
        MiscCostPending = "miscCostPending",
        PaymentCost = "paymentCost",
        PaymentCostPending = "paymentCostPending",
        PendingApproval = "pendingApproval",
        PendingExecution = "pendingExecution",
        Received = "received",
        RefundPending = "refundPending",
        RefundReversalPending = "refundReversalPending",
        RefundReversed = "refundReversed",
        Refunded = "refunded",
        RefundedExternally = "refundedExternally",
        Refused = "refused",
        Rejected = "rejected",
        ReserveAdjustment = "reserveAdjustment",
        ReserveAdjustmentPending = "reserveAdjustmentPending",
        Returned = "returned",
        SecondChargeback = "secondChargeback",
        SecondChargebackPending = "secondChargebackPending",
        Undefined = "undefined"
    }
}
