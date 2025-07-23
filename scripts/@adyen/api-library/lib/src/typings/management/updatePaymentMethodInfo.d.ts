import { AccelInfo } from './accelInfo';
import { BcmcInfo } from './bcmcInfo';
import { CartesBancairesInfo } from './cartesBancairesInfo';
import { GenericPmWithTdiInfo } from './genericPmWithTdiInfo';
import { NyceInfo } from './nyceInfo';
import { PayByBankPlaidInfo } from './payByBankPlaidInfo';
import { PulseInfo } from './pulseInfo';
import { StarInfo } from './starInfo';
export declare class UpdatePaymentMethodInfo {
    'accel'?: AccelInfo | null;
    'bcmc'?: BcmcInfo | null;
    'cartesBancaires'?: CartesBancairesInfo | null;
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
    * Custom routing flags for acquirer routing.
    */
    'customRoutingFlags'?: Array<string>;
    'diners'?: GenericPmWithTdiInfo | null;
    'discover'?: GenericPmWithTdiInfo | null;
    'eft_directdebit_CA'?: GenericPmWithTdiInfo | null;
    'eftpos_australia'?: GenericPmWithTdiInfo | null;
    /**
    * Indicates whether the payment method is enabled (**true**) or disabled (**false**).
    */
    'enabled'?: boolean;
    'girocard'?: GenericPmWithTdiInfo | null;
    'ideal'?: GenericPmWithTdiInfo | null;
    'interac_card'?: GenericPmWithTdiInfo | null;
    'jcb'?: GenericPmWithTdiInfo | null;
    'maestro'?: GenericPmWithTdiInfo | null;
    'mc'?: GenericPmWithTdiInfo | null;
    'nyce'?: NyceInfo | null;
    'paybybank_plaid'?: PayByBankPlaidInfo | null;
    'pulse'?: PulseInfo | null;
    'star'?: StarInfo | null;
    /**
    * The store for this payment method
    */
    'storeId'?: string;
    /**
    * The list of stores for this payment method
    *
    * @deprecated since Management API v3
    * Use `storeId` instead. Only one store per payment method is allowed.
    */
    'storeIds'?: Array<string>;
    'visa'?: GenericPmWithTdiInfo | null;
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
