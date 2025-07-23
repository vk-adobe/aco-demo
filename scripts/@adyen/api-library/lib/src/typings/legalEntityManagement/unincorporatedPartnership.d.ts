import { Address } from './address';
import { TaxInformation } from './taxInformation';
export declare class UnincorporatedPartnership {
    /**
    * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the governing country.
    */
    'countryOfGoverningLaw': string;
    /**
    * The date when the legal arrangement was incorporated in YYYY-MM-DD format.
    */
    'dateOfIncorporation'?: string;
    /**
    * Short description about the Legal Arrangement.
    */
    'description'?: string;
    /**
    * The registered name, if different from the `name`.
    */
    'doingBusinessAs'?: string;
    /**
    * The legal name.
    */
    'name': string;
    'principalPlaceOfBusiness'?: Address | null;
    'registeredAddress': Address;
    /**
    * The registration number.
    */
    'registrationNumber'?: string;
    /**
    * The tax information of the entity.
    */
    'taxInformation'?: Array<TaxInformation>;
    /**
    * Type of Partnership.  Possible values: *  **limitedPartnership** *  **generalPartnership** *  **familyPartnership** *  **commercialPartnership** *  **publicPartnership** *  **otherPartnership** *  **gbr** *  **gmbh** *  **kgaa** *  **cv** *  **vof** *  **maatschap** *  **privateFundLimitedPartnership** *  **businessTrustEntity** *  **businessPartnership** *  **limitedLiabilityPartnership** *  **eg** *  **cooperative** *  **vos** *  **comunidadDeBienes** *  **herenciaYacente** *  **comunidadDePropietarios** *  **sep** *  **sca** *  **bt** *  **kkt** *  **scs** *  **snc**
    */
    'type'?: UnincorporatedPartnership.TypeEnum;
    /**
    * The reason for not providing a VAT number.  Possible values: **industryExemption**, **belowTaxThreshold**.
    */
    'vatAbsenceReason'?: UnincorporatedPartnership.VatAbsenceReasonEnum;
    /**
    * The VAT number.
    */
    'vatNumber'?: string;
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
export declare namespace UnincorporatedPartnership {
    enum TypeEnum {
        LimitedPartnership = "limitedPartnership",
        GeneralPartnership = "generalPartnership",
        FamilyPartnership = "familyPartnership",
        CommercialPartnership = "commercialPartnership",
        PublicPartnership = "publicPartnership",
        OtherPartnership = "otherPartnership",
        Gbr = "gbr",
        Gmbh = "gmbh",
        Kgaa = "kgaa",
        Cv = "cv",
        Vof = "vof",
        Maatschap = "maatschap",
        PrivateFundLimitedPartnership = "privateFundLimitedPartnership",
        BusinessTrustEntity = "businessTrustEntity",
        BusinessPartnership = "businessPartnership",
        LimitedLiabilityPartnership = "limitedLiabilityPartnership",
        Eg = "eg",
        Cooperative = "cooperative",
        Vos = "vos",
        ComunidadDeBienes = "comunidadDeBienes",
        HerenciaYacente = "herenciaYacente",
        ComunidadDePropietarios = "comunidadDePropietarios",
        Sep = "sep",
        Sca = "sca",
        Bt = "bt",
        Kkt = "kkt",
        Scs = "scs",
        Snc = "snc"
    }
    enum VatAbsenceReasonEnum {
        IndustryExemption = "industryExemption",
        BelowTaxThreshold = "belowTaxThreshold"
    }
}
