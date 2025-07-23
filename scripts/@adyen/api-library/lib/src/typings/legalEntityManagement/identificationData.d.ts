export declare class IdentificationData {
    /**
    * The card number of the document that was issued (AU only).
    */
    'cardNumber'?: string;
    /**
    * The expiry date of the document, in YYYY-MM-DD format.
    */
    'expiryDate'?: string;
    /**
    * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the document was issued. For example, **US**.
    *
    * @deprecated since Legal Entity Management API v1
    */
    'issuerCountry'?: string;
    /**
    * The state or province where the document was issued (AU only).
    */
    'issuerState'?: string;
    /**
    * Applies only to individuals in the US. Set to **true** if the individual does not have an SSN. To verify their identity, Adyen will require them to upload an ID document.
    */
    'nationalIdExempt'?: boolean;
    /**
    * The number in the document.
    */
    'number'?: string;
    /**
    * Type of identity data. For individuals, the following types are supported. See our [onboarding guide](https://docs.adyen.com/platforms/onboard-users/onboarding-steps/?onboarding_type=custom) for other supported countries.  - Australia: **driversLicense**, **passport**  - Hong Kong: **driversLicense**, **nationalIdNumber**, **passport**  - New Zealand: **driversLicense**, **passport**  - Singapore: **driversLicense**, **nationalIdNumber**, **passport**   - All other supported countries: **nationalIdNumber**
    */
    'type': IdentificationData.TypeEnum;
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
export declare namespace IdentificationData {
    enum TypeEnum {
        NationalIdNumber = "nationalIdNumber",
        Passport = "passport",
        DriversLicense = "driversLicense",
        IdentityCard = "identityCard"
    }
}
