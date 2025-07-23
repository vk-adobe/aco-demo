import { CardholderReceipt } from './cardholderReceipt';
import { Connectivity } from './connectivity';
import { Gratuity } from './gratuity';
import { Hardware } from './hardware';
import { Localization } from './localization';
import { Nexo } from './nexo';
import { OfflineProcessing } from './offlineProcessing';
import { Opi } from './opi';
import { Passcodes } from './passcodes';
import { PayAtTable } from './payAtTable';
import { Payment } from './payment';
import { ReceiptOptions } from './receiptOptions';
import { ReceiptPrinting } from './receiptPrinting';
import { Refunds } from './refunds';
import { Signature } from './signature';
import { Standalone } from './standalone';
import { StoreAndForward } from './storeAndForward';
import { Surcharge } from './surcharge';
import { TapToPay } from './tapToPay';
import { TerminalInstructions } from './terminalInstructions';
import { Timeouts } from './timeouts';
import { WifiProfiles } from './wifiProfiles';
export declare class TerminalSettings {
    'cardholderReceipt'?: CardholderReceipt | null;
    'connectivity'?: Connectivity | null;
    /**
    * Settings for tipping with or without predefined options to choose from. The maximum number of predefined options is four, or three plus the option to enter a custom tip.
    */
    'gratuities'?: Array<Gratuity> | null;
    'hardware'?: Hardware | null;
    'localization'?: Localization | null;
    'nexo'?: Nexo | null;
    'offlineProcessing'?: OfflineProcessing | null;
    'opi'?: Opi | null;
    'passcodes'?: Passcodes | null;
    'payAtTable'?: PayAtTable | null;
    'payment'?: Payment | null;
    'receiptOptions'?: ReceiptOptions | null;
    'receiptPrinting'?: ReceiptPrinting | null;
    'refunds'?: Refunds | null;
    'signature'?: Signature | null;
    'standalone'?: Standalone | null;
    'storeAndForward'?: StoreAndForward | null;
    'surcharge'?: Surcharge | null;
    'tapToPay'?: TapToPay | null;
    'terminalInstructions'?: TerminalInstructions | null;
    'timeouts'?: Timeouts | null;
    'wifiProfiles'?: WifiProfiles | null;
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
