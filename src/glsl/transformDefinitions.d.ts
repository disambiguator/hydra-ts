import { Texture2D } from 'regl';
export declare const typeLookup: {
    src: {
        returnType: string;
        args: string[];
    };
    coord: {
        returnType: string;
        args: string[];
    };
    color: {
        returnType: string;
        args: string[];
    };
    combine: {
        returnType: string;
        args: string[];
    };
    combineCoord: {
        returnType: string;
        args: string[];
    };
};
export declare type TransformDefinitionType = keyof typeof typeLookup;
declare type TransformDefinitionInputTypeFloat = {
    type: 'float';
    default?: number | number[] | ((context: any, props: any) => number | number[]);
};
declare type TransformDefinitionInputTypeSampler2D = {
    type: 'sampler2D';
    default?: Texture2D | number;
};
declare type TransformDefinitionInputTypeVec4 = {
    type: 'vec4';
    default?: string | number;
};
declare type TransformDefinitionInputTypeTexture = {
    type: 'texture';
    default?: Texture2D;
};
export declare type TransformDefinitionInputUnion = TransformDefinitionInputTypeFloat | TransformDefinitionInputTypeSampler2D | TransformDefinitionInputTypeVec4 | TransformDefinitionInputTypeTexture;
export declare type TransformDefinitionInput = TransformDefinitionInputUnion & {
    name: string;
    vecLen?: number;
};
export interface TransformDefinition {
    name: string;
    type: TransformDefinitionType;
    inputs: readonly TransformDefinitionInput[];
    glsl: string;
}
export interface ProcessedTransformDefinition extends TransformDefinition {
    processed: true;
}
export declare const transforms: TransformDefinition[];
export {};
