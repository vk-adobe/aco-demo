import { Amount } from './amount';
import { CapitalBalance } from './capitalBalance';
import { Counterparty } from './counterparty';
import { Fee } from './fee';
import { Repayment } from './repayment';
export declare class CapitalGrant {
    'amount'?: Amount | null;
    'balances': CapitalBalance;
    'counterparty'?: Counterparty | null;
    'fee'?: Fee | null;
    /**
    * The identifier of the grant account used for the grant.
    */
    'grantAccountId': string;
    /**
    * The identifier of the grant offer that has been selected and from which the grant details will be used.
    */
    'grantOfferId': string;
    /**
    * The identifier of the grant reference.
    */
    'id': string;
    'repayment'?: Repayment | null;
    /**
    * The current status of the grant. Possible values: **Pending**, **Active**, **Repaid**, **WrittenOff**, **Failed**, **Revoked**.
    */
    'status': CapitalGrant.StatusEnum;
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
export declare namespace CapitalGrant {
    enum StatusEnum {
        Pending = "Pending",
        Active = "Active",
        Repaid = "Repaid",
        Failed = "Failed",
        WrittenOff = "WrittenOff",
        Revoked = "Revoked"
    }
}
