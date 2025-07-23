export declare class Notification {
    /**
    * The type of event notification sent when you select the notification button.
    */
    'category'?: Notification.CategoryEnum;
    /**
    * The text shown in the prompt which opens when you select the notification button. For example, the description of the input box for pay-at-table.
    */
    'details'?: string;
    /**
    * Enables sending event notifications either by pressing the Confirm key on terminals with a keypad or by tapping the event notification button on the terminal screen.
    */
    'enabled'?: boolean;
    /**
    * Shows or hides the event notification button on the screen of terminal models that have a keypad.
    */
    'showButton'?: boolean;
    /**
    * The name of the notification button on the terminal screen.
    */
    'title'?: string;
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
export declare namespace Notification {
    enum CategoryEnum {
        SaleWakeUp = "SaleWakeUp",
        KeyPressed = "KeyPressed",
        Empty = ""
    }
}
