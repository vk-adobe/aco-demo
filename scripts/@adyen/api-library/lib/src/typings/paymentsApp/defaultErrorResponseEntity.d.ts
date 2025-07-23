import { InvalidField } from './invalidField';
/**
* Standardized error response following RFC-7807 format
*/
export declare class DefaultErrorResponseEntity {
    /**
    * A human-readable explanation specific to this occurrence of the problem.
    */
    'detail'?: string;
    /**
    * Unique business error code.
    */
    'errorCode'?: string;
    /**
    * A URI that identifies the specific occurrence of the problem if applicable.
    */
    'instance'?: string;
    /**
    * Array of fields with validation errors when applicable.
    */
    'invalidFields'?: Array<InvalidField>;
    /**
    * The unique reference for the request.
    */
    'requestId'?: string;
    /**
    * The HTTP status code.
    */
    'status'?: number;
    /**
    * A short, human-readable summary of the problem type.
    */
    'title'?: string;
    /**
    * A URI that identifies the validation error type. It points to human-readable documentation for the problem type.
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
