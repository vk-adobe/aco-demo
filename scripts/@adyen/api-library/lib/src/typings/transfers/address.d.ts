export declare class Address {
    /**
    * The name of the city.  Supported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \\ |** and Space.  > Required when the `category` is **card**.
    */
    'city'?: string;
    /**
    * The two-character ISO 3166-1 alpha-2 country code. For example, **US**, **NL**, or **GB**.
    */
    'country': string;
    /**
    * The first line of the street address.  Supported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \\ |** and Space.  > Required when the `category` is **card**.
    */
    'line1'?: string;
    /**
    * The second line of the street address.  Supported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \\ |** and Space.  > Required when the `category` is **card**.
    */
    'line2'?: string;
    /**
    * The postal code. Maximum length: * 5 digits for an address in the US. * 10 characters for an address in all other countries.  Supported characters: **[a-z] [A-Z] [0-9]** and Space.  > Required for addresses in the US.
    */
    'postalCode'?: string;
    /**
    *    The two-letter ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.     > Required for the US and Canada.
    */
    'stateOrProvince'?: string;
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
