import { TerminalAssignment } from './terminalAssignment';
import { TerminalConnectivity } from './terminalConnectivity';
export declare class Terminal {
    'assignment'?: TerminalAssignment | null;
    'connectivity'?: TerminalConnectivity | null;
    /**
    * The software release currently in use on the terminal.
    */
    'firmwareVersion'?: string;
    /**
    * The unique identifier of the terminal.
    */
    'id'?: string;
    /**
    * Date and time of the last activity on the terminal. Not included when the last activity was more than 14 days ago.
    */
    'lastActivityAt'?: Date;
    /**
    * Date and time of the last transaction on the terminal. Not included when the last transaction was more than 14 days ago.
    */
    'lastTransactionAt'?: Date;
    /**
    * The model name of the terminal.
    */
    'model'?: string;
    /**
    * The exact time of the terminal reboot, in the timezone of the terminal in **HH:mm** format.
    */
    'restartLocalTime'?: string;
    /**
    * The serial number of the terminal.
    */
    'serialNumber'?: string;
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
