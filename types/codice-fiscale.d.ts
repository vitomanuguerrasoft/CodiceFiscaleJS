import { Comune } from "./comune";
import { birthplaceFields } from "./utils";

export type Gender = "F" | "M";

export interface IComuneData {
    belfioreCode: string;
    province: string;
    name: string;
    active: boolean;
}

export interface IProvinceData {
    [key: string]: string;
}

export interface ICodiceFiscaleObject {
    name: string;
    surname: string;
    gender: Gender;
    day: number;
    month: number;
    year: number;
    birthplace: string;
    birthplaceProvincia: string;
    cf?: string;
}

declare class CodiceFiscale {
    day: number;
    month: number;
    year: number;
    readonly cf: string;
    readonly nameCode: string;
    readonly surnameCode: string;
    readonly checkCode: string;
    static utils: {
        birthplaceFields: typeof birthplaceFields;
    };
    static COMUNI: IComuneData[];
    static PROVINCE: IProvinceData;
    birthday: Date;
    birthplace: Comune;
    name: string;
    surname: string;
    gender: Gender;
    private code;
    constructor(data: string | ICodiceFiscaleObject);
    static getCheckCode(codiceFiscale: string): string;
    static findLocationCode(name: string, prov?: string): string;
    static computeInverse(codiceFiscale: string): ICodiceFiscaleObject;
    static compute(obj: object): string;
    static check(codiceFiscale: string): boolean;
    static getOmocodie(cf: string): string[];
    static nameCode(name: string): string;
    static surnameCode(surname: string): string;
    static dateCode(day: number, month: number, year: number, gender: Gender): string;
    toString(): string;
    toJSON(): ICodiceFiscaleObject;
    isValid(): boolean;
    omocodie(): string[];
    compute(): void;
    reverse(): ICodiceFiscaleObject;
    private checkGender;
    private getSurnameCode;
    private getNameCode;
    private dateCode;
}

export default CodiceFiscale;
export { CodiceFiscale };
export const COMUNI: IComuneData[];
export const PROVINCE: IProvinceData;
