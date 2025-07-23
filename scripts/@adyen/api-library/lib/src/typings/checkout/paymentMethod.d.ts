import { InputDetail } from './inputDetail';
import { PaymentMethodGroup } from './paymentMethodGroup';
import { PaymentMethodIssuer } from './paymentMethodIssuer';
import { PaymentMethodUPIApps } from './paymentMethodUPIApps';
export declare class PaymentMethod {
    /**
    * A list of apps for this payment method.
    */
    'apps'?: Array<PaymentMethodUPIApps>;
    /**
    * Brand for the selected gift card. For example: plastix, hmclub.
    */
    'brand'?: string;
    /**
    * List of possible brands. For example: visa, mc.
    */
    'brands'?: Array<string>;
    /**
    * The configuration of the payment method.
    */
    'configuration'?: {
        [key: string]: string;
    };
    /**
    * The funding source of the payment method.
    */
    'fundingSource'?: PaymentMethod.FundingSourceEnum;
    'group'?: PaymentMethodGroup | null;
    /**
    * All input details to be provided to complete the payment with this payment method.
    *
    * @deprecated
    */
    'inputDetails'?: Array<InputDetail>;
    /**
    * A list of issuers for this payment method.
    */
    'issuers'?: Array<PaymentMethodIssuer>;
    /**
    * The displayable name of this payment method.
    */
    'name'?: string;
    /**
    * The unique payment method code.
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
export declare namespace PaymentMethod {
    enum FundingSourceEnum {
        Credit = "credit",
        Debit = "debit"
    }
}
