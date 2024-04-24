import { ZodError, ZodType } from 'zod';

type Schema<T> = ZodType<T, any>;

const getValidationErrors = (validationErrors: ZodError) => {
    const errors: Record<string, string> = {};

    validationErrors.errors.forEach((error) => {
        const key = error.path[0];
        errors[key] = error.message;
    });

    return errors;
};

export const Validate = <T>(schema: Schema<T>, values: any): { errors: ZodError | null, value: T | null } => {
    try {
        const validatedData = schema.parse(values);
        return { errors: null, value: validatedData };
    } catch (err) {
        if (err instanceof ZodError) {
            console.log(err.issues);
        }
    }
};
