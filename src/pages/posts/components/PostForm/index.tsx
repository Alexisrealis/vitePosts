import React, { useState, FormEvent } from "react";
import { Container } from '../../../../components/ui-components/container/index'
import { Field } from "../../../../components/ui-components/Field/index";
import { Form } from "../../../../components/ui-components/Form";
import { Typo } from '../../../../components/ui-components/Typo/index'
import { Input } from "../../../../components/ui-components/Input";
import * as SC from './styles'

const DEFAULT_VALUES = { title: '', body: '' }

type PostFormProps = {
    title: string;
    onSubmitForm: (formValues: {
        title: string,
        body: string
    }) => void;
}

export const PostForm: React.FC<PostFormProps> = ({ title, onSubmitForm }) => {

    const [formValues, setFormValues] = useState(DEFAULT_VALUES)

    const onChange = (name: string, value: string) => {
        setFormValues({ ...formValues, [name]: value })
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSubmitForm(formValues)
        // !initialState && setFormValues(DEFAULT_VALUES)
    }

    const disabled = !formValues.title || !formValues.body

    return (
        <Container>
            <Typo>{title}</Typo>
            <Form onSubmit={onSubmit}>
                <Field>
                    <Input
                        type="text"
                        name="title"
                        value={formValues.title}
                        placeholder="Заголовок поста"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.name, e.target.value)}
                    />
                </Field>
                <Field>
                    <SC.Textarea
                        placeholder="Текст"
                        name="body"
                        value={formValues.body}
                        rows={10}
                        cols={30}
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </Field>
                <SC.Button type="submit" disabled={disabled}>Сохранить</SC.Button>
            </Form>
        </Container>
    )
}