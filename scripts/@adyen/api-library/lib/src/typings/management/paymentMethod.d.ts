import { AccelInfo } from './accelInfo';
import { AffirmInfo } from './affirmInfo';
import { AfterpayTouchInfo } from './afterpayTouchInfo';
import { AmexInfo } from './amexInfo';
import { ApplePayInfo } from './applePayInfo';
import { BcmcInfo } from './bcmcInfo';
import { CartesBancairesInfo } from './cartesBancairesInfo';
import { ClearpayInfo } from './clearpayInfo';
import { DinersInfo } from './dinersInfo';
import { GenericPmWithTdiInfo } from './genericPmWithTdiInfo';
import { GooglePayInfo } from './googlePayInfo';
import { JCBInfo } from './jCBInfo';
import { KlarnaInfo } from './klarnaInfo';
import { MealVoucherFRInfo } from './mealVoucherFRInfo';
import { NyceInfo } from './nyceInfo';
import { PayByBankPlaidInfo } from './payByBankPlaidInfo';
import { PayMeInfo } from './payMeInfo';
import { PayPalInfo } from './payPalInfo';
import { PayToInfo } from './payToInfo';
import { PulseInfo } from './pulseInfo';
import { SodexoInfo } from './sodexoInfo';
import { SofortInfo } from './sofortInfo';
import { StarInfo } from './starInfo';
import { SwishInfo } from './swishInfo';
import { TicketInfo } from './ticketInfo';
import { TwintInfo } from './twintInfo';
import { VippsInfo } from './vippsInfo';
import { WeChatPayInfo } from './weChatPayInfo';
import { WeChatPayPosInfo } from './weChatPayPosInfo';
export declare class PaymentMethod {
    'accel'?: AccelInfo | null;
    'affirm'?: AffirmInfo | null;
    'afterpayTouch'?: AfterpayTouchInfo | null;
    /**
    * Indicates whether receiving payments is allowed. This value is set to **true** by Adyen after screening your merchant account.
    */
    'allowed'?: boolean;
    'amex'?: AmexInfo | null;
    'applePay'?: ApplePayInfo | null;
    'bcmc'?: BcmcInfo | null;
    /**
    * The unique identifier of the business line. Required if you are a [platform model](https://docs.adyen.com/platforms).
    */
    'businessLineId'?: string;
    'cartesBancaires'?: CartesBancairesInfo | null;
    'clearpay'?: ClearpayInfo | null;
    /**
    * The list of countries where a payment method is available. By default, all countries supported by the payment method.
    */
    'countries'?: Array<string>;
    'cup'?: GenericPmWithTdiInfo | null;
    /**
    * The list of currencies that a payment method supports. By default, all currencies supported by the payment method.
    */
    'currencies'?: Array<string>;
    /**
    * The list of custom routing flags to route payment to the intended acquirer.
    */
    'customRoutingFlags'?: Array<string>;
    'diners'?: DinersInfo | null;
    'discover'?: GenericPmWithTdiInfo | null;
    'eft_directdebit_CA'?: GenericPmWithTdiInfo | null;
    'eftpos_australia'?: GenericPmWithTdiInfo | null;
    /**
    * Indicates whether the payment method is enabled (**true**) or disabled (**false**).
    */
    'enabled'?: boolean;
    'girocard'?: GenericPmWithTdiInfo | null;
    'googlePay'?: GooglePayInfo | null;
    /**
    * The identifier of the resource.
    */
    'id': string;
    'ideal'?: GenericPmWithTdiInfo | null;
    'interac_card'?: GenericPmWithTdiInfo | null;
    'jcb'?: JCBInfo | null;
    'klarna'?: KlarnaInfo | null;
    'maestro'?: GenericPmWithTdiInfo | null;
    'mc'?: GenericPmWithTdiInfo | null;
    'mealVoucher_FR'?: MealVoucherFRInfo | null;
    'nyce'?: NyceInfo | null;
    'paybybank_plaid'?: PayByBankPlaidInfo | null;
    'payme'?: PayMeInfo | null;
    'paypal'?: PayPalInfo | null;
    'payto'?: PayToInfo | null;
    'pulse'?: PulseInfo | null;
    /**
    * Your reference for the payment method. Supported characters a-z, A-Z, 0-9.
    */
    'reference'?: string;
    /**
    * The sales channel.
    */
    'shopperInteraction'?: string;
    'sodexo'?: SodexoInfo | null;
    'sofort'?: SofortInfo | null;
    'star'?: StarInfo | null;
    /**
    * The unique identifier of the store for which to configure the payment method, if any.
    */
    'storeIds'?: Array<string>;
    'swish'?: SwishInfo | null;
    'ticket'?: TicketInfo | null;
    'twint'?: TwintInfo | null;
    /**
    * Payment method [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api).
    */
    'type'?: string;
    /**
    * Payment method status. Possible values: * **valid** * **pending** * **invalid** * **rejected**
    */
    'verificationStatus'?: PaymentMethod.VerificationStatusEnum;
    'vipps'?: VippsInfo | null;
    'visa'?: GenericPmWithTdiInfo | null;
    'wechatpay'?: WeChatPayInfo | null;
    'wechatpay_pos'?: WeChatPayPosInfo | null;
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
    enum VerificationStatusEnum {
        Valid = "valid",
        Pending = "pending",
        Invalid = "invalid",
        Rejected = "rejected"
    }
}
