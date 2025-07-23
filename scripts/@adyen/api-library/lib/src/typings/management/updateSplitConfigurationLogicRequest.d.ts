import { AdditionalCommission } from './additionalCommission';
import { Commission } from './commission';
export declare class UpdateSplitConfigurationLogicRequest {
    /**
    * Deducts the acquiring fees (the aggregated amount of interchange and scheme fee) from the specified balance account.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'acquiringFees'?: UpdateSplitConfigurationLogicRequest.AcquiringFeesEnum;
    'additionalCommission'?: AdditionalCommission | null;
    /**
    * Deducts the transaction fee due to Adyen under [blended rates](https://www.adyen.com/knowledge-hub/guides/payments-training-guide/get-the-best-from-your-card-processing) from the specified balance account.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'adyenCommission'?: UpdateSplitConfigurationLogicRequest.AdyenCommissionEnum;
    /**
    * Deducts the fees due to Adyen (markup or commission) from the specified balance account.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'adyenFees'?: UpdateSplitConfigurationLogicRequest.AdyenFeesEnum;
    /**
    * Deducts the transaction fee due to Adyen under [Interchange ++ pricing](https://www.adyen.com/what-is-interchange) from the specified balance account.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'adyenMarkup'?: UpdateSplitConfigurationLogicRequest.AdyenMarkupEnum;
    /**
    * Specifies how and from which balance account(s) to deduct the chargeback amount.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**, **deductAccordingToSplitRatio**.
    */
    'chargeback'?: UpdateSplitConfigurationLogicRequest.ChargebackEnum;
    /**
    * Deducts the chargeback costs from the specified balance account.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**
    */
    'chargebackCostAllocation'?: UpdateSplitConfigurationLogicRequest.ChargebackCostAllocationEnum;
    'commission': Commission;
    /**
    * Deducts the interchange fee from specified balance account.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'interchange'?: UpdateSplitConfigurationLogicRequest.InterchangeEnum;
    /**
    * Deducts all transaction fees incurred by the payment from the specified balance account. The transaction fees include the acquiring fees (interchange and scheme fee), and the fees due to Adyen (markup or commission). You can book any and all these fees to different balance account by specifying other transaction fee parameters in your split configuration profile:  - [`adyenCommission`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-adyenCommission): The transaction fee due to Adyen under [blended rates](https://www.adyen.com/knowledge-hub/interchange-fees-explained#interchange-vs-blended). - [`adyenMarkup`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-adyenMarkup): The transaction fee due to Adyen under [Interchange ++ pricing](https://www.adyen.com/knowledge-hub/interchange-fees-explained#interchange-vs-blended). - [`schemeFee`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-schemeFee): The fee paid to the card scheme for using their network. - [`interchange`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-interchange): The fee paid to the issuer for each payment transaction made with the card network. - [`adyenFees`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-adyenFees): The aggregated amount of Adyen\'s commission and markup. - [`acquiringFees`](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/splitConfigurations#request-rules-splitLogic-acquiringFees): The aggregated amount of the interchange and scheme fees.  If you don\'t include at least one transaction fee type in the `splitLogic` object, Adyen updates the payment request with the `paymentFee` parameter, booking all transaction fees to your platform\'s liable balance account.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'paymentFee'?: UpdateSplitConfigurationLogicRequest.PaymentFeeEnum;
    /**
    * Specifies how and from which balance account(s) to deduct the refund amount.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**, **deductAccordingToSplitRatio**
    */
    'refund'?: UpdateSplitConfigurationLogicRequest.RefundEnum;
    /**
    * Deducts the refund costs from the specified balance account.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**
    */
    'refundCostAllocation'?: UpdateSplitConfigurationLogicRequest.RefundCostAllocationEnum;
    /**
    * Books the amount left over after currency conversion to the specified balance account.  Possible values: **addToLiableAccount**, **addToOneBalanceAccount**.
    */
    'remainder'?: UpdateSplitConfigurationLogicRequest.RemainderEnum;
    /**
    * Deducts the scheme fee from the specified balance account.  Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
    */
    'schemeFee'?: UpdateSplitConfigurationLogicRequest.SchemeFeeEnum;
    /**
    * Unique identifier of the collection of split instructions that are applied when the rule conditions are met.
    */
    'splitLogicId'?: string;
    /**
    * Books the surcharge amount to the specified balance account.  Possible values: **addToLiableAccount**, **addToOneBalanceAccount**
    */
    'surcharge'?: UpdateSplitConfigurationLogicRequest.SurchargeEnum;
    /**
    * Books the tips (gratuity) to the specified balance account.  Possible values: **addToLiableAccount**, **addToOneBalanceAccount**.
    */
    'tip'?: UpdateSplitConfigurationLogicRequest.TipEnum;
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
export declare namespace UpdateSplitConfigurationLogicRequest {
    enum AcquiringFeesEnum {
        DeductFromLiableAccount = "deductFromLiableAccount",
        DeductFromOneBalanceAccount = "deductFromOneBalanceAccount"
    }
    enum AdyenCommissionEnum {
        DeductFromLiableAccount = "deductFromLiableAccount",
        DeductFromOneBalanceAccount = "deductFromOneBalanceAccount"
    }
    enum AdyenFeesEnum {
        DeductFromLiableAccount = "deductFromLiableAccount",
        DeductFromOneBalanceAccount = "deductFromOneBalanceAccount"
    }
    enum AdyenMarkupEnum {
        DeductFromLiableAccount = "deductFromLiableAccount",
        DeductFromOneBalanceAccount = "deductFromOneBalanceAccount"
    }
    enum ChargebackEnum {
        DeductFromLiableAccount = "deductFromLiableAccount",
        DeductFromOneBalanceAccount = "deductFromOneBalanceAccount",
        DeductAccordingToSplitRatio = "deductAccordingToSplitRatio"
    }
    enum ChargebackCostAllocationEnum {
        DeductFromLiableAccount = "deductFromLiableAccount",
        DeductFromOneBalanceAccount = "deductFromOneBalanceAccount"
    }
    enum InterchangeEnum {
        DeductFromLiableAccount = "deductFromLiableAccount",
        DeductFromOneBalanceAccount = "deductFromOneBalanceAccount"
    }
    enum PaymentFeeEnum {
        DeductFromLiableAccount = "deductFromLiableAccount",
        DeductFromOneBalanceAccount = "deductFromOneBalanceAccount"
    }
    enum RefundEnum {
        DeductFromLiableAccount = "deductFromLiableAccount",
        DeductFromOneBalanceAccount = "deductFromOneBalanceAccount",
        DeductAccordingToSplitRatio = "deductAccordingToSplitRatio"
    }
    enum RefundCostAllocationEnum {
        DeductFromLiableAccount = "deductFromLiableAccount",
        DeductFromOneBalanceAccount = "deductFromOneBalanceAccount"
    }
    enum RemainderEnum {
        AddToLiableAccount = "addToLiableAccount",
        AddToOneBalanceAccount = "addToOneBalanceAccount"
    }
    enum SchemeFeeEnum {
        DeductFromLiableAccount = "deductFromLiableAccount",
        DeductFromOneBalanceAccount = "deductFromOneBalanceAccount"
    }
    enum SurchargeEnum {
        AddToLiableAccount = "addToLiableAccount",
        AddToOneBalanceAccount = "addToOneBalanceAccount"
    }
    enum TipEnum {
        AddToLiableAccount = "addToLiableAccount",
        AddToOneBalanceAccount = "addToOneBalanceAccount"
    }
}
