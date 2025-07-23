export declare class ChallengeInfo {
    /**
    * Indicator informing the Access Control Server (ACS) and the Directory Server (DS) that the authentication has been cancelled. Possible values: * **00**: Data element is absent or value has been sent back with the key `challengeCancel`. * **01**: Cardholder selected **Cancel**. * **02**: 3DS Requestor cancelled Authentication. * **03**: Transaction abandoned. * **04**: Transaction timed out at ACS — other timeouts. * **05**: Transaction timed out at ACS — first CReq not received by ACS. * **06**: Transaction error. * **07**: Unknown. * **08**: Transaction time out at SDK.
    */
    'challengeCancel'?: ChallengeInfo.ChallengeCancelEnum;
    /**
    * The flow used in the challenge. Possible values:  * **PWD_OTP_PHONE_FL**: one-time password (OTP) flow via SMS * **PWD_OTP_EMAIL_FL**: one-time password (OTP) flow via email * **OOB_TRIGGER_FL**: out-of-band (OOB) flow
    */
    'flow': ChallengeInfo.FlowEnum;
    /**
    * The last time of interaction with the challenge.
    */
    'lastInteraction': Date;
    /**
    * The last four digits of the phone number used in the challenge.
    */
    'phoneNumber'?: string;
    /**
    * The number of times the one-time password (OTP) was resent during the challenge.
    */
    'resends'?: number;
    /**
    * The number of retries used in the challenge.
    */
    'retries'?: number;
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
export declare namespace ChallengeInfo {
    enum ChallengeCancelEnum {
        _00 = "00",
        _01 = "01",
        _02 = "02",
        _03 = "03",
        _04 = "04",
        _05 = "05",
        _06 = "06",
        _07 = "07",
        _08 = "08"
    }
    enum FlowEnum {
        PwdOtpPhoneFl = "PWD_OTP_PHONE_FL",
        PwdOtpEmailFl = "PWD_OTP_EMAIL_FL",
        OobTriggerFl = "OOB_TRIGGER_FL"
    }
}
