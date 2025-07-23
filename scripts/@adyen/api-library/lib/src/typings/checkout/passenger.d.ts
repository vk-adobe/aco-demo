export declare class Passenger {
    /**
    * The passenger\'s date of birth. * Format `yyyy-MM-dd` * minLength: 10 * maxLength: 10
    */
    'dateOfBirth'?: string;
    /**
    * The passenger\'s first name. > This field is required if the airline data includes passenger details or leg details. * Encoding: ASCII
    */
    'firstName'?: string;
    /**
    * The passenger\'s last name. > This field is required if the airline data includes passenger details or leg details. * Encoding: ASCII
    */
    'lastName'?: string;
    /**
    * The passenger\'s phone number, including country code. This is an alphanumeric field that can include the \'+\' and \'-\' signs. * Encoding: ASCII * minLength: 3 characters * maxLength: 30 characters
    */
    'phoneNumber'?: string;
    /**
    * The IATA passenger type code (PTC). * Encoding: ASCII * minLength: 3 characters * maxLength: 6 characters
    */
    'travellerType'?: string;
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
