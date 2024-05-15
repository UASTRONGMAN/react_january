import Joi from "joi";

export const PostValidator = Joi.object().keys({
    title: Joi
        .string()
        .pattern(/^[a-zA-Z0-9._-]+$/)
        .required()
        .messages({
            "string.pattern.base": "use only allowed symbols!",
            "string.required.base": "this field is required"
        }),
    body: Joi
        .string()
        .required()
        .pattern(/^[a-zA-Z0-9._-]+$/)
        .messages({
            "string.pattern.base": "use only allowed symbols!",
            "string.required.base": "this field is required"
        }),
    userId: Joi
        .number()
        .required()
        .min(1)
        .max(10)
        .messages({
            "number": "You can full this field only with numbers!",
            "number.required": "this field is required",
            "number.min": "Minimal value is 1!",
            "number.max": "Maximal value is 10!"
        })

})