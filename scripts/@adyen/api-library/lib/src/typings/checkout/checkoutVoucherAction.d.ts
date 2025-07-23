import { Amount } from './amount';
export declare class CheckoutVoucherAction {
    /**
    * The voucher alternative reference code.
    */
    'alternativeReference'?: string;
    /**
    * A collection institution number (store number) for Econtext Pay-Easy ATM.
    */
    'collectionInstitutionNumber'?: string;
    /**
    * The URL to download the voucher.
    */
    'downloadUrl'?: string;
    /**
    * An entity number of Multibanco.
    */
    'entity'?: string;
    /**
    * The date time of the voucher expiry.
    */
    'expiresAt'?: string;
    'initialAmount'?: Amount | null;
    /**
    * The URL to the detailed instructions to make payment using the voucher.
    */
    'instructionsUrl'?: string;
    /**
    * The issuer of the voucher.
    */
    'issuer'?: string;
    /**
    * The shopper telephone number (partially masked).
    */
    'maskedTelephoneNumber'?: string;
    /**
    * The merchant name.
    */
    'merchantName'?: string;
    /**
    * The merchant reference.
    */
    'merchantReference'?: string;
    /**
    * A Base64-encoded token containing all properties of the voucher. For iOS, you can use this to pass a voucher to Apple Wallet.
    */
    'passCreationToken'?: string;
    /**
    * Encoded payment data.
    */
    'paymentData'?: string;
    /**
    * Specifies the payment method.
    */
    'paymentMethodType'?: string;
    /**
    * The voucher reference code.
    */
    'reference'?: string;
    /**
    * The shopper email.
    */
    'shopperEmail'?: string;
    /**
    * The shopper name.
    */
    'shopperName'?: string;
    'surcharge'?: Amount | null;
    'totalAmount'?: Amount | null;
    /**
    * **voucher**
    */
    'type': CheckoutVoucherAction.TypeEnum;
    /**
    * Specifies the URL to redirect to.
    */
    'url'?: string;
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
export declare namespace CheckoutVoucherAction {
    enum TypeEnum {
        Voucher = "voucher"
    }
}
