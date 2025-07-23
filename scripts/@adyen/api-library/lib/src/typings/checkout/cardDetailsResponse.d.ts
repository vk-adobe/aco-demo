import { CardBrandDetails } from './cardBrandDetails';
export declare class CardDetailsResponse {
    /**
    * The list of brands identified for the card.
    */
    'brands'?: Array<CardBrandDetails>;
    /**
    * The funding source of the card, for example **DEBIT**, **CREDIT**, or **PREPAID**.
    */
    'fundingSource'?: string;
    /**
    * Indicates if this is a commercial card or a consumer card. If **true**, it is a commercial card. If **false**, it is a consumer card.
    */
    'isCardCommercial'?: boolean;
    /**
    * The two-letter country code  of the country where the card was issued.
    */
    'issuingCountryCode'?: string;
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
