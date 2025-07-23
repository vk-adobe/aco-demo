import { ResourceReference } from './resourceReference';
export declare class ReportNotificationData {
    'accountHolder'?: ResourceReference | null;
    'balanceAccount'?: ResourceReference | null;
    /**
    * The unique identifier of the balance platform.
    */
    'balancePlatform'?: string;
    /**
    * The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.
    */
    'creationDate'?: Date;
    /**
    * The URL at which you can download the report. To download, you must authenticate your GET request with your [API credentials](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/overview).
    */
    'downloadUrl': string;
    /**
    * The filename of the report.
    */
    'fileName': string;
    /**
    * The ID of the resource.
    */
    'id'?: string;
    /**
    * The type of report. Possible values:  - `balanceplatform_accounting_interactive_report` - `balanceplatform_accounting_report` - `balanceplatform_balance_report` - `balanceplatform_fee_report` - `balanceplatform_payment_instrument_report` - `balanceplatform_payout_report` - `balanceplatform_statement_report`
    */
    'reportType': string;
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
